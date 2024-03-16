import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { CartProduct } from "../components/CartProduct";

export const CartGallery = () => {

    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


  return (
    <section className="container mx-auto mt-20">
        <div className="flex flex-col justify-center items-center text-center ">
            {productsCount > 0 ?
                <div className="space-y-10 flex flex-col">
                    <h2 className="text-blue-black text-2xl font-medium">Items in your cart:</h2>
                    <div className={`w-full grid ${cart.items.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-6`}>
                        {cart.items.map( (currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                    </div>
                    <h4 className="text-blue-light text-lg font-medium">Total: <span>${cart.getTotalCost()}</span></h4>
                    <a className='btn w-fit md:w-1/3 self-center'><span className='btn-top'>Check out</span></a>
                </div>
            :
                <h2 className="text-blue-black text-3xl font-medium">There are no items in your cart!</h2>
            }

        </div>
    </section>
  )
}
