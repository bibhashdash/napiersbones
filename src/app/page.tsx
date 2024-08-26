'use client';
import {useState} from "react";
import { rodOne } from "../data";

const numKeypad: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleNumClick = (num: number) => {
    setIsLoading(true);
    console.log(num);
    setIsLoading(false);
  }
  return (
    <main className="flex flex-col h-screen items-center">
      <div
        className="px-4 py-2 w-full max-w-5xl border-2 border-green-700 rounded-md h-full flex flex-col justify-between items-center">
        <div className="grid grid-cols-12 w-full gap-2">
          <div className="col-span-1 flex flex-col gap-2">
            {
              numKeypad.filter(item => item > 0)
                .map(item =>
                  <div
                    className="p-4 border-2 border-gray-500 rounded-md text-2xl bg-amber-300 text-gray-950 hover:bg-gray-700 hover:text-gray-50 flex justify-center"
                    key={item}
                  >
                    {item}
                  </div>
                )
            }
          </div>
          <div className="col-span-11 border-2 border-gray-100 rounded-md flex gap-2">
            <div className="flex flex-col gap-2">
              {
                rodOne.map((item, index) => (
                  <div className="px-4 border-2 border-gray-500 rounded-md text-2xl" key={index}>
                    {
                      index > 0 && <div>{item.zeroth}</div>
                    }
                    <div>{item.tens}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-full max-w-[320px] flex flex-wrap gap-2">
          {
            numKeypad.map(item => (
              <button
                onClick={() => handleNumClick(item)}
                key={item}
                disabled={isLoading}
                className="p-4 border-2 border-gray-500 rounded-md text-2xl hover:bg-gray-700 hover:text-gray-50 disabled:bg-gray-300"
              >
                {item}
              </button>
            ))
          }
        </div>
        {/*<div className="flex gap-2">*/}
        {/*  <button className="px-4 py-2 rounded-md bg-gray-700 text-gray-50 hover:bg-gray-900">Multiply</button>*/}
        {/*  <button className="px-4 py-2 rounded-md bg-gray-700 text-gray-50 disabled:bg-gray-300 cursor-not-allowed"*/}
        {/*          disabled={true}>Divide*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </main>
  );
}
