import React from "react";
import  {HeroSlider}  from '../modules/HeroSlider';
import {BestSellers} from '../modules/BestSellers';
import { Testimonial } from '../modules/Testimonial';
import { Features } from '../modules/Features';
import { NewsLetter } from '../modules/NewsLetter';
import { InfoCard } from "../modules/InfoCard";


export const Home = () =>{
   
    return (
       <>
        <HeroSlider />
        <BestSellers />
        <Testimonial />
        <Features />
        <NewsLetter/>
        <InfoCard />
       </>
    );
}