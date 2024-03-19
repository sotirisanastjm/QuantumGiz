import React, { useState, useEffect } from 'react'
import {Hero} from '../components/Hero'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import image from '../assets/images/watch.jpg'
import imageM from '../assets/images/watch-m.jpg'
import image1 from '../assets/images/concert.jpg'
import image1M from '../assets/images/concert-m.jpg'

export const HeroSlider = () => {
  const slides = [
    {
        heroImg: image,
        mobileImg: imageM,
        herotitle: "Discover Cutting-Edge Tech Essentials",
        herosub: "Explore the Latest Gadgets and Innovations at Your Fingertips",
        btntxt: "Shop now",
    },
    {
        heroImg: image1,
        mobileImg: image1M,
        herotitle: "Experience Futuristic Innovations",
        herosub: "Embark on a Journey to Explore the Next Generation of Technology",
        btntxt: "Discover more",
    }
];



    
  return (
    <div className=' w-full h-[55rem] overflow-hidden'>
        <Swiper
        pagination={{
            dynamicBullets: true,
            clickable:true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true} 
          autoplay={{delay:5000}}
        >
            {slides.map((slide, index) => (<SwiperSlide key={index}><Hero data={slide} /></SwiperSlide>))}
      </Swiper>
    </div>
  )
}