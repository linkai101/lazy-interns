
export default function HostTask() {
  const responses = [
    { player: "Player 1", response: "I think it's time for some severance." },
    { player: "Player 2", response: "Yeah, that thing really severes. Forgot my second line!" },
  ];
  return (
    <div className="size-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-16 container max-w-6xl border-2 border-neutral-300">
        <div className="p-8">
          <h2 className="text-3xl font-semibold">
            Task #5: Severance
          </h2>

          <img
            src="/assets/tasks/firing-of-jimmy.png"
            alt="Severance"
            className="mt-6 mx-auto w-88 object-cover object-center bg-neutral-200"
          />

          <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
          Psst! I heard a rumor that our coworker Jimmy got let go last Friday. We don&apos;t know much about Jimmy… He&apos;s always kept to himself and never attended the team-bonding events. I wonder what he did to get fired.
          </p>

          <p className="mt-4 text-xl">
          Give some context to the firing of Jimmy. What did he really do to get fired?
          </p>

          <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
            Moving on in <span className="font-bold underline underline-offset-4">20</span> seconds.
          </p>
        </div>

        <div className="p-4 flex flex-col gap-4 bg-neutral-100">
          {responses.map((response, i) => (
            <div key={i} className="p-4 bg-white border-2 border-neutral-300">
              <p className="font-semibold">{response.player}</p>
              <p>{response.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
