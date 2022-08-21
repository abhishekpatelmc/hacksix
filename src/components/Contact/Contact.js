import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <div className="bg-blue-500 h-1 w-40 my-2 rounded-lg"></div>
      </div>

      <div className="grid place-items-center">
        <div className="relative z-10 w-full max-w-lg my-20">
          <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
            <h4 className="w-full text-3xl font-medium leading-snug">
              Fill out the form to contact one of our financial advisors!
            </h4>
            <form className="relative w-full mt-6 space-y-8">
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Email Address
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="For eg: john@email.com"
                />
              </div>

              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Message
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="I would like to..."
                />
              </div>

              <div className="relative">
                <button className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
