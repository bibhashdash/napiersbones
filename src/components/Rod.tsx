import {Multiple} from "../data";
import {BounceIndices} from "../app/page";

interface RodProps {
  rod: Array<Multiple>,
  litIndex: number,
  bounceIndices: BounceIndices,
  rodIndex: number,
}

export const Rod = ({rod, litIndex, bounceIndices, rodIndex}: RodProps) => {
  return (
    rod.map((item, index) => (
      <div
        className={`px-4 h-[60px] border-2 border-gray-500 rounded-md text-2xl flex w-full justify-evenly items-center
         ${index === litIndex - 1 ? 'bg-red-500 text-gray-50' : ''}
         ${rodIndex === bounceIndices.indexOne?.value && index === litIndex - 1 ? 'border-4 border-green-700' : ''}`}
        key={index}>
        {
          index > 0 &&
          <div
            className={`flex pr-2 ${rodIndex === bounceIndices.indexOne?.value && bounceIndices.indexOne.litConditionals.tensLit && index === litIndex - 1 ? 'text-black' : ''}`}
          >
            {item.tens.value}
          </div>
        }
        <div
          className={`
          ${index > 0 ? "border-l-2 border-gray-300 pl-2" : ""}
          ${rodIndex === bounceIndices.indexOne?.value && bounceIndices.indexOne.litConditionals.zerothLit && index === litIndex - 1 ? 'text-black' : ''}
          `}
        >
          {item.zeroth.value}
        </div>
      </div>
    ))
  )
}