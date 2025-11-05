import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context";

import styles from "./BigDates.module.scss";
import { historyData } from "../../constants/data";

export default function BigDates() {
  const { current } = useContext(DataContext);
  const [left, setLeft] = useState(historyData[current].start ?? 0);
  const [right, setRight] = useState(historyData[current].end ?? 0);

  useEffect(() => {
    let rafId = 0;
    let start: number | null = null;
    const duration = 700; // ms

    const targetLeft = historyData[current].start ?? 0;
    const targetRight = historyData[current].end ?? 0;

    const fromLeft = left;
    const fromRight = right;

    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setLeft(Math.round(fromLeft + (targetLeft - fromLeft) * e));
      setRight(Math.round(fromRight + (targetRight - fromRight) * e));
      if (p < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [current, left, right]);

  return (
    <div className={styles.root}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
