import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Notfound } from '../pages/404';
import { Recommendations } from '../components/recommendations';

export const ProductInfo = () => {
    const location = useLocation();
    const productData = location.state; 

    if (!productData) {
        return <Notfound />;
      }

  return (
    <section className='container mx-auto p-6 mt-28 space-y-24'>
        <div className='flex flex-col sm:flex-row gap-10 justify-evenly'>
            <div className='self-center w-2/3 sm:w-1/3 h-full'>
                <img className='rounded-xl w-full h-full' alt={productData.image.alt} src={productData.image.img}/>
            </div>
            <div className='flex flex-col gap-6 text-black items-start justify-center'>
                <div>
                    <span className='text-sm text-blue-dark font-black'>{productData.category}</span>
                    <h2 className='text-3xl md:text-5xl font-bold'>{productData.name}</h2>
                </div>
                <div>
                    <h4 className='text-2xl font-medium '>Price: <span className='text-2xl font-bold'>{productData.price}</span></h4>
                    <h4 className='text-2xl font-medium '>Brand: {productData.brand}</h4>
                </div>
                <div>
                    <h3 className='text-3xl font-semibold '>Features</h3>
                    <p className='text-xl font-medium '>{productData.description}</p>
                </div>
                <button className='mt-4 w-full btn'><span className='btn-top'>Add to Cart</span></button>
            </div>
        </div>
        <div className='flex justify-center'>
            <Link className='text-black w-auto justify-center flex flex-row gap-4 text-lg font-medium items-center' to='/products'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Go to Products
            </Link>
        </div>
        <div>
            <Recommendations product={productData} />
        </div>
    </section>
  )
}
