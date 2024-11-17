
export default function HostTask() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="p-8 container max-w-2xl border-2 border-neutral-300">
        <h2 className="text-3xl font-semibold">
          Task #5: Severance
        </h2>

        <img
          src="/assets/tasks/firing-of-jimmy.png"
          alt="Severance"
          className="mt-6 aspect-video object-cover object-center bg-neutral-200"
        />

        <p className="mt-4 text-xl">
          Psst! I heard a rumor that our coworker Jimmy got let go last Friday. We don&apos;t know much about Jimmy… He&apos;s always kept to himself and never attended the team-bonding events. I wonder what he did to get fired.
        </p>

        <p className="mt-4 text-xl">
          Give some context to the firing of Jimmy. What did he really do to get fired?
        </p>
      </div>
    </div>
  )
}
