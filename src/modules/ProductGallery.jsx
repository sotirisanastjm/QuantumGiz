import React, { useState } from 'react'
import { PRODUCTS } from '../components/PRODUCTS';
import {ProductCard} from '../components/ProductCard';

export const ProductGallery = () => {
    
    const [products] = useState(PRODUCTS);
    
    const [categoryCurr, setCategoryCurr] = useState("All Products");
    const categoriesSet = new Set(products.map(product => product.category));
    const categories = ["All Products", ...categoriesSet]; 
    const handleCategoryChange = (category) => {
        setCategoryCurr(category);
    };

    const [modal , setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    
  return (
    <section className="container mx-auto px-6">
        <div className="md:flex md:flex-row md:gap-10">
            <div className='md:block hidden bg-[#F7F7F7] px-12 py-12 w-auto rounded-xl'>
                <div className='flex flex-col gap-4'>
                    {categories.map((category, index) => (
                    <button key={index} onClick={() => handleCategoryChange(category)} className={`text-lg text-left ${category === categoryCurr ? 'text-blue-bright font-black' : 'text-black font-semibold '}`}>
                        {category}
                    </button>))}
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-4/5">
                <div className=' md:block flex flex-row justify-between relative'>
                    <h3 className='font-black text-2xl text-blue-bright'>{categoryCurr}</h3>
                    <button onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#205295" className="w-6 h-6 block md:hidden">
                            <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className={`${modal ? 'flex flex-col rounded-xl p-1 z-10 absolute right-8 bg-[#F7F7F7]' : 'hidden'}`}>
                        <button className='self-end' onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className='px-10 pb-4 flex flex-col gap-4'>
                            {categories.map((category, index) => (
                            <button key={index} onClick={() => { handleCategoryChange(category); toggleModal(); }} className={`text-lg text-center ${category === categoryCurr ? 'text-blue-bright font-black' : 'text-black font-semibold '}`}>
                                {category}
                            </button>))}
                        </div>
                    </div>
                </div>
                <div className='w-fit self-center grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {products.filter(product => categoryCurr === "All Products" || product.category === categoryCurr).map((product, index) => (<ProductCard key={index} {...product} />))}
                </div>
            </div>
        </div>
    </section>
  )
}
