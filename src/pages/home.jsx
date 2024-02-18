import React from "react";
import  {HeroSlider}  from "../modules/HeroSlider";
import {BestSellers} from "../modules/BestSellers";
import { Testimonial } from "../modules/testimonial";
import { Features } from "../modules/Features";
import { NewsLetter } from "../modules/NewsLetter";

export const Home = () =>{
   
    return (
       <>
        <HeroSlider />
        <BestSellers />
        <Testimonial />
        <Features />
        <NewsLetter/>
       </>
    );
}