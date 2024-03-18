import React from 'react'

export const Feature = (props) => {
  return (
    <div className='border border-blue-black flex flex-col px-8 py-6 md:py-8 text-black text-center'>
        {props.data?.icon && (
          <img className='w-fit self-center' src={props.data.icon} alt={props.data.title} />
        )}
        <h2 className='text-2xl py-2 font-bold'>{props.data.title}</h2>
        <h3 className='text-lg font-medium'>{props.data.subtitle}</h3>
    </div>
  )
}
