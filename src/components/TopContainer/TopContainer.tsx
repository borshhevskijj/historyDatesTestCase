import { useContext } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";
import IntervalsControls from "../IntervalsControls/IntervalsControls";
import RoundControls from "../RoundControls/RoundControls";

export default function TopContainer() {
  const { current } = useContext(DataContext);

  return (
    <div className={styles.root}>
      <div className={styles.centerLine}></div>
      <div className={styles.title}>
        <div className={styles.titleWrapper}>
          <div className={styles.gradientLine}></div>
          Исторические <br />
          даты
        </div>
      </div>
      <div className={styles.dates}>
        <span className={styles.leftDate}>
          {INITIAL_INTERVALS[current].start}
        </span>
        <span className={styles.rightDate}>
          {INITIAL_INTERVALS[current].end}
        </span>
      </div>
      <IntervalsControls />
      <RoundControls />
    </div>
  );
}
