import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import { PRODUCTS } from './PRODUCTS';
import { ProductCard } from './ProductCard';

export const BestSellers = () => {
    const products= PRODUCTS;
  return (
    <section className='container mx-auto mt-20 px-6'>
        <div className='flex flex-col'>
            <div>
                <h2 className="text-center text-black font-medium text-3xl md:text-4xl">Best Selling Products</h2>
            </div>
            <div className='h-[500px] md:h-[500px] mt-0 md:mt-4'>
                <Swiper 
                    pagination={{
                        clickable:true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        // Add breakpoints for different screen sizes
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 10, 
                        },
                        980: {
                          slidesPerView: 3, 
                          spaceBetween: 0, 
                        },
                      }}
                >
                    {products.slice(0,3).map(( product) =>(<SwiperSlide key={product.id}><ProductCard {...product} /></SwiperSlide>))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}
