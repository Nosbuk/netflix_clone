import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute hidden object-cover w-full h-full sm:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/0081f3d4-fc87-484a-9e76-6b1836b07eb9/PL-pl-20220801-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 w-full h-screen abosulte bg-black/60" />
        <div className="fixed z-50 w-full px-4 py-24">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h4 className="text-3xl font-bold">
                Sign Up
              </h4>
              <form className="flex flex-col w-full py-4">
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  type="submit"
                  value="Sign Up"
                  className="py-3 my-6 font-bold bg-red-600 rounded"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p className="py-8">
                    <input
                      className="mr-2"
                      type="checkbox"
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="mr-2 text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
