"use client";
import { Button } from "@headlessui/react";
import Image from "next/image";

function LoginForm() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/register`;
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[90%] mx-auto mt-30 mb-6">
      <span className="text-lg text-center">Please Login with google</span>
      <Button
        onClick={handleLogin}
        className="flex gap-2 cursor-pointer border border-[#DFD9D9] text-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
      >
        <Image
          src="/icons/Google.png"
          width={20}
          height={20}
          alt="Google Icon"
          className="w-fit self-center"
        />
        Continue with Google
      </Button>
    </div>
  );
}

export default LoginForm;
