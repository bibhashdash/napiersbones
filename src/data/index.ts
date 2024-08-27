import {rodOne} from "./multiplesOne";
import {rodTwo} from "./multiplesTwo";
import {rodThree} from "./multiplesThree";

export interface Multiple {
  zeroth: number,
  tens: number,
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
}

export * from './multiplesOne';
export * from './multiplesTwo';
export * from './multiplesThree';