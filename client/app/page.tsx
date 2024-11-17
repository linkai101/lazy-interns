"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [name, setName] = useState<string>('');

  return (
    <div className="px-8 py-12 container max-w-2xl">
      <h1 className="text-3xl font-bold">
        Lazy Interns
      </h1>
      <p className="mt-1">
        A social deduction game in the workplace.
      </p>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
          id="name"
          type="text"
          value={name}
          placeholder="Mike Hawk"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
        Join Game
      </button>

      <Link href="/host" className="mx-4 text-neutral-400 font-medium underline decoration-neutral-400">
        or join as host
      </Link>
    </div>
  );
}
