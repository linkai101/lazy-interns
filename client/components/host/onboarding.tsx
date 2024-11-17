
export default function HostOnboarding() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="p-8 container max-w-2xl border-2 border-neutral-300">
        <h2 className="text-3xl font-semibold italic">
          Congrats. You&apos;ve been hired.
        </h2>

        <p className="mt-6 text-xl">
          You&apos;re now an employee of a prestigious company. Are you a hard worker? Or you <span className="text-red-500 font-semibold">a lazy intern?</span> <span className="italic">(Look at your screen to find out.)</span>
        </p>

        <p className="mt-6 text-xl">
          There will be <span className="font-semibold">5 tasks</span> to complete. There is <span className="font-semibold">1 lazy intern</span> among you using generative AI to complete their tasks. Find them and give them the boot. Our stakeholders are counting on you.
        </p>

        <p className="mt-6 pl-4 text-xl border-l-[3px] border-neutral-200">
          The game will begin in <span className="font-bold underline underline-offset-4">20</span> seconds.
        </p>
      </div>
    </div>
  )
}
