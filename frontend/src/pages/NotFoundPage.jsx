import React from "react";
import { Link } from "react-router";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-2xl">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
