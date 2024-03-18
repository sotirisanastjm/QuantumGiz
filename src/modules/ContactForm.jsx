import React, { useState } from "react";
import { Popup } from '../components/Popup';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPopup(true)
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const [showPopup, setPopup] = useState(false);

    const closePopup = () => setPopup(false);

    const text = (
        <>
            <div className="space-y-6 max-w-72">
                <h2 className="text-lg sm:text-2xl font-bold text-blue-black">Thank you for your interest in QuantumGiz!</h2>
                <p className=" text-md sm:text-lg">Our demo React website is designed to showcase front-end skills, user experience, and responsiveness.
                 However, please note that the contact form is for demonstration purposes only and may not receive responses or support.
                </p>
                <p className=" text-md sm:text-lg font-semibold">
                    We appreciate your understanding.
                </p>
            </div> 
        </>
      );
      

    return (
        <>
            <section className="container mx-auto mt-10 flex justify-center px-4">
                <div className="bg-blue-black rounded-xl w-1/3 min-w-64 ">
                    <div className="p-6 border border-blue-black rounded-xl bg-white translate-x-[-6px] translate-y-[-6px] text-black">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="block w-full border border-white rounded-md py-2 px-3"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="block w-full border border-white rounded-md py-2 px-3"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="block w-full border border-white rounded-md py-2 px-3 resize-none"
                                rows="5"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="btn w-fit md:w-1/2 self-center"
                            >
                                <span className="btn-top">Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Popup onClose={closePopup} visible={showPopup} data={text} />
        </>
    );
};
