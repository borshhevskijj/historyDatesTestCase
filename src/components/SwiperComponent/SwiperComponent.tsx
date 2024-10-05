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
import { TInterval } from "../../types";

export default function SwiperComponent() {
  const { current } = useContext(DataContext);
  const [controlledSwiper, setControlledSwiper] = useState<any>();
  const { data } = useMemo(
    () => INITIAL_INTERVALS[current],
    [INITIAL_INTERVALS, current]
  );

  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.root}
        slidesPerView={"auto"}
        loop={true}
        onSwiper={setControlledSwiper}
      >
        {data?.map((d: TInterval, i: number) => (
          <SwiperSlide key={i}>
            <p>{d.year}</p>
            <p>{d.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button-next"
        onClick={() => controlledSwiper.slideNext(250)}
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
