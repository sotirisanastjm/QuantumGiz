import React from 'react'
import '../assets/css/newsletter.css';

export const NewsLetter = () => {
  return (
    <section className='newsLetter container mx-auto flex-col flex gap-16 w-[60%]'>
        <h2 className='letterCard1 w-[60%] self-start relative text-center uppercase font-bold text-xl
         text-blue-black bg-white px-8 py-8 rounded-xl border border-blue-black'>
            🌟 Be the first to know about the latest tech trends and exclusive offers! Subscribe to our newsletter for insider access.
        </h2>
        <h3 className='letterCard2 self-center py-8 px-8 text-lg text-blue-black font-bold w-[40%] relative text-center uppercase bg-white rounded-xl border border-blue-black'>👉 Subscribe now for a tech-filled inbox!</h3>
        <div className='self-center mt-10'>
            <form class="subscribe-form w-full">
                <input type="email" placeholder="example@mail.com" class="subscribe-input"/>
                <button class="subscribe-btn">Submit</button>
            </form>
        </div>
    </section>
  )
}
