import styles from "./style.module.scss";

export default function TopContainer() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Исторические <br />
        даты
      </div>
      <div className={styles.dates}>
        <span className={styles.leftDate}>1998</span>{" "}
        <span className={styles.rightDate}>2007</span>
      </div>
    </div>
  );
}
