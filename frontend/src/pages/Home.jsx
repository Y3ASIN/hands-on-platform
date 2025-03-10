import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>
        <img src="/Platform-text.png" alt="title" />
      </h1>
      <p className="text-lg text-slate-500">
        Find opportunities to help your community and make a difference.
      </p>

      <div className="bg-white p-5 rounded-lg text-center flex flex-col">
        <Link
          to="/login"
          className="outline outline-accent py-2 px-4 rounded-lg hover:bg-white/30 hover:text-accent bg-accent text-white transition duration-300"
        >
          Get Started
        </Link>
        <p className="mt-2 text-accent text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-accent-secondary font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
