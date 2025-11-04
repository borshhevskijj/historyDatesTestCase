import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperComponent.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import arrow from "../../assets/arrow.svg";

import { Pagination, Navigation } from "swiper/modules";
import { useContext, useMemo, useState } from "react";
import { DataContext } from "../../context";
import { historyData } from "../../constants/data";
import { Swiper as SwiperType } from "swiper/types";

export default function SwiperComponent() {
  const { current, isAnimating } = useContext(DataContext);

  const [controlledSwiper, setControlledSwiper] = useState<SwiperType>();

  const { data } = useMemo(() => historyData[current], [current]);

  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.root}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        cssMode
        onSwiper={setControlledSwiper}
        style={{
          opacity: isAnimating ? 0 : 1,
          transition: "opacity .3s ease-in-out",
        }}
        watchOverflow
      >
        {data?.map((d, i) => (
          <SwiperSlide key={i}>
            <p>{d.year}</p>
            <p>{d.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      {historyData[current].data.length > 3 && (
        <>
          <div
            className="swiper-button-next"
            onClick={() => controlledSwiper?.slidePrev(250)}
          >
            <img src={arrow} alt="" />
          </div>
          <div
            className="swiper-button-prev"
            onClick={() => controlledSwiper?.slideNext(250)}
          >
            <img src={arrow} alt="" />
          </div>
        </>
      )}
    </>
  );
}
