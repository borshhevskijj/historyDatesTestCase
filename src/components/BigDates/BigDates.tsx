import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./BigDates.module.scss";

const animateNumber = (next: number, setValue: (i: number) => void) => {
  const steps = 5;
  let newValue = next - steps;
  const int = setInterval(() => {
    setValue(newValue++);
    if (newValue > next) {
      clearInterval(int);
    }
  }, 100);
};

export default function BigDates() {
  const { current } = useContext(DataContext);
  const [left, setLeft] = useState(INITIAL_INTERVALS[current].start ?? 0);
  const [right, setRight] = useState(INITIAL_INTERVALS[current].end ?? 0);

  useEffect(() => {
    if (INITIAL_INTERVALS[current].start !== left)
      animateNumber(INITIAL_INTERVALS[current].start, setLeft);
    if (INITIAL_INTERVALS[current].end !== left)
      animateNumber(INITIAL_INTERVALS[current].end, setRight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className={styles.root}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
