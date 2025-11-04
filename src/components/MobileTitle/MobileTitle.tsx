import { useContext } from "react";
import { historyData } from "../../constants/data";
import { DataContext } from "../../context";
import styles from "./MobileTitle.module.scss";
import { getHideAnimationStyles } from "../../helpers";

const MobileTitle = () => {
  const { current, isAnimating } = useContext(DataContext);

  return (
    <div
      style={getHideAnimationStyles(isAnimating)}
      className={styles.container}
    >
      {historyData[current].title}
    </div>
  );
};

export default MobileTitle;
