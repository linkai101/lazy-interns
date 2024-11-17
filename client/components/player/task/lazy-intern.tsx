"use client";
import { useState } from 'react';

export default function LazyInternView({ title, response, setResponse }: { title: string; response: string; setResponse: (response: string) => void }) {
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function generateResponse() {
    if (!prompt) return;
    setLoading(true);
    const res = await fetch(`/api/player?prompt=${prompt}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data.response);
    setResponse(data.response);
    setLoading(false);
  }
  
  return (
    <div>
      <h2 className="text-2xl">
        {title}
      </h2>

      <p className="text-neutral-400 italic">
        (complete the task with your AI assistant)
      </p>

      <div className="mt-8">
        <label className="font-semibold">
          System:
        </label>
        <p>
          You are an assistant for an employee tasked with answering a prompt for an office-related incident.
          The employee is stuck and needs your help to generate a response to the task in their own words.
        </p>
      </div>

      <div className="mt-8">
        <label className="font-semibold" htmlFor="prompt">
          You:
        </label>
        {!response && !loading ? <>
          <textarea
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
            id="prompt"
            value={prompt}
            rows={3}
            placeholder="Write a prompt for AI..."
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            className="mt-4 px-3 py-1 bg-teal-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
            disabled={prompt.length === 0}
            onClick={() => generateResponse()}
          >
            Generate response
          </button>
        </>
        :
          <p>{prompt}</p>
        }
      </div>

      {loading &&
        <div className="mt-8">
          <label className="font-semibold">
            AI:
          </label>

          <div className="mt-1 h-4 bg-neutral-200 rounded-md animate-pulse"/>
        </div>
      }

      {response && <>
        <div className="mt-8">
          <label className="font-semibold">
            AI:
          </label>
          
          {/* <p>{response}</p> */}
          <p className="text-neutral-400 italic">
            Response will be revealed after submission.<br/>
            ({response.length} characters)
          </p>
        </div>

        <button className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
          Submit
        </button>
      </>}
    </div>
  );
}
