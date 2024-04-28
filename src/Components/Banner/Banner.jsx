import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className="w-full h-[80vh]"
          src="https://i.ibb.co/3SB04Bt/pexels-alex-staudinger-829197-1732414.jpg"
          alt="this is a photo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[80vh]"
          src="https://i.ibb.co/553XgHg/pexels-jessica-bryant-592135-1370704.jpg"
          alt="this is a photo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[80vh]"
          src="https://i.ibb.co/NnZRCJk/pexels-lina-3625713.jpg"
          alt="this is a photo"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
