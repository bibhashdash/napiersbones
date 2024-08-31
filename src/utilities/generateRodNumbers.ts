import {Multiple} from "../data";
export const generateRodNumbers = (seed: number): Array<Multiple> => {
  let tempArray: Array<Multiple> = [];
  for (let i = 1; i < 10; i++) {
    const multiple = seed * i;
    const splitArray = multiple.toString().split('');
    if (splitArray.length > 1) {
      tempArray.push({
        zeroth: {
          value: Number(splitArray[1]),
          isLit: false,
        },
        tens: {
          value: Number(splitArray[0]),
          isLit: false,
        },
      })
    }
    else if (splitArray.length === 1) {
      tempArray.push({
        zeroth: {
          value: Number(splitArray[0]),
          isLit: false,
        },
        tens: {
          value: 0,
          isLit: false,
        },
      })
    }
  }
  return tempArray;
}