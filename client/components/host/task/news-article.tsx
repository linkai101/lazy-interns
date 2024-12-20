
export default function HostTask() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="p-8 container max-w-2xl border-2 border-neutral-300">
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
      </div>
    </div>
  )
}
