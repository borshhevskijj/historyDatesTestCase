import IntervalsControls from "../IntervalsControls/IntervalsControls";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import styles from "./style.module.scss";

export default function BottomContainer() {
  return (
    <div className={styles.root}>
      <SwiperComponent />
      <IntervalsControls tabletHide={true} />
    </div>
  );
}
