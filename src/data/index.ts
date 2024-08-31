import {rodOne} from "./multiplesOne";
import {rodTwo} from "./multiplesTwo";
import {rodThree} from "./multiplesThree";
import {rodFour} from "./multiplesFour";

export interface Multiple {
  zeroth: {
    value: number,
    isLit: boolean
  },
  tens: {
    value: number,
    isLit: boolean
  },
}

export interface Rods {
  rod: Array<Multiple>
}

export interface RodsDict {
  [key: number]: Array<Multiple>
}

export const allMultiples: RodsDict = {
  1: rodOne,
  2: rodTwo,
  3: rodThree,
  4: rodFour,
}

export * from './multiplesOne';
export * from './multiplesTwo';
export * from './multiplesThree';