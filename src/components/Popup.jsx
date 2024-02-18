import React from 'react'

export const Popup = ({ visible , onClose , data }) => {

    if(!visible) {
        document.body.classList.remove('overflow-hidden');
        return null;
    }
    document.body.classList.add('overflow-hidden');
    
  return (
    <>
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center'>
            <div className="bg-white text-black rounded-xl flex flex-col w-2/5">
                <button className='self-end m-2' onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='flex justify-center items-center pt-2 pb-8 px-8'>
                    <p>{data}</p>
                </div>
            </div>
        </div>
    </>
  ) 
}
