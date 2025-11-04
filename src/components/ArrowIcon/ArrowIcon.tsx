import classNames from "classnames";
import styles from "./ArrowIcon.module.scss";
type Position = "prev" | "next";
type Color = "primary" | "secondary";

interface ArrowIconProps {
  position?: Position;
  color?: Color;
  isMobile?: boolean;
}

const ArrowIcon = ({
  color = "primary",
  position = "next",
  isMobile = false,
}: ArrowIconProps) => {
  const colorMapping = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  const positionMapping = {
    next: styles.next,
    prev: styles.prev,
  };

  return (
    <div
      className={classNames(
        styles.container,
        colorMapping[color],
        positionMapping[position]
      )}
    >
      {isMobile ? (
        <svg
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.53918 0.707093L1.41418 3.83209L4.53918 6.95709"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      ) : (
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      )}
    </div>
  );
};

export default ArrowIcon;
