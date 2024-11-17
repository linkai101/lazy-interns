"use client";
import { useState } from 'react';
import LazyInternView from './lazy-intern';

export default function PlayerTask({ isLazyIntern }: { isLazyIntern: boolean }) {
  const [response, setResponse] = useState<string>('');

  if (isLazyIntern) return <LazyInternView
    title="Task #3: Product Failure"
    response={response}
    setResponse={setResponse}
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
          value={response}
          rows={3}
          placeholder="Write 2-3 sentences explaining the flaws..."
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>

      <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
        Submit
      </button>
    </div>
  )
}
