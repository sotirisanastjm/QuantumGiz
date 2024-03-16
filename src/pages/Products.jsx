import React from 'react'
import { Headline } from '../modules/Headline'
import { ProductGallery } from '../modules/ProductGallery'

export const Products = () => {

    const headline = {
        title : "Dive into the Future: Our Tech Wonderland",
        subtitle : "Discover the latest in technology, from gadgets to gear.",
    }

  return (
    <>
    
      <Headline {...headline}/>
      <ProductGallery />

    </>
  )
}
