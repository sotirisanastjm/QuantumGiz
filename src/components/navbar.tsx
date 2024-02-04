import React from "react";
import {Link} from "react-router-dom";

export const NavBar= () =>{
    return (
        <nav>
            <div className="px-6 py-4 flex flex-row justify-between bg-blue-dark">
                <div className="flex flex-row">
                    <Link className="text-xl font-bold hover:text-white" to="/">QuantumGiz</Link>
                    <img width={32} src="/src/assets/images/QuantumGiz.png"></img>
                </div>
                <div className="flex flex-row justify-center space-x-8">
                    <Link to="/">Home</Link>
                    <Link to="/collection">Collection</Link>
                    <Link to="/cart">Shopping Cart</Link>
                    <Link to="/contact">Contact us!</Link>
                </div>
                <div className="md:block flex flex-row space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </div>
            </div>
        </nav>
    );
}