import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const Banner = () => {
  const [estateData, setEstateData] = useState([]);

  useEffect(() => {
    // fetch(
    //   "https://arif-islam21.github.io/recidential-json-data/recidential.json"
    // )
    fetch("../../../public/recidential.json")
      .then((res) => res.json())
      .then((data) => setEstateData(data));
  }, []);

  console.log(estateData);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {estateData.map((estate) => (
        <SwiperSlide key={estate.id}>
          <img src={estate.image} alt={estate.description} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Banner;
