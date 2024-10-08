import { useContext } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";

export default function BigDates() {
  const { current } = useContext(DataContext);

  return (
    <div className={styles.root}>
      <span>{INITIAL_INTERVALS[current].start}</span>
      <span>{INITIAL_INTERVALS[current].end}</span>
    </div>
  );
}
