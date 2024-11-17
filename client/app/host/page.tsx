"use client";

import { useState, useEffect } from 'react';
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

import { subscribeToSession, getPlayerResponses } from '@/utils/db';
import type { GameState, Task, Session } from '@/types/game';

export default function GamePage() {
  const [session, setSession] = useState<Session|null>(null);

  const [gameState, setGameState] = useState<GameState>("game-pre");
  const [task, setTask] = useState<Task>("news-article");

  const [playerResponses, setPlayerResponses] = useState<{[id: string] :{ name: string, response: string[] }}>({});

  // on page load
  useEffect(() => {
    const unsubscribe = subscribeToSession("0", (data) => {
      setSession(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // on session change
  useEffect(() => {
    if (!session) return;
    console.log(session);
    if (session.gameState) setGameState(session.gameState);
    if (session.task) setTask(session.task);
  }, [session]);

  // on gameState or task change
  useEffect(() => {
    const fetchPlayerResponses = async () => {
      const responses = await getPlayerResponses("0");
      if (responses) {
        setPlayerResponses(responses);
        console.log(responses);
      }
    }

    fetchPlayerResponses();
  }, [gameState, task]);

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
        
        {gameState === "game-pre" ? <GamePre players={playerResponses}/>
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
          task === "news-article" ? <TaskCompleteNewsArticle responses={Object.values(playerResponses)}/>
          : task === "group-chat" ? <TaskCompleteGroupChat responses={Object.values(playerResponses)}/>
          : task === "product-failure" ? <TaskCompleteProductFailure responses={Object.values(playerResponses)}/>
          : task === "damage-control" ? <TaskCompleteDamageControl responses={Object.values(playerResponses)}/>
          : task === "severance" ? <TaskCompleteSeverance responses={Object.values(playerResponses)}/>
          : <></>
        )
        : <></>
        }
      </div>
    </div>
  );
}
