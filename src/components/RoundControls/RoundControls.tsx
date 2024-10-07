import classNames from "classnames";
import { CircleWithDots } from "../../class";
import { DataContext } from "../../context";
import { DOT_SIZE, INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";

import { useContext, useEffect, useRef, useState } from "react";
import { Coords } from "../../types";

export default function RoundControls() {
  const [coords, setCoords] = useState<Coords>();
  const [bound, setBound] = useState<DOMRect>();

  const { current, setCurrent } = useContext(DataContext);
  const dotsCount = INITIAL_INTERVALS.length ?? 0;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBound(ref?.current?.getBoundingClientRect());
  }, []);

  useEffect(() => {
    console.log("coords", coords);
    if (bound?.width) {
      setCoords(
        new CircleWithDots(bound?.width, DOT_SIZE, dotsCount).calculate()
      );
    }
  }, [bound?.width, dotsCount]);

  return (
    <div className={styles.root}>
      <div ref={ref} className={styles.circle}>
        {coords?.map((dot, i) => {
          return (
            <div
              className={classNames(
                styles.dot,
                i === current && styles.dot_active
              )}
              style={{ left: dot.x, top: dot.y }}
              key={i}
              onClick={() => setCurrent(i)}
            >
              <div>{i + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
