import classNames from "classnames";
import { CircleWithDots } from "../../class";
import { DataContext } from "../../context";
import { DOT_SIZE, INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";

import { useContext, useEffect, useRef, useState } from "react";

export default function RoundControls() {
  const [circle, setCircle] = useState<CircleWithDots>();
  const { current, setCurrent } = useContext(DataContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      setCircle(new CircleWithDots(ref?.current, current, DOT_SIZE));
      circle?.moveTo(current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className={styles.root}>
      <div ref={ref} className={styles.circle}>
        {INITIAL_INTERVALS.map((_, i) => {
          let index = i + current;
          if (index >= INITIAL_INTERVALS.length) {
            index -= INITIAL_INTERVALS.length;
          }
          return (
            <div
              className={classNames(
                styles.dot,
                index === current && styles.dot_active
              )}
              key={index}
              onClick={() => {
                setCurrent(index);
              }}
            >
              <div className={styles.number}>{index + 1}</div>
              <div className={styles.label}>
                {INITIAL_INTERVALS[current].title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
