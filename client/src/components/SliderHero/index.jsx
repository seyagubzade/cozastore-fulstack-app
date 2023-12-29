import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";
import { Pagination, Navigation } from "swiper/modules";

const SliderHero = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-inner-content">
            <div className="info-content">
              <span className="h5">New Collection</span>
              <span className="h3">New Arrival</span>
              <button>SHOP NOW</button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner-content">
            <div className="info-content">
            <span className="h5">New Collection</span>
              <span className="h3">New Arrival</span>
              <button>SHOP NOW</button></div>
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner-content">
            <div className="info-content">
            <span className="h5">New Collection</span>
              <span className="h3">New Arrival</span>
              <button>SHOP NOW</button></div>
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp"
              alt="hero"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderHero;
