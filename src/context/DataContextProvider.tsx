import React, { useState } from "react";
import { DataContext } from ".";

type Props = {
  children: React.ReactElement;
};

export default function DataContextProvider({ children }: Props) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  return (
    <DataContext.Provider
      value={{ current, setCurrent, isAnimating, setIsAnimating }}
    >
      {children}
    </DataContext.Provider>
  );
}
