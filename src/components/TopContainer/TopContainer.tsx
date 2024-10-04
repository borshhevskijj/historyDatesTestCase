import styles from "./style.module.scss";

export default function TopContainer() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Исторические <br />
        даты
      </div>
      <div className={styles.dates}>
        <span className={styles.leftDate}>2015</span>{" "}
        <span className={styles.rightDate}>2022</span>
      </div>
    </div>
  );
}
