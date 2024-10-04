import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className={styles.root}
      spaceBetween={"20"}
      slidesPerView={"auto"}
      loop={true}
    >
      <SwiperSlide>
        <p>2015</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere nihil eaque repudiandae nulla numquam.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>2016</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere nihil eaque repudiandae nulla numquam.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>2017</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere nihil eaque repudiandae nulla numquam.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>2018</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere nihil eaque repudiandae nulla numquam.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>2019</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere nihil eaque repudiandae nulla numquam.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>2020</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facere nihil eaque repudiandae nulla numquam.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
