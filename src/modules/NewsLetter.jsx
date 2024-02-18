import React, { useState } from 'react'
import '../assets/css/newsletter.css';
import { Popup } from '../components/Popup';

export const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
      };

    const [showPopup, setPopup] = useState(false);

    const closePopup = () => setPopup(false);

    const text = (
        <>
            <div className='text-md font-medium'>
                Thank you for your interest in our newsletter!<br /><br />
                Please note that the newsletter subscription feature is currently disabled as this website is for demonstration purposes only. You won't be able to submit your subscription at this time.<br /><br />
                Feel free to explore the rest of our site, and if you have any questions or need assistance, reach out to us at [your contact email or support email].<br /><br />
                Thank you for your understanding.<br /><br />
                Best regards,<br />
            </div>
          <b className='text-blue-dark text-md font-bold'>QuantumGiz</b>
        </>
      );
      

  return (
    <section className='newsLetter container mx-auto flex-col flex gap-16 md:w-[80%] px-6'>
        <h2 className='letterCard1 sm:w-[60%] self-start relative text-center uppercase font-bold text-md md:text-xl
         text-blue-black bg-white p-4 md:p-8 rounded-xl border border-blue-black'>
            🌟 Be the first to know about the latest tech trends and exclusive offers! Subscribe to our newsletter for insider access.
        </h2>
        <h3 className='letterCard2 self-center p-4 md:p-8 text-md md:text-lg text-blue-black font-bold md:w-[40%] relative text-center uppercase bg-white rounded-xl border border-blue-black'>👉 Subscribe now for a tech-filled inbox!</h3>
        <div className='letterCard1 after:hidden animate-none self-center mt-6 p-6 md:mt-10 md:p-8 bg-white rounded-xl border border-blue-black relative'>
            <form onSubmit={handleSubmit} className='subscribe-form w-full'>
                <input type="email" placeholder="example@mail.com" className='subscribe-input'/>
                <button onClick={() => setPopup(true)} className='subscribe-btn px-2'>Subscribe</button>
            </form>
        </div>
        <Popup onClose={closePopup} visible={showPopup} data={text} />
    </section>
  )
}
