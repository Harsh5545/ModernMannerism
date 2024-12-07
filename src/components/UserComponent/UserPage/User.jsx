"use client"

import React, { useState } from 'react';
import SelfImprovementChallenge from '../userChallenge/SelfImprovement';

const User = () => {
  const [isGameVisible, setIsGameVisible] = useState(false);

  const toggleGameVisibility = () => {
    setIsGameVisible(!isGameVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className='flex flex-col items-center pt-24 justify-center'>
        <img src="/assets/MM.png" alt="Logo" className="mb-6 w-32" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">This Page is Under Development</h1>
        <p className="text-lg text-gray-600 mb-4">
          Please explore our website or contact our team for any issues. We are here to help you with any course-related inquiries you may have.
        </p>
        <p className="text-sm text-gray-500 mb-4">Thank you for your patience!</p>
        
        {/* Button to toggle the game visibility */}
        <button 
          onClick={toggleGameVisibility} 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
        >
          Play Self-Improvement Challenge
        </button>

        {/* Dropdown/Modal for the game */}
        {isGameVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white p-6 rounded-lg shadow-md w-full max-w-md max-h-[50vh] overflow-auto">
              {/* Close button (X) */}
              <button 
                onClick={toggleGameVisibility} 
                className=" top-2 right-2 text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                &times; {/* This is the "X" character */}
              </button>
              <SelfImprovementChallenge />
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;