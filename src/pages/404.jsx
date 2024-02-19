import React from 'react'
import { Link } from 'react-router-dom';


export const Notfound = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center'>
            <div className="bg-white text-black rounded-xl flex flex-col w-2/5 p-10 text-center shadow-2xl">
                <h2 className='text-6xl mb-6'>404 NOT FOUND</h2>
                <div className='w-1/2 self-center'>
                    <Link to="/">
                        <button className='btn'><span className='btn-top'>Home Page</span></button>
                    </Link>
                </div>
            </div>
        </div>
  )
}
