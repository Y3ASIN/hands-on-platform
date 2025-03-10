import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import LoginForm from "../features/LoginForm";

const Login = () => {
  return (
    <div className="bg-gray-100 flex flex-col sm:flex-row max-w-7xl min-h-[90vh] my-10 justify-center items-center mx-auto rounded-lg">
      <div className="bg-gray-100 w-full sm:w-1/2 ml-16 mt-5">
        <LoginForm />
      </div>

      <div className="bg-gray-100 w-full sm:w-1/2 flex flex-col items-center justify-center">
        <div className="h-96 w-3xl">
          <DotLottieReact
            src="https://lottie.host/75e83932-fd88-446c-ae50-f084b2e2a307/mjaR0TwtoD.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
