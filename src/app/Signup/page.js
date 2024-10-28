"use client";

import { useState } from "react";

const LoginSignupPage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-indigo-200">
      <div className="relative bg-white rounded-[30px] shadow-lg w-[768px] max-w-full min-h-[480px] overflow-hidden">
        {/* Form Container */}
        <div
          className={`absolute top-0 h-full transition-all  duration-600 ease-in-out ${
            isActive ? "translate-x-[100%] opacity-100 z-5" : "translate-x-[100%] opacity-0"
          } w-1/2`}
        >
          {/* Sign Up Form */}
          <form className="flex flex-col items-center justify-center h-full p-10">
            <h1 className="text-xl  text-[#16423C] font-semibold">Alumni Account Creation</h1>
            
            <span className="text-[#16423C] text-sm">Enter your details</span>
            <input type="text" placeholder="Name" className="mt-3 p-3 w-full rounded bg-gray-200" />
            <input type="email" placeholder="Email" className="mt-3 p-3 w-full rounded bg-gray-200" />
            <input type="password" placeholder="Password" className="mt-3 p-3 w-full rounded bg-gray-200" />
            <button className="mt-5 py-2 px-10 bg-[#6A9C89] text-white font-semibold rounded uppercase">
              Sign Up
            </button>
          </form>
        </div>

        {/*Sign In Form */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${
            !isActive ? "translate-x-0 opacity-100 z-5" : "translate-x-[100%] opacity-0"
          } w-1/2`}
        >
          <form className="flex text-[#16423C] flex-col items-center justify-center h-full p-10">
            <h1 className="text-xl text-[#16423C] font-semibold">Student Sign Up</h1>

            <span className="text-[#16423C] text-sm">Enter your details</span>
            <input type="text" placeholder="Name" className="mt-3 p-3 w-full rounded bg-gray-200" />
            <input type="email" placeholder="KIIT Email" className="mt-3 p-3 w-full rounded bg-gray-200" />
            <input type="password" placeholder="Password" className="mt-3 p-3 w-full rounded bg-gray-200" />
           
            <button className="mt-5 py-2 px-10 bg-[#6A9C89] text-white font-semibold rounded uppercase">
              Dive In
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ${
            isActive ? "transform -translate-x-full rounded-r-[150px]" : "rounded-l-[150px]"
          }`}
        >
          <div
            className="bg-gradient-to-r from-[#6A9C89] to-[#C4DAD2] text-white h-full w-[200%] transform transition-transform duration-600"
            style={{
              transform: isActive ? "translateX(-50%)" : "translateX(0)",
            }}
          >
            <div className={`absolute top-0 flex flex-col items-center justify-center h-full w-1/2 text-center px-8 ${
                isActive ? "transform -translate-x-full" : ""
              }`}
            >
              <h1 className="text-2xl font-semibold">Welcome Back!</h1>
              <p className="mt-4">
                Alumni already, click here to Sign Up
              </p>
              <button onClick={() => setIsActive(true)} className="mt-6 py-2 px-10 bg-white text-[#16423C] font-semibold rounded uppercase">
                Follow this way
              </button>
            </div>
            <div className={`absolute top-0 right-0 flex flex-col items-center justify-center h-full w-1/2 text-center px-8 ${
                !isActive ? "transform translate-x-full" : ""
              }`}
            >
              <h1 className="text-2xl font-semibold">Hello, Member!</h1>
              <p className="mt-4">
                Still a student click here to Sign up
              </p>
              <button onClick={() => setIsActive(false)} className="mt-6 py-2 px-10 bg-white text-[#16423C] font-semibold rounded uppercase">
                Snooze In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
