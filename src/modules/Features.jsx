import React from 'react'
import { Feature } from '../components/Feature';
import check from '../assets/icons/check.svg';
import deal from '../assets/icons/rocket.svg';
import group from '../assets/icons/group.svg';


export const Features = () => {
    const features = [
        {
            title:"Tech Wonderland",
            subtitle: "Explore a World of Innovation with Our Extensive Range of Laptops, Mobiles, and Tablets.",
            icon: check,
        },
        {
            title:"Seamless Experience",
            subtitle: "Navigate with Ease - Our User-Friendly Platform Ensures a Hassle-Free Tech Shopping Journey.",
            icon: group,
        },
        {
            title:"Smart Savings",
            subtitle: "Unlock Tech-Savvy Deals and Competitive Prices, Making QuantumGiz Your Ultimate Destination for Savings.",
            icon: deal,
        },
    ];

    return (
    <section className="container mx-auto">
        <div className="flex md:flex-row flex-col px-6">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((slide, index) => (<Feature key={index} data={slide} />))}
            </div>
        </div>
    </section>
  )
}
