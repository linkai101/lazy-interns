
export default function HostGamePre({ players }: { players: { [playerId: string]: { name: string }} }) {
  // const players = [
  //   { name: 'Mike Hawk' },
  //   { name: 'Hugh Jass' },
  //   { name: 'Al Coholic' },
  //   { name: 'Seymour Butz' },
  //   { name: 'Maya Normousbutt' },
  //   { name: 'Dixie Normous' },
  //   { name: 'Eileen Dover' },
  // ];

  return (
    <div className="size-full flex items-center justify-center">
      <div className="p-8 container max-w-xl border-2 border-neutral-300">
        <h2 className="text-3xl font-semibold">
          Waiting for players...
        </h2>

        <div className="mt-8 flex flex-col gap-2">
          {Object.entries(players).map(([id, { name }]) => (
            <div key={id} className="flex items-center justify-between">
              <p className="text-lg">
                {name}
              </p>
              {/* <button className="text-red-500 text-sm font-semibold hover:underline underline-red-500 rounded">
                Kick
              </button> */}
            </div>
          ))}
        </div>
        
        <button className="mt-8 px-3 py-1 bg-blue-500 text-white font-semibold rounded">
          Start Game
        </button>
      </div>
    </div>
  )
}
