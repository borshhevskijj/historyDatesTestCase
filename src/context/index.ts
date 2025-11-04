import { createContext, Dispatch, SetStateAction } from "react";

type ctx = {
  current: number;
  isAnimating: boolean;
  setCurrent: Dispatch<SetStateAction<number>>;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
};
export const DataContext = createContext<ctx>({
  current: 0,
  isAnimating: false,
  setCurrent: () => {},
  setIsAnimating: () => {},
});
