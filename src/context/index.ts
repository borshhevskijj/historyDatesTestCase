import { createContext } from "react";

export const DataContext = createContext({
  current: 0,
  isAnimating: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrent: (_n: number): void => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsAnimating: (_isAnimating: boolean): void => {},
});
