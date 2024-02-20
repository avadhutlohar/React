import React from "react";
import image from "./assets/35356-500x889.webp"

const LandingPage = () => {
  return (
    <>
    <div className="container mx-auto">
      <header className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Profile
          </button>
        </div>
      </header>
      <main className="flex flex-col ">
        <div className="flex justify-evenly flex-row">
          {/* Data div */}
          <div className="mb-8 space-y-4">
            {/* Your data components here */}
            <p>Your data content 1</p>
            <p>Your data content 2</p>
          </div>
          {/* Image div */}
          <div className="aspect-ratio aspect-w-16 aspect-h-9" >
            <img
              src={image}
              alt="Your image description"
              className="object-cover w-full rounded"
            />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4 px-6">
        Copyright © 2024 Your Company Name
      </footer>
    </div>
    </>
  );
};

export default LandingPage;
