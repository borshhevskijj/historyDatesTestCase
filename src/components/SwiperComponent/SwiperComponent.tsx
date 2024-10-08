import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import arrow from "../../assets/arrow.svg";

import { Pagination, Navigation } from "swiper/modules";
// import required modules
import { useContext, useMemo, useState } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";

export default function SwiperComponent() {
  const { current } = useContext(DataContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [controlledSwiper, setControlledSwiper] = useState<any>();
  const { data } = useMemo(
    () => INITIAL_INTERVALS[current],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [INITIAL_INTERVALS, current]
  );

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
            spaceBetween: 100,
          },
        }}
        loop={true}
        onSwiper={setControlledSwiper}
      >
        {data?.map((d, i) => (
          <SwiperSlide key={i}>
            <p>{d.year}</p>
            <p>{d.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button-next"
        onClick={() => controlledSwiper.slidePrev(250)}
      >
        <img src={arrow} alt="" />
      </div>
      <div
        className="swiper-button-prev"
        onClick={() => controlledSwiper.slideNext(250)}
      >
        <img src={arrow} alt="" />
      </div>
    </>
  );
}
