import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';

import foto1 from "../img/img1.jpg";
import foto2 from "../img/img2.jpg";
import foto3 from "../img/img3.jpg";
import foto4 from "../img/img4.jpg";
import foto5 from "../img/img5.jpg";
import foto6 from "../img/img6.jpg";
import foto7 from "../img/img7.jpg";
import foto8 from "../img/img8.jpg";
import foto9 from "../img/img9.jpg";
import foto10 from "../img/img10.jpg";
import foto11 from "../img/img11.jpg";
import foto12 from "../img/img12.jpg";
import foto13 from "../img/img13.jpg";
import foto14 from "../img/img14.jpg";
import foto15 from "../img/img15.jpg";
import foto16 from "../img/img16.jpg";
import foto17 from "../img/img17.jpg";
import foto18 from "../img/img18.jpg";
import foto19 from "../img/img19.jpg";
import foto20 from "../img/img20.jpg";
import foto21 from "../img/img21.jpg";
import foto22 from "../img/img22.jpg";
import foto23 from "../img/img23.jpg";
import foto24 from "../img/img24.jpg";
import foto25 from "../img/img25.jpg";
import foto26 from "../img/img26.jpg";

export const Slider = () => {
    return (
        <div className="container">
          <h1 className="heading">Class Gallery</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ dynamicBullets: true, clickable: true, }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={foto1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto7} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto8} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto9} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto10} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto11} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto12} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto13} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto14} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto15} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto16} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto17} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto18} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto19} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto20} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto21} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto22} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto23} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto24} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto25} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto26} alt="slide_image" />
            </SwiperSlide>
    
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                {/* <ion-icon name="arrow-back-outline">&lt;</ion-icon> */}
                <div className='font-extrabold text-black text-xl translate-y-[-3px]'>&lt;</div>
              </div>
              <div className="swiper-button-next slider-arrow">
                <div className='font-extrabold text-black text-xl translate-y-[-3px]'>&gt;</div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      );
}