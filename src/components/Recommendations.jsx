import React from 'react'
import { PRODUCTS } from './PRODUCTS';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {ProductCard} from '../components/ProductCard'

export const Recommendations = ({product}) => {

    const products= PRODUCTS.filter(productData => productData.category === product.category && productData.id != product.id);
    console.log(products);

    if(products.length==0)
        return null;


  return (
    <div className='flex flex-col'>
        <h3 className='text-2xl font-medium text-center text-black'>Related Products</h3>
        <div className='h-[500px] md:h-[500px] mt-0 md:mt-4'>
            <Swiper 
                pagination={{
                    clickable:true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={10}
                breakpoints={{
                    680: {
                        slidesPerView: 2,
                        spaceBetween: 10, 
                    },
                    980: {
                        slidesPerView: 3, 
                        spaceBetween: 10, 
                    },
                    1280: {
                        slidesPerView: 4, 
                        spaceBetween: 10, 
                    },
                    }}
            >
                {products.map(( product) =>(<SwiperSlide key={product.id}><ProductCard {...product} /></SwiperSlide>))}
            </Swiper>
        </div>
    </div>
  )
}
