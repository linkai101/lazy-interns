import { useState } from 'react';

export default function PlayerTask() {
  const [headline, setHeadline] = useState<string>('');
  const [lead, setLead] = useState<string>('');

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
          value={headline}
          placeholder="Write a headline..."
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Lead
        </label>
        <textarea
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          value={lead}
          rows={3}
          placeholder="Write a 1-2 sentence lead..."
          onChange={(e) => setLead(e.target.value)}
        />
      </div>

      <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
        Submit
      </button>
    </div>
  )
}
