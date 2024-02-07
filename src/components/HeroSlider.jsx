import React, { useState, useEffect } from 'react'
import {Hero} from './Hero'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import image from '../assets/images/AppleWatch.jpg'
import image1 from '../assets/images/AppleWatchMobile.jpg'

export const HeroSlider = () => {
    const slides = [
        {
            heroImg: image,
            mobileImg:image1,
            herotitle:"Discover Cutting-Edge Tech Essentials",
            herosub: "Explore the Latest Gadgets and Innovations at Your Fingertips",
            btntxt:"Shop now",
        },
        {
            heroImg: image1,
            mobileImg:image,
            herotitle:"Discover Cutting-Edge Tech Essentials",
            herosub: "Explore the Latest Gadgets and Innovations at Your Fingertips",
            btntxt:"Shop now",
        },
        {
            heroImg: image,
            mobileImg:image1,
            herotitle:"Discover Cutting-Edge Tech Essentials",
            herosub: "Explore the Latest Gadgets and Innovations at Your Fingertips",
            btntxt:"Shop now",
        },
    ];


    
  return (
    <div className=' w-full h-[55rem] overflow-hidden'>
        <Swiper
        pagination={{
            dynamicBullets: true,
            clickable:true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop
        >
            {slides.map((slide, index) => (<SwiperSlide key={index}><Hero data={slide} /></SwiperSlide>))}
      </Swiper>
    </div>
  )
}