
export default function HostTask() {
  const responses = [
    { player: "Player 1", response: ["Headline", "Lead"] },
    { player: "Player 2", response: ["Headline", "Lead"] },
  ];

  return (
    <div className="size-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-16 container max-w-6xl border-2 border-neutral-300">
        <div className="p-8">
          <h2 className="text-3xl font-semibold">
            Task #1: News Article
          </h2>

          <img
            src="/assets/tasks/godzilla-in-nyc.png"
            alt="News Article"
            className="mt-6 aspect-video object-cover object-center bg-neutral-200"
          />

          <p className="mt-4 text-xl">
            We just got breaking news! We need a headline and a lead for this article ASAP.
          </p>

          <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
            Moving on in <span className="font-bold underline underline-offset-4">20</span> seconds.
          </p>
        </div>

        <div className="p-4 flex flex-col gap-4 bg-neutral-100">
          {responses.map((response, i) => (
            <div key={i} className="p-4 bg-white border-2 border-neutral-300">
              <p className="font-semibold">{response.player}</p>
              <p>
                <span className="font-semibold italic">{response.response[0]}</span> — {response.response[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
