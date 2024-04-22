import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import photo1 from "/assets/pexels-curtis-adams-1694007-5502227.jpg";
import photo2 from "/public/assets/pexels-ibidsy-5524205.jpg";
import photo3 from "/public/assets/pexels-jessica-bryant-592135-1370704.jpg";

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
        <img className="w-full h-[80vh]" src={photo1} alt="this is a photo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[80vh]" src={photo2} alt="this is a photo" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[80vh]" src={photo3} alt="this is a photo" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
