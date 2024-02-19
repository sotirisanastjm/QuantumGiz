import React from 'react'
import '../assets/css/hero.css'
import { Link } from 'react-router-dom';


export const Hero = (props) => {
    
    const {heroImg, mobileImg, herotitle, herosub, btntxt} = props.data;
    var containerStyle={
        backgroundImage: `url(${heroImg})`,
    };

    if (window.innerWidth < 768) {
        containerStyle={
            backgroundImage: `url(${mobileImg ? mobileImg : heroImg })`,
        };
    }
    
  return (

    <div className='text-white w-full h-full bg-cover flex items-center relative heroImage' style={containerStyle}>
        <div className='container mx-auto z-10 flex justify-start'>
            <div className='flex flex-col w-[80%] md:w-[55%] px-8 items-start'>
                <h2 className='text-2xl md:text-6xl font-bold'>{herotitle}</h2>
                <h3 className='text-xl md:text-2xl font-medium my-4 md:my-6'>{herosub}</h3>
                <Link to="/products" className='btn'><span className='btn-hero'>{btntxt}</span></Link>
            </div>
        </div>
    </div>
  );
}
