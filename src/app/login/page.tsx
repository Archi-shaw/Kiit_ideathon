import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Page = () => {
  return (
    <div className="flex flex-col items-center font-poppins my-10 justify-center w-full px-5 sm:px-10 text-center">
      <div className="bg-white text-black rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-lg sm:max-w-2xl md:max-w-4xl">
        <div className="md:w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-[#a7f000]">Alumni </span>
            <span>Network</span>
          </div>
          <div className="py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#a7f000] mb-3">Sign In to Account</h2>
            <div className="border-2 w-10 border-[#a7f000] mb-3 inline-block"></div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-200">
                <FaGoogle className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-200">
                <FaLinkedinIn className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-200">
                <FaFacebookF className="text-sm" />
              </a>
            </div>
            <p className="text-gray-400 my-5">or use your email account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md">
                <FaRegEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md">
                <MdLockOutline className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </div>
            <div className="flex justify-between w-64 mt-5  md:ml-28 sm:ml-40 ml-28 text-xs">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="mr-1" /> Remember me
              </label>
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="border-2 border-[#a7f000] hover:text-[#a7f000] hover:bg-gray-100 rounded-full font-semibold px-12 py-2 inline-block"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 bg-[#a7f000] rounded-tr-2xl rounded-br-2xl md:rounded-bl-none md:rounded-br-2xl py-10 md:py-20 px-8 text-black">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Welcome!!</h2>
          <div className="border-2 w-10 border-black inline-block mb-2"></div>
          <p className="mb-4 text-sm sm:text-base">
            Provide your personal details to embark on an exciting journey with us.
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            <div className="flex flex-col  sm:flex-row mt-2 mr-5 gap-4 items-center">
              <div className="bg-gray-100 w-24 sm:w-32 ml-6 p-2 flex items-center rounded-md">
                <input
                  type="number" 
                  min="0"
                  name="roll"
                  placeholder="Roll No"
                  className="bg-gray-100  w-full outline-none text-sm flex-1"
                /></div>
                <div className="bg-gray-100 w-24 sm:w-28 p-2 flex items-center rounded-md">
                <input
                  type="number"
                  min="1"
                  max="8"
                  name="semester"
                  placeholder="Semester"
                  className="bg-gray-100 w-full outline-none text-sm flex-1"
                />
              </div>
            </div> 
            <div className="flex flex-col  sm:flex-row mt-2 mr-5 gap-4 items-center">
              <div className="bg-gray-100 w-24 sm:w-32 ml-6 p-2 flex items-center rounded-md">
                <input
                  type="number" 
                  min="1998"
                  max="2025"
                  name="admissionYear"
                  placeholder="Admission Year"
                  className="bg-gray-100  w-full outline-none text-sm flex-1"
                /></div>
                <div className="bg-gray-100 w-24 sm:w-28 p-2 flex items-center rounded-md">
                <input
                  type="number"
                  min="2002"
                  max="2030"
                  name="passing year"
                  placeholder="Passing Year"
                  className="bg-gray-100 w-full outline-none text-sm flex-1"
                />
              </div>
            </div> 
            <div className="bg-gray-100 mt-2 w-64 p-2 flex items-center rounded-md">
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 mt-2 w-64 p-2 flex items-center rounded-md">
                <input 
                  type="url"
                  name="Github"
                  placeholder="Github URL"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </div>

          <a
            href="#"
            className="border-2 border-black hover:bg-gray-800 hover:text-white rounded-full font-semibold px-8 py-2 mt-3 inline-block"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
