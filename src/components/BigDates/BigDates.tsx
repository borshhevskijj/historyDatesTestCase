import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./BigDates.module.scss";

export default function BigDates() {
  const { current } = useContext(DataContext);
  const [left, setLeft] = useState(INITIAL_INTERVALS[current].start ?? 0);
  const [right, setRight] = useState(INITIAL_INTERVALS[current].end ?? 0);

  useEffect(() => {
    let rafId = 0;
    let start: number | null = null;
    const duration = 700; // ms

    const targetLeft = INITIAL_INTERVALS[current].start ?? 0;
    const targetRight = INITIAL_INTERVALS[current].end ?? 0;

    const fromLeft = left;
    const fromRight = right;

    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      // easeOutCubic
      const e = 1 - Math.pow(1 - p, 3);
      setLeft(Math.round(fromLeft + (targetLeft - fromLeft) * e));
      setRight(Math.round(fromRight + (targetRight - fromRight) * e));
      if (p < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [current]);

  return (
    <div className={styles.root}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
