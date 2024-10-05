import { useCallback, useContext } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";

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
        {current < 10 ?? 0}
        {current + 1}/{totalCount < 10 ?? 0}
        {totalCount}
      </div>
      <button
        className={classNames(
          styles.controlls__button,
          current <= 0 && styles.controlls__button_inactive
        )}
        onClick={() => prevInterval(current)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </button>
      <button
        className={classNames(
          styles.controlls__button,
          current >= totalCount - 1 && styles.controlls__button_inactive
        )}
        onClick={() => nextInterval(current)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </button>
    </div>
  );
}
