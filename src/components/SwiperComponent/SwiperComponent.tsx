import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useContext, useMemo, useState, useCallback } from "react";
import { DataContext } from "../../context";
import { historyData } from "../../constants/data";
import { Swiper as SwiperType } from "swiper/types";

import styles from "./SwiperComponent.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

import classNames from "classnames";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

export default function SwiperComponent() {
  const { current, isAnimating } = useContext(DataContext);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const { data } = useMemo(() => historyData[current], [current]);

  const updateNavState = useCallback((sw: SwiperType) => {
    setCanNext(!sw.isEnd);
    setCanPrev(!sw.isBeginning);
  }, []);

  const hideAnimation = {
    opacity: isAnimating ? 0 : 1,
    transition: "opacity .3s ease-in-out",
  };

  return (
    <>
      <Swiper
        pagination
        navigation
        modules={[Pagination, Navigation]}
        className={styles.root}
        breakpoints={{
          320: { slidesPerView: "auto", spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 80 },
        }}
        cssMode
        onSwiper={(sw) => {
          setControlledSwiper(sw);
          updateNavState(sw);
          sw.on("slideChange", () => updateNavState(sw));
          sw.on("toEdge", () => updateNavState(sw));
          sw.on("fromEdge", () => updateNavState(sw));
          sw.on("slidesLengthChange", () => updateNavState(sw));
          sw.on("update", () => updateNavState(sw));
        }}
        style={hideAnimation}
      >
        {data?.map((d, i) => (
          <SwiperSlide key={i}>
            <p>{d.year}</p>
            <p>{d.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {historyData[current].data.length > 3 && (
        <div style={hideAnimation}>
          <div
            className={classNames(
              "swiper-button-prev",
              !canNext && "swiper-button-prev-disabled"
            )}
            onClick={() => controlledSwiper?.slideNext(250)}
          >
            <ArrowIcon position="prev" color="secondary" />
          </div>
          <div
            className={classNames(
              "swiper-button-next",
              !canPrev && "swiper-button-next-disabled"
            )}
            onClick={() => controlledSwiper?.slidePrev(250)}
          >
            <ArrowIcon position="next" color="secondary" />
          </div>
        </div>
      )}
    </>
  );
}
