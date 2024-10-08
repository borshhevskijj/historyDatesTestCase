import { InitialData } from "./zod";

declare global {
  interface Window {
    INITIAL_INTERVALS: InitialData;
  }
}

export interface ChartDimentions {
  w: number;
  h: number;
  cX: number;
  cY: number;
}

export type Coord = {
  x: number;
  y: number;
  d: number;
  i: number;
};

export type Coords = Coord[];
