import classNames from "classnames";
import styles from "./style.module.scss";

export default function BottomContainer() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.slider}>
          <div
            className={classNames(
              styles.slider__item,
              styles.slider__item_active
            )}
          >
            <p>2015</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
              deleniti similique praesentium placeat fugit.
            </p>
          </div>
          <div className={classNames(styles.slider__item)}>
            <p>2016</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
              deleniti similique praesentium placeat fugit.
            </p>
          </div>
          <div className={styles.slider__item}>
            <p>2017</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
              deleniti similique praesentium placeat fugit.
            </p>
          </div>
          <div className={styles.slider__item}>
            <p>2018</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
              deleniti similique praesentium placeat fugit.
            </p>
          </div>
          <div className={styles.slider__item}>
            <p>2019</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
              deleniti similique praesentium placeat fugit.
            </p>
          </div>
          <div className={styles.slider__item}>
            <p>2020</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
              deleniti similique praesentium placeat fugit.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.controlls}>
        <div className={styles.controlls__buttons}>
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
        <div className={styles.controlls__dots}>
          <div className={styles.controlls__dot}></div>
          <div className={styles.controlls__dot}></div>
          <div className={styles.controlls__dot}></div>
          <div className={styles.controlls__dot}></div>
          <div className={styles.controlls__dot}></div>
          <div
            className={classNames(
              styles.controlls__dot,
              styles.controlls__dot_active
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}
