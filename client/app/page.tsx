"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getPlayer, createPlayer } from '@/utils/db';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState<string>('');

  // on page load
  useEffect(() => {
    async function fetchPlayer() { // check if existing player in active game exists
      const playerId = localStorage.getItem('playerId');
      if (playerId) {
        const player = await getPlayer('0', playerId);
        if (player) {
          console.log('player detected', player);
          return router.push('/player');
        }
      }
      console.log('no existing player detected');
    }
    fetchPlayer();
  }, []);

  async function joinGame() {
    localStorage.removeItem('playerId');
    const newPlayer = await createPlayer('0', name);
    localStorage.setItem('playerId', newPlayer.id);
    console.log('new player created', newPlayer);
    router.push('/player');
  }

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

      <button
        className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
        disabled={name.length === 0}
        onClick={() => joinGame()}
      >
        Join Game
      </button>

      <Link href="/host" className="mx-4 text-neutral-400 font-medium underline decoration-neutral-400">
        or join as host
      </Link>
    </div>
  );
}
