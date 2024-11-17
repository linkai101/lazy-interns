"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GamePre from '@/components/player/game-pre';
import Onboarding from '@/components/player/onboarding';

import TaskNewsArticle from '@/components/player/task/news-article';
import TaskGroupChat from '@/components/player/task/group-chat';
import TaskProductFailure from '@/components/player/task/product-failure';
import TaskDamageControl from '@/components/player/task/damage-control';
import TaskSeverance from '@/components/player/task/severance';
import TaskDone from '@/components/player/task/done';

import TaskComplete from '@/components/player/task-complete';

import { subscribeToSession, updatePlayerResponse, getPlayerResponses, getPlayer } from '@/utils/db';
import type { GameState, Task, Session } from '@/types/game';

export default function GamePage() {
  const router = useRouter();
  const [playerId, setPlayerId] = useState<string|null>(null);
  const [session, setSession] = useState<Session|null>(null);

  const [gameState, setGameState] = useState<GameState>("game-pre");
  const [task, setTask] = useState<Task>("news-article");
  const [isLazyIntern, setIsLazyIntern] = useState<boolean>(false);
  const [response, setResponse] = useState<string[]>([]);
  const [responseSubmitted, setResponseSubmitted] = useState<boolean>(false);

  // on page load
  useEffect(() => {
    const pId = localStorage.getItem('playerId');
    if (!pId) return router.push('/');
    setPlayerId(pId);

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
    const checkOwnResponse = async () => {
      if (!playerId) return;
      const responses = await getPlayerResponses("0");
      if (responses[playerId] && responses[playerId].response) {
        setResponse(responses[playerId].response);
        setResponseSubmitted(true);
      } else {
        setResponse([]);
        setResponseSubmitted(false);
      }
    }

    const checkPlayer = async () => {
      if (!playerId) return;
      const player = await getPlayer("0", playerId);
      if (player?.isLazyIntern) setIsLazyIntern(player.isLazyIntern);
    }

    checkPlayer();
    checkOwnResponse();
  }, [gameState, task]);

  // submit response
  async function submitResponse() {
    if (!response.length || !playerId) return;
    await updatePlayerResponse("0", playerId, response);
    setResponse([]);
    setResponseSubmitted(true);
  }

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
          responseSubmitted ? <TaskDone/>
          : task === "news-article" ? <TaskNewsArticle isLazyIntern={isLazyIntern} response={response} setResponse={setResponse} submitResponse={submitResponse}/>
          : task === "group-chat" ? <TaskGroupChat isLazyIntern={isLazyIntern} response={response} setResponse={setResponse} submitResponse={submitResponse}/>
          : task === "product-failure" ? <TaskProductFailure isLazyIntern={isLazyIntern} response={response} setResponse={setResponse} submitResponse={submitResponse}/>
          : task === "damage-control" ? <TaskDamageControl isLazyIntern={isLazyIntern} response={response} setResponse={setResponse} submitResponse={submitResponse}/>
          : task === "severance" ? <TaskSeverance isLazyIntern={isLazyIntern} response={response} setResponse={setResponse} submitResponse={submitResponse}/>
          : <></>
        )
        : gameState === "task-complete" ? <TaskComplete/>
        : <></>
        }
      </div>
    </div>
  );
}
