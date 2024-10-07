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
