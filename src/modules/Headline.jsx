import React from 'react'

export const Headline = (props) => {


  return (
    <section className='container mx-auto px-6 mt-10'>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-6 text-black'>
            <h2 className='text-3xl font-bold'>{props.title}</h2>
            <h3 className='text-xl font-medium'>{props.subtitle}</h3>
        </div>
    </section>
  )
}
