import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="px-4 py-2 rounded bg-white text-black font-semibold w-full text-center cursor-pointer active:scale-98 transition-all duration-100"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
