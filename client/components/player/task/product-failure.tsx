import { useState } from 'react';

export default function PlayerTask() {
  const [headline, setHeadline] = useState<string>('');
  const [lead, setLead] = useState<string>('');

  return (
    <div>
      <h2 className="text-2xl">
        Task #3: Product Failure
      </h2>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Criticism
        </label>
        <textarea
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          value={lead}
          rows={3}
          placeholder="Write 2-3 sentences explaining the flaws..."
          onChange={(e) => setLead(e.target.value)}
        />
      </div>

      <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
        Submit
      </button>
    </div>
  )
}
