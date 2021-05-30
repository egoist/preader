import cheerio from 'cheerio'

export const rewriteContent = (url: string, html: string) => {
  const $ = cheerio.load(html)

  $('img').each(function () {
    const el = $(this)
    if (el.attr('data-lazy-src')) {
      el.attr('src', el.attr('data-lazy-src'))
    }
    const src = new URL(el.attr('src') || el.attr('data-src'), url).href
    if (!src || src.startsWith('data:')) return
    const alt = el.attr('alt')
    el.replaceWith($(`<img src="/api/proxy?url=${src}" alt="${alt}">`))
  })

  return $.root().html()
}
