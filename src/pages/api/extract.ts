import { NextApiHandler } from 'next'
import fetch from 'node-fetch'
import { extractContent } from '../../lib/extract-content'
import { rewriteContent } from '../../lib/rewrite-content'

const handler: NextApiHandler = async (req, res) => {
  const url = req.query.url as string
  const { hostname } = new URL(url)

  let html = await fetch(url, {
    headers: {
      'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36`,
    },
  }).then((res) => res.text())
  let title = ''
  const extracted = extractContent(hostname, html)
  title = extracted.title
  html = extracted.content

  html = rewriteContent(url, html)

  res.send({
    title,
    html,
    description: extracted.description,
  })
}

export default handler
