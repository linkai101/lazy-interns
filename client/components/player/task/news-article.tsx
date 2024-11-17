"use client";
import LazyInternView from './lazy-intern-news-article';

export default function PlayerTask({ isLazyIntern, response, setResponse, submitResponse }: { isLazyIntern: boolean, response: string[], setResponse: (response: string[]) => void, submitResponse: () => void }) {
  if (isLazyIntern) return <LazyInternView
    title="Task #1: News Article"
    response={response}
    setResponse={setResponse}
    submitResponse={submitResponse}
  />;

  return (
    <div>
      <h2 className="text-2xl">
        Task #1: News Article
      </h2>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Headline
        </label>
        <input
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          type="text"
          value={response[0]}
          placeholder="Write a headline..."
          onChange={(e) => setResponse([e.target.value, response[1]])}
        />
      </div>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Lead
        </label>
        <textarea
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          value={response[1]}
          rows={3}
          placeholder="Write a 1-2 sentence lead..."
          onChange={(e) => setResponse([response[0], e.target.value])}
        />
      </div>

      <button
        className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
        disabled={!response[0] || !response[1] || response[0].length === 0 || response[1].length === 0}
        onClick={submitResponse}
      >
        Submit
      </button>
    </div>
  )
}
