
export default function HostTask() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="p-8 container max-w-2xl border-2 border-neutral-300">
        <h2 className="text-3xl font-semibold">
          Task #3: Product Failure
        </h2>

        <img
          src="/assets/tasks/mattress-mistake.png"
          alt="News Article"
          className="mt-6 aspect-video object-cover object-center bg-neutral-200"
        />

        <p className="mt-4 text-xl">
          Attached is a recent product of ours that has not performed well as of late. We are surveying the workforce for any constructive criticism.
        </p>
      </div>
    </div>
  )
}
