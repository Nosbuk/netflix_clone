import React, { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
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
                Sign In
              </h4>
              {error && (
                <p className="p-3 my-2 bg-red-400">
                  {error}
                </p>
              )}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full py-4"
              >
                <input
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  type="submit"
                  value="Sign In"
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
                    Need account?
                  </span>
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
