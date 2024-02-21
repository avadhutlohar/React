import React from "react";
import image from "./assets/login.jpg";

const LandingPage = () => {
  return (
    <>
    {/* This is the main div */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
 
 
        {/* 1st Div */}
        <div className=" bg-gray-100 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-white p-4 ">
            <h2 className="text-4xl font-bold text-center py-6">Brand</h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2 " type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="border p-2 " type="password" />
            </div>
            <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white"> Sign In</button>
            <div className="flex justify-between">
              <p className="flex items-center">
                <input type="checkbox" className="mr-2"/>
                Remember Me
              </p>
              <p>Create an account</p>
            </div>
          </form>
        </div>

        {/* 2nd Div */}
        <div className="hidden sm:block ">
          <img
            src={image}
            alt="Landing Page"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
