import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

import { Pagination } from "swiper/modules";
import { useContext, useMemo } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";

export default function SwiperComponent() {
  const { current } = useContext(DataContext);
  const { data } = useMemo(
    () => INITIAL_INTERVALS[current],
    [INITIAL_INTERVALS, current]
  );

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className={styles.root}
      spaceBetween={"20"}
      slidesPerView={"auto"}
      loop={true}
    >
      {data?.map((data, i) => (
        <SwiperSlide key={i}>
          <p>{data.year}</p>
          <p>{data.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
