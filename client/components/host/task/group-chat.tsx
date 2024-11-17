
export default function HostTask() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="p-8 container max-w-2xl border-2 border-neutral-300">
        <h2 className="text-3xl font-semibold">
          Task #2: Group Chat
        </h2>

        <img
          src="/assets/tasks/missing-lunch.png"
          alt="News Article"
          className="mt-6 mx-auto w-96 object-cover object-center bg-neutral-200"
        />

        <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
          Who the hell stole my sandwich? I wrote my name on it and everything.
        </p>

        <p className="mt-4 text-xl">
          (Write a short, witty remark to this text...)
        </p>
      </div>
    </div>
  )
}
