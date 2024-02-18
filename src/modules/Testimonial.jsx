import React from 'react'
import image from '../assets/images/ShopNow.jpg';
import '../assets/css/hero.css';

export const Testimonial = () => {

  var containerStyle={
    backgroundImage: `url(${image})`,
  };

  return (
    <section className="bg-blue-black flex bg-center bg-cover relative imageOverlay z-0" style={containerStyle}>
        <div className='container mx-auto px-6 py-10 md:py-20 flex flex-col justify-center'>
            <h2 className='font-bold text-3xl md:text-5xl text-center mb-6'>Why Choose Us</h2>
            <p className='font-medium text-lg md:text-2xl'>QuantumGiz is your go-to hub for cutting-edge tech with a wide product range 
            spanning laptops, mobiles, and tablets. Our user-friendly platform ensures a smooth shopping experience, prioritizing top-notch 
            quality without compromise. Enjoy competitive prices and exclusive deals, making QuantumGiz your ultimate destination for 
            tech-savvy savings. Choose us for variety, simplicity, and quality in your tech shopping journey.
            </p>
        </div>
    </section>
  )
}
