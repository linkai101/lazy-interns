"use client";

import { useState } from 'react';
import GamePre from '@/components/player/game-pre';
import Onboarding from '@/components/player/onboarding';
import TaskNewsArticle from '@/components/player/task/news-article';
import type { GameState } from '@/types/game';

export default function GamePage() {
  // const [gameState, setGameState] = useState<GameState>("game-pre");
  const [gameState, setGameState] = useState<GameState>("task");
  const [task, setTask] = useState<string>("news-article");

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
        {gameState === "game-pre" ? <GamePre/>
        : gameState === "onboarding" ? <Onboarding/>
        : gameState === "task" ? (
          task === "news-article" ? <TaskNewsArticle/>
          : <></>
        )
        : <></>
        }
      </div>
    </div>
  );
}
