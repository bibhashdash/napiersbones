'use client';
import {FormEvent, useState} from "react";
import {rodOne, rodTwo, rodThree, Rods, Multiple, RodsDict} from "../data";
import {Rod} from "../components/Rod";

const numKeypad: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]


export default function Home() {

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [listOfRods, setListOfRods] = useState<Array<Array<Multiple>>>([])
  const allMultiples: RodsDict = {
    1: rodOne,
    2: rodTwo,
    3: rodThree,
  }
  const handleFirstSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempArray = firstNumber.toString().trim().split('');
    for (let i = 0; i< tempArray.length; i++) {
      for (const [key, value] of Object.entries(allMultiples)) {
        if (key === tempArray[i]) {
          console.log(value);
          setListOfRods(prevState => [...prevState, value]);
        }
      }
    }
  }

  const handleSecondSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main className="flex flex-col h-screen items-center">
      <div
        className="px-4 py-2 w-full max-w-5xl border-2 border-green-700 rounded-md h-full flex flex-col justify-between items-center">
        <div className="grid grid-cols-12 w-full gap-2">
          <div className="col-span-1 flex flex-col gap-2">
            {
              numKeypad
                .map(item =>
                  <div
                    className="px-4 h-[60px] border-2 border-gray-500 rounded-md text-2xl bg-amber-300 text-gray-950 hover:bg-gray-700 hover:text-gray-50 flex justify-center items-center"
                    key={item}
                  >
                    {item}
                  </div>
                )
            }
          </div>
          <div className="col-span-11 border-2 border-gray-100 rounded-md flex gap-2">
            {
              listOfRods.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Rod rod={item} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <form onSubmit={e => handleFirstSubmit(e)} className="flex flex-col items-center gap-2">
            <label>First number</label>
            <input onChange={e => setFirstNumber(e.target.valueAsNumber)} type="number" className="rounded-md border-2 border-gray-500 text-2xl"/>
            <button className="bg-gray-950 text-gray-50 px-4 py-2 rounded-md">Submit</button>
          </form>
          <div>
            ❌
          </div>
          <form onSubmit={e => handleSecondSubmit(e)} className="flex flex-col items-center gap-2">
            <label>Second number</label>
            <input onChange={e => setSecondNumber(e.target.valueAsNumber)} type="number" className="rounded-md border-2 border-gray-500 text-2xl"/>
            <button className="bg-gray-950 text-gray-50 px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>

      </div>
    </main>
  );
}
