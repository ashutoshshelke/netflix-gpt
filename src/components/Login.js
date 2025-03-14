import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  const handleSignup = () => {
    setIsSignUp((signUp) => !signUp);
  };

  const handleClick = () => {
    // const name = name.current ?
    const message = validateData(
      name.current && name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black m-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p onClick={handleSignup} className="py-8 cursor-pointer">
          {isSignUp
            ? "Already registered? Sign In."
            : "New to Netflix? Sign up now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
