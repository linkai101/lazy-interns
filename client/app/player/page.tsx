"use client";

import { useState } from 'react';
import Pregame from '@/components/player/pregame';
import Onboarding from '@/components/player/onboarding';
import type { GameState } from '@/types/game';

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>("pregame");

  return (
    <div className="px-8 py-12 container max-w-4xl">
      <div className="flex items-end justify-between">
        <h1 className="font-bold">
          Lazy Interns
        </h1>

        <p>
          state: {gameState}
        </p>
      </div>

      <div className="mt-8">
        {gameState === "pregame" ? <Pregame/>
        : gameState === "onboarding" ? <Onboarding/>
        : <></>
        }
      </div>
    </div>
  );
}
