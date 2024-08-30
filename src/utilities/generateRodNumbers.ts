import {Multiple} from "../data";

export const generateRodNumbers = (seed: number): Array<Multiple> => {
  let tempArray: Array<Multiple> = [];
  for (let i = 1; i < 10; i++) {
    const multiple = seed * i;
    const splitArray = multiple.toString().split('');
    if (splitArray.length > 1) {
      tempArray.push({
        zeroth: Number(splitArray[1]),
        tens: Number(splitArray[0]),
      })
    }
    else if (splitArray.length === 1) {
      tempArray.push({
        zeroth: Number(splitArray[0]),
        tens: 0,
      })
    }
  }
  return tempArray;
}