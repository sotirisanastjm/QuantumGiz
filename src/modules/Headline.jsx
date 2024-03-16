import React from 'react'

export const Headline = (props) => {


  return (
    <section className='container mx-auto px-6 mt-10'>
        <div className='flex flex-col justify-center text-center items-center gap-2'>
            <h2 className='text-3xl md:text-4xl font-bold text-blue-black'>{props.title}</h2>
            <h3 className='text-xl md:text-2xl font-medium text-blue-bright'>{props.subtitle}</h3>
        </div>
    </section>
  )
}
