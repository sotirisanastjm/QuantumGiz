import React from 'react'
import { Headline } from '../modules/Headline'

export const Products = () => {

    const headline = {
        title : "All products",
        subtitle : "",
    }

  return (
    <Headline {...headline}/>
  )
}
