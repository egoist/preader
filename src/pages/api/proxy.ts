import fetch from 'node-fetch'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const url = req.query.url as string
  const result = await fetch(url)
  result.body.pipe(res)
}

export default handler
