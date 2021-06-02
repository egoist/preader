import cheerio, { Cheerio, CheerioAPI, Element } from 'cheerio'
import { getCustomCss } from './custom-css'
import { contentSelectorRules } from './rules'

const divToPElementsRegexp = /<(a|blockquote|dl|div|img|ol|p|pre|table|ul)/i
const blacklistCandidatesRegexp = /popupbody|-ad|g-plus/i
const unlikelyCandidatesRegexp =
  /banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|foot|header|legends|menu|modal|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i
const okMaybeItsACandidateRegexp = /and|article|body|column|main|shadow/i
const negativeRegexp =
  /hidden|^hid$|hid$|hid|^hid |banner|combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|modal|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget|byline|author|dateline|writtenby|p-author/i
const positiveRegexp =
  /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i
const sentenceRegexp = /\.( |$)/

const defaultTagsToScore = 'section,h2,h3,h4,h5,h6,p,td,pre,div'

export function extractContent(hostname: string, html: string) {
  const $ = cheerio.load(html)
  $('script, style').each(function () {
    $(this).remove()
  })

  const contentSelector = contentSelectorRules[hostname] || 'body'
  const $content = cheerio.load($(contentSelector).html())

  transformMisusedDivsIntoParagraphs($content)
  removeUnlikelyCandidates($content)

  const candidates = getCandidates($content)
  const topCandidate = getTopCandidate($content, candidates)

  let output = getArticle($content, topCandidate, candidates)
  const title =
    $('meta[property="og:title"]').attr('content') || $('title').text()
  const description =
    $('meta[property="og:description"]').attr('content') ||
    $('meta[name="description"]').attr('content')

  const css = getCustomCss($, hostname)
  if (css) {
    output += `<style>${css}</style>`
  }

  return {
    title,
    description,
    content: output,
  }
}

function transformMisusedDivsIntoParagraphs($: CheerioAPI) {
  $('div').each(function () {
    const html = $(this).html()
    if (!divToPElementsRegexp.test(html)) {
      $(this).get(0).tagName = 'p'
    }
  })
}

function removeUnlikelyCandidates($: CheerioAPI) {
  $('*')
    .not('html,body')
    .each(function () {
      const className = $(this).attr('class')
      const id = $(this).attr('id')

      const str = className + id

      if (
        blacklistCandidatesRegexp.test(str) ||
        (unlikelyCandidatesRegexp.test(str) &&
          !okMaybeItsACandidateRegexp.test(str))
      ) {
        $(this).remove()
      }
    })
}

type Candidate = { el: Cheerio<Element>; score: number }
type Candidates = Map<Element, Candidate>

function getCandidates($: CheerioAPI) {
  const candidates: Candidates = new Map()

  $(defaultTagsToScore).each(function () {
    const el = $(this)
    const text = el.text()

    // If this paragraph is less than 25 characters, don't even count it.
    if (text.length < 25) {
      return
    }

    const parent = el.parent()
    const parentNode = parent.get(0)
    const grandParent = parent.parent()

    let grandParentNode: Element | undefined
    if (grandParent.length > 0) {
      grandParentNode = grandParent.get(0)
    }

    const found = candidates.get(parentNode)
    if (!found) {
      candidates.set(parentNode, scoreNode(parent))
    }

    if (grandParentNode != null) {
      const found = candidates.get(grandParentNode)
      if (!found) {
        candidates.set(grandParentNode, scoreNode(grandParent))
      }
    }

    // Add a point for the paragraph itself as a base.
    let contentScore = 1

    // Add points for any commas within this paragraph.
    contentScore += (text.match(/,/g) || []).length

    // For every 100 characters in this paragraph, add another point. Up to 3 points.
    contentScore += Math.min(text.length / 100, 3)

    candidates.get(parentNode).score += contentScore
    if (grandParentNode != null) {
      candidates.get(grandParentNode).score += contentScore / 2
    }
  })

  for (const c of candidates.values()) {
    c.score = c.score * (1 - getLinkDensity(c.el))
  }

  return candidates
}

function scoreNode(el: Cheerio<Element>) {
  const c = { el, score: 0 }

  switch (el.get(0).tagName.toLowerCase()) {
    case 'div':
      c.score += 5
    case 'pre':
    case 'td':
    case 'blockquote':
    case 'img':
      c.score += 3
    case 'address':
    case 'ol':
    case 'ul':
    case 'dl':
    case 'dd':
    case 'dt':
    case 'li':
    case 'form':
      c.score -= 3
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'th':
      c.score -= 5
  }

  c.score += getClassWeight(el)
  return c
}

// Get an elements class/id weight. Uses regular expressions to tell if this
// element looks good or bad.
function getClassWeight(el: Cheerio<Element>): number {
  let weight = 0
  const className = el.attr('class')
  const id = el.attr('id')

  if (className) {
    if (negativeRegexp.test(className)) {
      weight -= 25
    }

    if (positiveRegexp.test(className)) {
      weight += 25
    }
  }

  if (id) {
    if (negativeRegexp.test(id)) {
      weight -= 25
    }

    if (positiveRegexp.test(id)) {
      weight += 25
    }
  }

  return weight
}

// Get the density of links as a percentage of the content
// This is the amount of text that is inside a link divided by the total text in the node.
function getLinkDensity(el: Cheerio<Element>): number {
  const linkLength = el.find('a').text().length
  const textLength = el.text().length

  if (textLength === 0) {
    return 0
  }

  return linkLength / textLength
}

function getTopCandidate($: CheerioAPI, candidates: Candidates) {
  let best: Candidate | undefined

  for (const c of candidates.values()) {
    if (best == null) {
      best = c
    } else if (best.score < c.score) {
      best = c
    }
  }

  if (best == null) {
    best = { el: $('body'), score: 0 }
  }

  return best
}

// Now that we have the top candidate, look through its siblings for content that might also be related.
// Things like preambles, content split by ads that we removed, etc.
function getArticle(
  $: CheerioAPI,
  topCandidate: Candidate,
  candidates: Candidates,
): string {
  let output = '<!--start--><div>'
  const siblingScoreThreshold = Math.max(10, topCandidate.score * 0.2)

  topCandidate.el
    .siblings()
    .add(topCandidate.el)
    .each(function () {
      const el = $(this)
      let append = false
      let node = el.get(0)

      if (node === topCandidate.el.get(0)) {
        append = true
      } else if (
        candidates.has(node) &&
        candidates.get(node).score >= siblingScoreThreshold
      ) {
        append = true
      }

      if (el.is('p')) {
        const linkDensity = getLinkDensity(el)
        const content = el.text()
        const contentLength = content.length

        if (contentLength >= 80 && linkDensity < 0.25) {
          append = true
        } else if (
          contentLength < 80 &&
          linkDensity == 0 &&
          sentenceRegexp.test(content)
        ) {
          append = true
        }
      }

      if (append) {
        let tag = 'div'
        if (el.is('p')) {
          tag = node.tagName
        }

        const html = el.html()
        output += `<!--append-start--><${tag}>${html}</${tag}><!--append-end-->`
      }
    })

  output += '</div><!--end-->'
  return output
}
