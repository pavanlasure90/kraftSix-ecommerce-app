import React from "react";
import { useNavigate } from "react-router-dom";


const CheckedOut = () => {
    let navigate = useNavigate();
    
    return (
        <div className="checked-out bg-gradient-to-br from-orange-500 to-indigo-900 bg-opacity-75 backdrop-blur-lg min-h-screen flex justify-center items-center">
            <div className="max-w-lg bg-white p-8 rounded shadow-lg checked-out-container">
                <h2 className="text-3xl font-bold mb-4 animate-bounce">Your Order is Booked!</h2>
                <p className="text-lg mb-4 text-indigo-800">You'll receive further details on your registered number and email.</p>
                <button onClick={() => navigate('/home')} className="bg-white text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out shadow-md hover:bg-brown-300 hover:text-gray-800">
                 Back To Home Page!
                </button>
            </div>
        </div>
    );
};

export default CheckedOut;








