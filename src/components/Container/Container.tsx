import BottomContainer from "../BottomContainer/BottomContainer";
import TopContainer from "../TopContainer/TopContainer";
import styles from "./style.module.scss";

export default function Container() {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <TopContainer />
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
        <BottomContainer />
      </div>
    </div>
  );
}
