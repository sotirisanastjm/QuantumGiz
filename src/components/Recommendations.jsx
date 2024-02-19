import React from 'react'
import { PRODUCTS } from './PRODUCTS';

export const Recommendations = ({product}) => {

    const products= PRODUCTS.filter(productData => productData.category === product.category && productData.id != product.id);

    if(products.length=0)
        return null;


  return (
    <div className='flex flex-col'>
        <h3 className='text-2xl font-medium text-center text-black'>You may also like to see</h3>
        {/* <div className='h-[500px] md:h-[500px] mt-0 md:mt-4'>
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
                        slidesPerView: 4, 
                        spaceBetween: 0, 
                    },
                    }}
            >
                {products.slice(0,3).map(( product) =>(<SwiperSlide key={product.id}><ProductCard {...product} /></SwiperSlide>))}
            </Swiper>
        </div> */}
    </div>
  )
}
