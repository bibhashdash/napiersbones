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

export * from './multiplesOne';
export * from './multiplesTwo';
export * from './multiplesThree';