
export default function HostTask({ responses }: { responses: { name: string, response: string[] }[] }) {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-16 container max-w-6xl border-2 border-neutral-300">
        <div className="p-8">
          <h2 className="text-3xl font-semibold">
            Task #2: Group Chat
          </h2>

          <img
            src="/assets/tasks/missing-lunch.png"
            alt="Group Chat"
            className="mt-6 mx-auto w-72 object-cover object-center bg-neutral-200"
          />

          <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
            Who the hell stole my sandwich? I wrote my name on it and everything.
          </p>

          <p className="mt-4 text-xl">
            (Write a short, witty remark to this text...)
          </p>

          <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
            Moving on in <span className="font-bold underline underline-offset-4">20</span> seconds.
          </p>
        </div>

        <div className="p-4 flex flex-col gap-4 bg-neutral-100">
          {responses?.map((response, i) => (
            <div key={i} className="p-4 bg-white border-2 border-neutral-300">
              <p className="font-semibold">{response?.name}</p>
              {response?.response ? <p>{response?.response[0]}</p> : <p className="text-neutral-400 italic">No response</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
