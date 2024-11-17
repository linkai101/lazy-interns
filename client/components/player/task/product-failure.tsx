"use client";
import LazyInternView from './lazy-intern';

export default function PlayerTask({ isLazyIntern, response, setResponse, submitResponse }: { isLazyIntern: boolean, response: string[], setResponse: (response: string[]) => void, submitResponse: () => void }) {
  if (isLazyIntern) return <LazyInternView
    title="Task #3: Product Failure"
    response={response}
    setResponse={setResponse}
    submitResponse={submitResponse}
  />;

  return (
    <div>
      <h2 className="text-2xl">
        Task #3: Product Failure
      </h2>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Feedback
        </label>
        <textarea
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          value={response[0]}
          rows={3}
          placeholder="Write 2-3 sentences explaining the flaws..."
          onChange={(e) => setResponse([e.target.value])}
        />
      </div>

      <button
        className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
        disabled={!response[0] || response[0].length === 0}
        onClick={submitResponse}
      >
        Submit
      </button>
    </div>
  )
}
