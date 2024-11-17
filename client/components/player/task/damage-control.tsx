"use client";
import { useState } from 'react';
import LazyInternView from './lazy-intern';

export default function PlayerTask({ isLazyIntern }: { isLazyIntern: boolean }) {
  const [response, setResponse] = useState<string>('');

  if (isLazyIntern) return <LazyInternView
    title="Task #4: Damage Control"
    response={response}
    setResponse={setResponse}
  />;

  return (
    <div>
      <h2 className="text-2xl">
        Task #4: Damage Control
      </h2>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          PR Statement
        </label>
        <textarea
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          value={response}
          rows={3}
          placeholder="Write a 2-3 sentence PR statement..."
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>

      <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
        Submit
      </button>
    </div>
  );
}