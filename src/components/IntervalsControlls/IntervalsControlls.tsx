import { useCallback, useContext } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import Arrow from "../../assets/arrow.svg";

export default function IntervalsControlls() {
  const { current, setCurrent } = useContext(DataContext);
  const totalCount = INITIAL_INTERVALS.length ?? 0;

  const nextInterval = useCallback(
    (prev: number) => {
      if (prev < totalCount - 1) setCurrent(prev + 1);
    },
    [totalCount, setCurrent]
  );

  const prevInterval = useCallback(
    (prev: number) => {
      if (prev > 0) setCurrent(prev - 1);
    },
    [totalCount, setCurrent]
  );

  return (
    <div className={styles.controlls}>
      <div className={styles.controlls__title}>
        {current < 10 && 0}
        {current + 1}/{totalCount < 10 && 0}
        {totalCount}
      </div>
      <button
        className={classNames(
          styles.controlls__leftButton,
          styles.controlls__button,
          current <= 0 && styles.controlls__button_inactive
        )}
        onClick={() => prevInterval(current)}
      >
        <img src={Arrow} />
      </button>
      <button
        className={classNames(
          styles.controlls__button,
          current >= totalCount - 1 && styles.controlls__button_inactive
        )}
        onClick={() => nextInterval(current)}
      >
        <img src={Arrow} />
      </button>
    </div>
  );
}
