import React from "react";
import "./index.scss";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
const Latest = () => {
  return (
    <div className="latest">
      <div className="latestText">
        <h3>Latest News from all categories</h3>
        <p className="latest-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={100}
          slidesPerView={3}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" />
            <p className="latest-p1">10 Jan 2018</p>
            <p className="latest-p2">It S Hurricane Season Visiting Hilton</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" />
            <p className="latest-p1">10 Jan 2018</p>
            <p className="latest-p2">What Makes A Hotel Boutique</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg.webp" />
            <p className="latest-p1">10 Jan 2018</p>
            <p className="latest-p2">Les Houches The Hidden Gem Valley</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" />
            <p className="latest-p1">10 Jan 2018</p>
            <p className="latest-p2">It S Hurricane Season Visiting Hilton</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" />
            <p className="latest-p1">10 Jan 2018</p>
            <p className="latest-p2">What Makes A Hotel Boutique</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg.webp" />
            <p className="latest-p1">10 Jan 2018</p>
            <p className="latest-p2">Les Houches The Hidden Gem Valley</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Latest;
