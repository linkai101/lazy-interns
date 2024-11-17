"use client";
import { useState } from 'react';

export default function LazyInternView({ title, response, setResponse, submitResponse }: { title: string; response: string[]; setResponse: (response: string[]) => void, submitResponse: () => void }) {
  const [prompt1, setPrompt1] = useState<string>('');
  const [loading1, setLoading1] = useState<boolean>(false);
  const [headline, setHeadline] = useState<string>('');
  const [prompt2, setPrompt2] = useState<string>('');
  const [loading2, setLoading2] = useState<boolean>(false);

  async function generateResponse1() {
    if (!prompt1) return;
    setLoading1(true);
    const res = await fetch(`/api/player?prompt=${prompt1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data.response);
    setHeadline(data.response);
    setLoading1(false);
  }

  async function generateResponse2() {
    if (!prompt2) return;
    setLoading2(true);
    let prompt2Full = `The headline of the news article is ${headline}. ${prompt2}`;
    const res = await fetch(`/api/player?prompt=${prompt2Full}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data.response);
    setResponse([headline, data.response]);
    setLoading2(false);
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
        <label className="font-semibold" htmlFor="prompt1">
          You:
        </label>
        {!headline && !loading1 ? <>
          <textarea
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
            id="prompt1"
            value={prompt1}
            rows={3}
            placeholder="Write a prompt for AI... (generate a headline)"
            onChange={(e) => setPrompt1(e.target.value)}
          />

          <button
            className="mt-4 px-3 py-1 bg-teal-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
            disabled={prompt1.length === 0}
            onClick={() => generateResponse1()}
          >
            Generate headline
          </button>
        </>
        :
          <p>{prompt1}</p>
        }
      </div>

      {loading1 &&
        <div className="mt-8">
          <label className="font-semibold">
            AI:
          </label>

          <div className="mt-1 h-4 bg-neutral-200 rounded-md animate-pulse"/>
        </div>
      }

      {headline && <>
        <div className="mt-8">
          <label className="font-semibold">
            AI:
          </label>
          
          {/* <p>{headline}</p> */}
          <p className="text-neutral-400 italic">
            Response will be revealed after submission.<br/>
            ({headline.length} characters)
          </p>
        </div>

        <div className="mt-8">
          <label className="font-semibold" htmlFor="prompt1">
            You:
          </label>
          <p>
            The headline of the news article is <span className="text-neutral-400 italic">[hidden]</span>.
          </p>
          {!response[1] && !loading2 ? <>
            <textarea
              className="w-full mt-1 px-3 py-1 border border-gray-300 rounded"
              id="prompt2"
              value={prompt2}
              rows={3}
              placeholder="Write a prompt for AI... (generate a lead)"
              onChange={(e) => setPrompt2(e.target.value)}
            />

            <button
              className="mt-4 px-3 py-1 bg-teal-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
              disabled={prompt2.length === 0}
              onClick={() => generateResponse2()}
            >
              Generate lead
            </button>
          </>
          :
            <p>{prompt2}</p>
          }
        </div>

        {response[1] && <>
          <div className="mt-8">
            <label className="font-semibold">
              AI:
            </label>
            
            {/* <p>{response}</p> */}
            <p className="text-neutral-400 italic">
              Response will be revealed after submission.<br/>
              ({response[1].length} characters)
            </p>
          </div>

          <button
            className="mt-4 px-3 py-1 bg-blue-500 text-white font-semibold rounded disabled:opacity-60 transition-opacity"
            // disabled={response[0].length === 0 || response[1].length === 0}
            onClick={submitResponse}
          >
            Submit
          </button>
        </>}
      </>}
    </div>
  );
}
