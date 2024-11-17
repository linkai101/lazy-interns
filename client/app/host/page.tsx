"use client";

import { useState } from 'react';
import Pregame from '@/components/player/pregame';
import Onboarding from '@/components/player/onboarding';
import type { GameState } from '@/types/game';

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>("pregame");

  return (
    <div className="absolute inset-0">
      <div className="flex items-end justify-between">
        <h1 className="font-bold">
          Lazy Interns
        </h1>

        <p>
          state: {gameState} (X players)
        </p>
      </div>

      {gameState === "pregame" ? <Pregame/>
      : gameState === "onboarding" ? <Onboarding/>
      : <></>
      }
    </div>
  );
}
