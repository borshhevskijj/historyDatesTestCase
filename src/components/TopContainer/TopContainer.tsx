import { useContext } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";

export default function TopContainer() {
  const { current } = useContext(DataContext);

  return (
    <>
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
    </>
  );
}
