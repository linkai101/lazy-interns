"use client";

import { useState } from 'react';
import GamePre from '@/components/host/game-pre';
import Onboarding from '@/components/host/onboarding';

import TaskNewsArticle from '@/components/host/task/news-article';
import TaskGroupChat from '@/components/host/task/group-chat';
import TaskProductFailure from '@/components/host/task/product-failure';
import TaskDamageControl from '@/components/host/task/damage-control';
import TaskSeverance from '@/components/host/task/severance';

import TaskCompleteNewsArticle from '@/components/host/task-complete/news-article';
import TaskCompleteGroupChat from '@/components/host/task-complete/group-chat';
import TaskCompleteProductFailure from '@/components/host/task-complete/product-failure';
import TaskCompleteDamageControl from '@/components/host/task-complete/damage-control';
import TaskCompleteSeverance from '@/components/host/task-complete/severance';

import type { GameState, Task } from '@/types/game';

export default function GamePage() {
  // const [gameState, setGameState] = useState<GameState>("game-pre");
  const [gameState, setGameState] = useState<GameState>("task-complete");
  const [task, setTask] = useState<Task>("severance");

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
          : task === "group-chat" ? <TaskGroupChat/>
          : task === "product-failure" ? <TaskProductFailure/>
          : task === "damage-control" ? <TaskDamageControl/>
          : task === "severance" ? <TaskSeverance/>
          : <></>
        )
        : gameState === "task-complete" ? (
          task === "news-article" ? <TaskCompleteNewsArticle/>
          : task === "group-chat" ? <TaskCompleteGroupChat/>
          : task === "product-failure" ? <TaskCompleteProductFailure/>
          : task === "damage-control" ? <TaskCompleteDamageControl/>
          : task === "severance" ? <TaskCompleteSeverance/>
          : <></>
        )
        : <></>
        }
      </div>
    </div>
  );
}
