import React from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
import { Popup } from '../components/Popup';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { CartProduct } from "../components/CartProduct";
import logo from '../assets/images/QuantumGiz.png'

export const NavBar= () =>{

    const [menuState, setMenuState]= useState('closed');
    const toggleMenu = () => {
        setMenuState(menuState === 'closed' ? 'open' : 'closed');
    }
    
    if(menuState === 'open'){
        document.body.classList.add('overflow-y-hidden');
        
    }else{
        document.body.classList.remove('overflow-y-hidden');
    }
    /* Cart config */
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    /* Popup config */
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    const [showPopup, setPopup] = useState(false);
    const closePopup = () => setPopup(false);

    const data = (
        
        <div className="flex flex-col justify-center items-center text-center ">
            {productsCount > 0 ?
                <div className="space-y-10 flex flex-col">
                    <h3 className="text-blue-black text-2xl font-medium">Items in your cart:</h3>
                    <div className="w-full flex flex-col gap-6 overflow-auto max-h-80">
                        {cart.items.map( (currentProduct, idx) => (
                            <CartProduct  key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                    </div>
                    <h4 className="text-blue-light text-lg font-medium">Total: <span>${cart.getTotalCost()}</span></h4>
                    <Link to="/cart" onClick={closePopup} className='btn w-fit md:w-1/3 self-center'><span className='btn-top'>Go to Cart</span></Link>
                </div>
            :
                <h3 className="text-blue-black text-2xl font-medium">There are no items in your cart!</h3>
            }

        </div>
        
      );
      
    return (
        <>
            <nav>
                <div className="px-6 py-4 flex flex-row justify-between bg-blue-black">
                    <div className="flex flex-row">
                        <Link className="text-xl font-bold hover:text-white" to="/"><h1>QuantumGiz</h1></Link>
                        <img width={32} src={logo} alt="QuantumGiz"></img>
                    </div>
                    <div className="hidden md:flex flex-row justify-center md:space-x-8 uppercase font-bold">
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Shopping Cart</Link>
                        <Link to="/contact">Contact us!</Link>
                    </div>
                    <div className="md:block flex flex-row space-x-6 md:space-x-0">
                        <button className="flex flex-row" onClick={() => setPopup(true)}>
                            <span className="p-1 rounded-full text-xs font-black bg-blue-light">{productsCount}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:animate-[spin_0.5s_ease-in-out]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                        <button onClick={toggleMenu} className="md:hidden block">
                            <span className={`block w-8 h-1 bg-white ${menuState === 'open' ? 'rotate-45 origin-bottom-left ease-linear duration-200' : 'origin-top-left ease-linear duration-100'}`}></span>
                            <span className={`mt-2 block w-8 h-1 bg-white ${menuState === 'open' ? 'opacity-0 duration-100' : 'opacity-1 duration-100'}`}></span>
                            <span className={`mt-2 block w-8 h-1 bg-white ${menuState === 'open' ? '-rotate-45 origin-top-left ease-linear duration-200' : 'origin-bottom-left ease-linear duration-100'}`}></span>
                        </button>
                    </div>
                </div>

                <div className={`${menuState === 'open' ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed  right-0 h-[98%] w-[100%] bg-blue-black transform transition-transform ease-in-out duration-300 z-50`}>
                    <div className="flex flex-col justify-evenly text-center items-center h-full">
                        <div className="h-[60%]">
                            <ul className="space-y-10 uppercase font-bold text-2xl text-white">
                                <li><Link onClick={toggleMenu} className="textNav textShadow" to="/">Home</Link></li>
                                <li><Link onClick={toggleMenu} className="textNav textShadow" to="/products">Products</Link></li>
                                <li><Link onClick={toggleMenu} className="textNav textShadow" to="/cart">Shopping Cart</Link></li>
                                <li><Link onClick={toggleMenu} className="textNav textShadow" to="/contact">Contact us!</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Popup onClose={closePopup} visible={showPopup} data={data} />
        </>
    );
}
