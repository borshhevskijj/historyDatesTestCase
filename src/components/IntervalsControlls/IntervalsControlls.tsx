import styles from "./style.module.scss";
import classNames from "classnames";

export default function IntervalsControlls() {
  return (
    <div className={styles.controlls}>
      <div className={styles.controlls__title}>06/06</div>
      <button className={styles.controlls__button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </button>
      <button
        className={classNames(
          styles.controlls__button,
          styles.controlls__button_inactive
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </button>
    </div>
  );
}
