import IntervalsControlls from "../IntervalsControlls/IntervalsControlls";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import styles from "./style.module.scss";

export default function BottomContainer() {
  return (
    <div className={styles.root}>
      <IntervalsControlls />
      <div className={styles.wrapper}>
        <SwiperComponent />
      </div>
    </div>
  );
}
