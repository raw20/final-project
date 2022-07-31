import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App() {
  return (
    <>
    <div className="onandup-swiper-box">
      <Swiper className="mobile-swiper mySwiper"
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
    >
      <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(/img/img-main-full.png)",
          }}
          data-swiper-parallax="-23%"
        ></div>
      <SwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
      </SwiperSlide>
      </Swiper>
    </div>
  </>
  );
} 