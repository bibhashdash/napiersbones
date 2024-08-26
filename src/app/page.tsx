const numKeypad: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center">
      <div
        className="px-4 py-2 w-full max-w-5xl border-2 border-green-700 rounded-md h-full flex flex-col justify-between items-center">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            {
              numKeypad.filter(item => item > 0)
                .map(item =>
                  <div
                    className="p-4 border-2 border-gray-500 rounded-md text-2xl hover:bg-gray-700 hover:text-gray-50"
                    key={item}
                  >
                    {item}
                  </div>
                )
            }
          </div>
        </div>
        <div className="w-full max-w-[320px] flex flex-wrap gap-2">
          {
            numKeypad.map(item => (
              <button
                key={item}
                className="p-4 border-2 border-gray-500 rounded-md text-2xl hover:bg-gray-700 hover:text-gray-50"
              >
                {item}
              </button>
            ))
          }
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md bg-gray-700 text-gray-50 hover:bg-gray-900">Multiply</button>
          <button className="px-4 py-2 rounded-md bg-gray-700 text-gray-50 disabled:bg-gray-300 cursor-not-allowed"
                  disabled={true}>Divide
          </button>
        </div>
      </div>
    </main>
  );
}
