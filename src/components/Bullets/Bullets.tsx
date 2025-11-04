import { useContext, memo } from "react";
import { DataContext } from "../../context";
import { historyData } from "../../constants/data";
import styles from "./Bullets.module.scss";

const Bullets = () => {
  const { current, setCurrent } = useContext(DataContext);
  const totalCount = historyData.length ?? 0;
  console.log({ current });

  return (
    <div className={styles.container}>
      {Array.from({ length: totalCount }).map((_, i) => {
        const isActive = current === i;
        return (
          <button
            key={i}
            type="button"
            aria-label={`Go to item ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
          />
        );
      })}
    </div>
  );
};

export default memo(Bullets);
