import styles from "./style.module.scss";

export default function TopContainer() {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.titleWrapper}>
          <div className={styles.gradientLine}></div>
          Исторические <br />
          даты
        </div>
      </div>
      <div className={styles.dates}>
        <span className={styles.leftDate}>2015</span>
        <span className={styles.rightDate}>2022</span>
      </div>
    </>
  );
}
