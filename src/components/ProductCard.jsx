import React from 'react'

export const ProductCard = (props) => {

  return (
    <div className='w-60 sm:w-64 lg:w-80 rounded-[0.75em] bg-blue-black'> 
        <div className=" flex flex-col py-4 px-8 md:py-6 md:px-12 productCard-inner">
            <img className='self-center h-40 md:h-40 min-w-full rounded-[0.75em] object-cover' src={props.image.img} alt={props.image.alt}></img>
          <div className='flex flex-col mt-4 md:mt-6'>
            <h3 className='text-2xl text-blue-black text-center font-medium'>{props.name}</h3>
            <h3 className='text-blue-light text-center font-bold text-lg my-4 md:my-6'>Price : <span className='font-medium text-md'>{props.price}</span></h3>
            <div className='flex flex-col'>
              <button className=' w-full btn hidden md:block'><span className='btn-top'>More Info</span></button>
              <button className='mt-4 w-full btn'><span className='btn-top'>Add to Cart</span></button>
            </div>
          </div>
        </div>
    </div>
  )
}
