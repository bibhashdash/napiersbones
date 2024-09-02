'use client';
import {FormEvent, useState} from "react";
import {Multiple} from "../data";
import {Rod} from "../components/Rod";
import {MultiplyIcon} from "../components/MultiplyIcon";
import {generateRodNumbers} from "../utilities/generateRodNumbers";
const numKeypad: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export interface BounceIndex {
  index: number,
  zeroth: boolean,
  tens: boolean,
}
export default function Home() {

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [multiplicand, setMultiplicand] = useState<number>(0);
  const [listOfRods, setListOfRods] = useState<Array<Array<Multiple>>>([]);
  const [result, setResult] = useState<Array<string>>(["0"]);
  const [bounceIndex, setBounceIndex] = useState<BounceIndex>({
    zeroth: false,
    tens: false,
    index: 0,
  })

  const handleFirstSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstNumber > 0) {
      const tempArray = firstNumber.toString().trim().split('');
      for (let i = 0; i< tempArray.length; i++) {
        setListOfRods(prevState => [...prevState, generateRodNumbers(Number(tempArray[i]))]);
      }
    }
  }

  const handleSecondSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMultiplicand(secondNumber);
  }

  const handleFirstNumberReset = () => {
    setListOfRods([]);
    setFirstNumber(0);
    setResult(["0"]);
  }

  const handleSecondNumberReset = () => {
    setMultiplicand(0);
    setSecondNumber(0);
    setResult(["0"]);
  }

  const handleResultCalculation = () => {
    let finalArray: Array<string> = [];
    const rodsArrayLength = listOfRods.length;
    const singleValue = listOfRods[rodsArrayLength - 1][multiplicand - 1].zeroth.value;
    setBounceIndex({
      index: rodsArrayLength - 1,
      tens: false,
      zeroth: true,
    })
    finalArray.unshift(singleValue.toString());
    let carryOver = 0;
    for(let i = listOfRods.length - 2; i >= 0 ; i--) {
      // setBounceIndex({
      //   index: i,
      //   tens: false,
      //   zeroth: true,
      // })
      const sum = listOfRods[i+1][multiplicand-1].tens.value + listOfRods[i][multiplicand-1].zeroth.value + carryOver;
      if (sum < 10) {
        finalArray.unshift(sum.toString());
        carryOver = 0;
      } else {
        finalArray.unshift(sum.toString().split('')[1]);
        carryOver = Number(sum.toString().split('')[0]);
      }
      if (i === 0) {
        finalArray.unshift((listOfRods[i][multiplicand - 1].tens.value + carryOver).toString());
      }
    }
    if (finalArray[0] === '0') {
      finalArray.shift();
    }
    setResult(finalArray);
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
                    className={`px-4 h-[60px] border-2 border-gray-500 rounded-md text-2xl bg-amber-300 hover:bg-gray-700 hover:text-gray-50 flex justify-center items-center ${multiplicand === item ? 'bg-red-500 text-gray-50' : 'text-gray-950'}`}
                    key={item}
                  >
                    {item}
                  </div>
                )
            }
          </div>
          <div className="col-span-11 border-2 border-gray-100 rounded-md flex gap-2">
              {
                listOfRods.length > 0 && listOfRods.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <Rod
                      rodIndex={index}
                      bounceIndex={bounceIndex}
                      litIndex={multiplicand}
                      rod={item}
                    />
                  </div>
                ))
              }
            </div>
        </div>

        <p className="text-4xl text-red-500 w-fit">Result: {result.join('')}</p>
        <div className="number-input-section">
          <form onSubmit={e => handleFirstSubmit(e)} className="flex flex-col items-center gap-2">
            <label>First number</label>
            {
              listOfRods.length === 0 ?
                <>
                  <input
                    onChange={e => setFirstNumber(e.target.valueAsNumber)}
                    type="number"
                    className="rounded-md border-2 border-gray-500 text-2xl"/>
                  <button className="bg-gray-950 text-gray-50 px-4 py-2 rounded-md">Submit</button>
                </>
                :
                <>
                  <p className="text-2xl">{firstNumber}</p>
                  <button
                    onClick={handleFirstNumberReset}
                    className="bg-gray-950 text-gray-50 px-4 py-2 rounded-md">Reset</button>
                </>
            }

          </form>
          <div className="flex justify-center text-5xl">
            <MultiplyIcon size={36} colour="#000000" />
          </div>
          <form onSubmit={e => handleSecondSubmit(e)} className="flex flex-col items-center gap-2">
            <label>Second number</label>
            {
              multiplicand === 0 ?
                <>
                  <input onChange={e => setSecondNumber(e.target.valueAsNumber)} type="number" className="rounded-md border-2 border-gray-500 text-2xl"/>
                  <button className="bg-gray-950 text-gray-50 px-4 py-2 rounded-md">Submit</button>
                </>
                :
                <>
                  <>
                    <p className="text-2xl">{secondNumber}</p>
                    <button onClick={handleSecondNumberReset} className="bg-gray-950 text-gray-50 px-4 py-2 rounded-md">Reset</button>
                  </>
                </>
            }
          </form>
        </div>
        <button
          onClick={handleResultCalculation}
          disabled={listOfRods.length <= 0 || multiplicand <= 0}
          className="bg-red-500 text-gray-50 px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400"
        >
          Calculate Result
        </button>
      </div>
    </main>
  );
}
