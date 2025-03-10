import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import RegistrationForm from "../features/RegistrationForm";
const Registration = () => {
  return (
    <div className="bg-gray-100 flex max-w-7xl min-h-[90vh] my-10 justify-center items-center mx-auto rounded-lg">
      <div className="bg-gray-100 w-1/2 flex flex-col items-center justify-center">
        <div className="h-96 w-3xl">
          <DotLottieReact
            src="https://lottie.host/a6a3ac87-1dac-4c26-ae41-abda0ae6a284/Z8Lc3UMpYS.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="bg-gray-100 w-1/2 mr-16">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
