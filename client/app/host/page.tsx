"use client";

import { useState } from 'react';
import GamePre from '@/components/host/game-pre';
import Onboarding from '@/components/host/onboarding';
import TaskNewsArticle from '@/components/host/task/news-article';
import TaskDamageControl from '@/components/host/task/damage-control';
import TaskSeverance from '@/components/host/task/severance';
import type { GameState, Task } from '@/types/game';

export default function GamePage() {
  // const [gameState, setGameState] = useState<GameState>("game-pre");
  const [gameState, setGameState] = useState<GameState>("task");
  const [task, setTask] = useState<Task>("news-article");

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex items-end justify-between">
        <h1 className="font-bold">
          Lazy Interns
        </h1>

        <p>
          [HOST] state: {gameState} (X players)
        </p>
      </div>

      <div className="flex-1">
        {gameState === "game-pre" ? <GamePre/>
        : gameState === "onboarding" ? <Onboarding/>
        : gameState === "task" ? (
          task === "news-article" ? <TaskNewsArticle/>
          : task === "damage-control" ? <TaskDamageControl/>
          : task === "severance" ? <TaskSeverance/>
          : <></>
        )
        : <></>
        }
      </div>
    </div>
  );
}
