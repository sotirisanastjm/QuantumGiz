import React from 'react'
import { Feature } from '../components/Feature';

export const ContactFeatures = () => {

    const features = [
        {
            title:"Connect with Us",
            subtitle: "Get in touch with our team to share feedback, ask questions, or inquire about our services. We're here to assist you every step of the way.",
            icon: null,
        },
        {
            title:"Feedback Hub",
            subtitle: "Your opinions matter! Use our contact form to provide valuable feedback that helps us improve our services and enhance your experience.",
            icon: null,
        },
        {
            title:"Customer Support",
            subtitle: "Need assistance? Our dedicated customer support team is ready to help you with any queries or concerns you may have. Reach out to us today!",
            icon: null,
        },
    ];

  return (
    <section className="container mx-auto">
        <div className="flex md:flex-row flex-col px-6">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((slide, index) => (<Feature key={index} data={slide} />))}
            </div>
        </div>
    </section>
  )
}
