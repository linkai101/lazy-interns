import { useState } from 'react';

export default function PlayerTask() {
  const [explanation, setExplanation] = useState<string>('');

  return (
    <div>
      <h2 className="text-2xl">
        Task #5: Severance
      </h2>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Explanation
        </label>
        <textarea
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          value={explanation}
          rows={3}
          placeholder="Write a 2-3 sentence explanation..."
          onChange={(e) => setExplanation(e.target.value)}
        />
      </div>

      <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
        Submit
      </button>
    </div>
  )
}
