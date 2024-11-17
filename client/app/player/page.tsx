"use client";

import { useState } from 'react';
import GamePre from '@/components/player/game-pre';
import Onboarding from '@/components/player/onboarding';

import TaskNewsArticle from '@/components/player/task/news-article';
import TaskGroupChat from '@/components/player/task/group-chat';
import TaskProductFailure from '@/components/player/task/product-failure';
import TaskDamageControl from '@/components/player/task/damage-control';
import TaskSeverance from '@/components/player/task/severance';

import TaskComplete from '@/components/player/task-complete';

import type { GameState, Task } from '@/types/game';

export default function GamePage() {
  // const [gameState, setGameState] = useState<GameState>("game-pre");
  const [gameState, setGameState] = useState<GameState>("task");
  const [task, setTask] = useState<Task>("news-article");
  const [isLazyIntern, setIsLazyIntern] = useState<boolean>(true);

  return (
    <div className="px-8 py-12 container max-w-4xl">
      <div className="flex items-end justify-between">
        <h1 className="font-bold">
          Lazy Interns
        </h1>

        <p>
          state: {gameState} {gameState === "task" && <>({task})</>}
        </p>
      </div>

      <div className="mt-8">
        {gameState === "game-pre" ? <GamePre/>
        : gameState === "onboarding" ? <Onboarding/>
        : gameState === "task" ? (
          task === "news-article" ? <TaskNewsArticle isLazyIntern={isLazyIntern}/>
          : task === "group-chat" ? <TaskGroupChat isLazyIntern={isLazyIntern}/>
          : task === "product-failure" ? <TaskProductFailure isLazyIntern={isLazyIntern}/>
          : task === "damage-control" ? <TaskDamageControl isLazyIntern={isLazyIntern}/>
          : task === "severance" ? <TaskSeverance isLazyIntern={isLazyIntern}/>
          : <></>
        )
        : gameState === "task-complete" ? <TaskComplete/>
        : <></>
        }
      </div>
    </div>
  );
}
