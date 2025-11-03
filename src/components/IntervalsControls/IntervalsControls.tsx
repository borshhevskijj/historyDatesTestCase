import { useCallback, useContext } from "react";
import styles from "./IntervalsControls.module.scss";
import classNames from "classnames";
import { DataContext } from "../../context";
import Arrow from "../../assets/arrow.svg";
import { historyData } from "../../constants/data";

export default function IntervalsControls({
  mobileHide = false,
  tabletHide = false,
}: {
  mobileHide?: boolean;
  tabletHide?: boolean;
}) {
  const { current, setCurrent } = useContext(DataContext);
  const totalCount = historyData.length ?? 0;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [totalCount, setCurrent]
  );

  return (
    <div
      className={classNames(
        styles.controls,
        mobileHide && styles.mobile__hide,
        tabletHide && styles.tablet__hide
      )}
    >
      <div className={styles.controls__title}>
        {current < 10 && 0}
        {current + 1}/{totalCount < 10 && 0}
        {totalCount}
      </div>
      <button
        className={classNames(
          styles.controls__leftButton,
          styles.controls__button,
          current <= 0 && styles.controls__button_inactive
        )}
        disabled={current <= 0}
        onClick={() => prevInterval(current)}
      >
        <img src={Arrow} />
      </button>
      <button
        className={classNames(
          styles.controls__button,
          current >= totalCount - 1 && styles.controls__button_inactive
        )}
        onClick={() => nextInterval(current)}
        disabled={current >= totalCount - 1}
      >
        <img src={Arrow} />
      </button>
    </div>
  );
}
