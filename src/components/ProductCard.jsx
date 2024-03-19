import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


export const ProductCard = (props) => {

  const product = props;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  
  return (
    <div className='bg-blue-black rounded-xl'>
      <div className='productCard-inner space-y-6 bg-[#FFFFFF] p-6 rounded-xl min-w-72'>
        <Link to={`/product-info/${props.name}`} state={props} className="flex flex-col">
          <span className='text-xs text-blue-dark font-black'>{props.category}</span>
          <h3 className='text-xl mt-2 text-blue-black font-medium'>{props.name}</h3>
        </Link>
        <div>
          <Link to={`/product-info/${props.name}`} state={props} className='flex justify-center items-center'>
            <img className='w-fit h-32 object-contain rounded-md' src={props.image.img} alt={props.image.alt}></img>  
          </Link>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <Link to={`/product-info/${props.name}`} state={props}>
            <h3 className='text-blue-dark text-md'>from $<span className='text-sm'>{props.price}</span></h3>
          </Link>

          { productQuantity > 0 ?
            <>
              <div className='text-blue-black flex flex-row justify-center items-center'>

                <button onClick={() => cart.addOneToCart(product.id)} className="mx-2 font-black text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>

                <div className='text-2xl'>{productQuantity}</div>

                <button onClick={() => cart.removeOneFromCart(product.id)} className="mx-2 font-black text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>

                <button onClick={() => cart.deleteFromCart(product.id)} className="mx-2 font-black text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#D24545] w-6 h-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                  </svg>
                </button>

              </div>
            </>
            :
            <button onClick={() => {cart.addOneToCart(product.id)}} className='btn'><span className='btn-top text-xs'>Add</span></button>
          }
        </div>
      </div>
    </div>
  )
}