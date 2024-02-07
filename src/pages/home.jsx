import React from "react";
import  {HeroSlider}  from "../components/HeroSlider";
import {BestSellers} from "../components/BestSellers";


export const Home = () =>{
   
    return (
       <>
        <HeroSlider />
        <BestSellers />
       </>
    );
}