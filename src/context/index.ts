import { createContext } from "react";

export const DataContext = createContext({
  current: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrent: (_n: number): void => {},
});
