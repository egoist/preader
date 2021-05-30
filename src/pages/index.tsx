import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function HomePage() {
  const router = useRouter()
  const [isFetching, setIsFetching] = React.useState(false)

  const [result, setResult] =
    React.useState<
      { title: string; html: string; description?: string } | undefined
    >()

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    // @ts-expect-error
    router.push(`/?url=${e.target.value}`)
  }

  const fetchContent = async (url: string) => {
    setIsFetching(true)
    const res = await fetch(`/api/extract?url=${url}`).then((res) => res.json())
    setResult(res)
    setIsFetching(false)
  }

  React.useEffect(() => {
    if (router.query.url) {
      fetchContent(router.query.url as string)
    }
  }, [router.query.url])

  return (
    <div>
      <NextSeo
        title="Preader"
        description="Extract the main content of a web page"
        twitter={{
          handle: '@_egoistlily',
          cardType: 'summary',
        }}
      />
      <header className="border-b py-2 flex items-center px-5 justify-between">
        <div className="flex items-center w-full pr-5">
          <h1 className="font-bold mr-5">Preader</h1>
          <input
            className="bg-gray-100 rounded-lg h-8 w-full px-3 focus:outline-none focus:ring-2"
            defaultValue={router.query.url || ''}
            onKeyDown={handleKeyDown}
            placeholder="Enter an article URL.."
          />
        </div>
        <div>
          <a href="https://github.com/egoist/preader" target="_blank">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <div className="mx-auto max-w-3xl my-5">
        {isFetching && <div>Fetching...</div>}
        {!isFetching && result && (
          <div>
            <h1 className="text-4xl font-bold">{result.title}</h1>
            {result.description && (
              <h2 className="text-2xl font-bold text-gray-600 mt-2">
                {result.description}
              </h2>
            )}
            <div
              className="output text-lg mt-8"
              dangerouslySetInnerHTML={{ __html: result.html }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}
