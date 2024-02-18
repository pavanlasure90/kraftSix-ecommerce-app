import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="">
      <Navbar />
        <section className="contact" id="contact">
           <div className="flex justify-center items-center h-screen bg-gray-700">
            <div className="max-w-md">
                <div className="contact-content">
                <form
                    method="POST"
                    action="https://formspree.io/f/xdoregjo"
                    className="contact-form"
                    >
                    <div className="pb-8">
                    <h1 style={{textAlign:"center" , fontSize:"1.5rem", color:"white"}}>Contact Us</h1>
                    </div>
                    <div style={{margin:"1rem"}}>
                    <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="w-full mb-4 p-2 border rounded-md"
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="w-full mb-4 p-2 border rounded-md"
                    />
                    <textarea
                    name="message"
                    rows="8"
                    placeholder="Message"
                    className="w-full mb-4 p-2 border rounded-md"
                    ></textarea>
                    <button className="submit-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out" style={{width:"100%"}}>
                    Send Message
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>

        </section>
    </div>
  );
};

export default Contact;
