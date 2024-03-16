import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Notfound } from '../pages/404';
import { Recommendations } from '../components/recommendations';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export const ProductInfo = () => {
    const location = useLocation();
    const productData = location.state;

    if (!productData) {
        return <Notfound />;
    }

    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(productData.id);

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
                { productQuantity > 0 ?
                    <>
                        <div className='text-blue-black flex flex-row justify-center items-center p-3'>

                        <button onClick={() => cart.addOneToCart(productData.id)} className="mx-2 font-black text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </button>

                        <div className='text-2xl'>{productQuantity}</div>

                        <button onClick={() => cart.removeOneFromCart(productData.id)} className="mx-2 font-black text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                        <button onClick={() => cart.deleteFromCart(productData.id)} className="mx-2 font-black text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#D24545] w-6 h-6">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        </div>
                    </>
                    :
                    <button onClick={() => {cart.addOneToCart(productData.id)}}  className='mt-4 w-full btn'><span className='btn-top'>Add to Cart</span></button>
                }
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
