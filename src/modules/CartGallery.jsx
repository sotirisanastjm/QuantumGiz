import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext,useState } from "react";
import { CartProduct } from "../components/CartProduct";
import { Popup } from '../components/Popup';

export const CartGallery = () => {

    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    /* Popup config */
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    const [showPopup, setPopup] = useState(false);
    const closePopup = () => setPopup(false);

    const data = (
        <div className="space-y-6 max-w-72">
            <h2 className="text-lg sm:text-2xl font-bold text-blue-black">Thank you for exploring QuantumGiz!</h2>
            <p className=" text-sm sm:text-lg">Please note that our demo website is for showcase purposes only and does not support checkout services.
                Feel free to explore the responsive design and functionalities. For any questions, contact our support team.
            </p>
            <p className=" text-sm sm:text-lg">
                Warm regards,<br/>
                <b className="text-blue-black">The QuantumGiz Team</b>
            </p>
        </div> 
      );
  return (
    <>
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
                        <button onClick={() => setPopup(true)} className='btn w-fit md:w-1/3 self-center'><span className='btn-top'>Check out</span></button>
                    </div>
                :
                    <h2 className="text-blue-black text-3xl font-medium">There are no items in your cart!</h2>
                }

            </div>
        </section>
        <Popup onClose={closePopup} visible={showPopup} data={data} />
    </>
  )
}
