import classNames from "classnames";
import { CircleWithDots } from "../../class";
import { DataContext } from "../../context";

import styles from "./RoundControls.module.scss";

import { useContext, useEffect, useRef, useState } from "react";
import { DOT_SIZE, historyData } from "../../constants/data";

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
        {historyData.map((_, i) => {
          let index = i + current;
          if (index >= historyData.length) {
            index -= historyData.length;
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
              <div className={styles.numberContainer}>
                <div className={styles.number}>{index + 1}</div>
              </div>
              <div className={styles.label}>{historyData[current].title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
