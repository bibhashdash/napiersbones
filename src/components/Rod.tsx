import {Multiples} from "../data";

export const Rod = (rod: Array<Multiples>) => {
  return (
    rod.map((item, index) => (
      <div className="px-4 h-[60px] border-2 border-gray-500 rounded-md text-2xl flex w-full justify-evenly items-center" key={index}>
        {
          index > 0 && <div className="flex pr-2">{item.tens}</div>
        }
        <div className={index > 0 ? "border-l-2 border-gray-800 pl-2" : ""}>{item.zeroth}</div>
      </div>
    ))
  )
}