
export default function PlayerOnboarding({ isLazyIntern }: { isLazyIntern: boolean }) {

  if (isLazyIntern) return (
    <div>
      <h2 className="text-2xl">
        You are <span className="font-semibold">a lazy intern</span>.
      </h2>

      <p className="mt-4 text-lg">
        You will use your AI companion to complete your tasks. Don&apos;t get caught, at all costs.
      </p>

      <p className="mt-4 text-lg">
        The game will begin momentarily.
      </p>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl">
        You are a <span className="font-semibold">hardworking employee</span>.
      </h2>

      <p className="mt-4 text-lg">
        Respond to the tasks in your own words. Identify the lazy intern and report them to HR.
      </p>

      <p className="mt-4 text-lg">
        The game will begin momentarily.
      </p>
    </div>
  )
}
