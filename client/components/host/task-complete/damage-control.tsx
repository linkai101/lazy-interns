
export default function HostTask() {
  const responses = [
    { player: "Player 1", response: "I think it's time for some damage control." },
    { player: "Player 2", response: "Yeah, that thing really damages my controls. Damages 'em!" },
  ];
  return (
    <div className="size-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-16 container max-w-6xl border-2 border-neutral-300">
        <div className="p-8">
          <h2 className="text-3xl font-semibold">
            Task #4: Damage Control
          </h2>

          <img
            src="/assets/tasks/yearn-for-the-mines.png"
            alt="Damage Control"
            className="mt-6 mx-auto w-88 object-cover object-center bg-neutral-200"
          />

          <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
          We have been under fire on social media over our &quot;possible&quot; use of &quot;slightly underage&quot; workers. We need you to release a PR statement and clean this mess up by the end of the day.
          </p>

          <p className="mt-4 text-xl">
            Write a 2-3 sentence PR statement...
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
