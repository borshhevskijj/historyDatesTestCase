import TopContainer from "../TopContainer/TopContainer";
import styles from "./style.module.scss";

export default function Container() {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <TopContainer />
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>2</div>
    </div>
  );
}
