"use client";

import { signIn, signOut } from "next-auth/react";
import { Input } from "@/components/ui/input";


export const LoginButton = () => {
  return (
    <>
      <button
        onClick={() => signIn()}
        className="group inline-block rounded bg-gradient-to-r from-pink-500 
        via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none 
        focus:ring active:text-opacity-75"
      >
        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium 
        group-hover:bg-transparent">
          Login
        </span>
      </button>

      <div className="">
        <Input type="email" placeholder="Email" />
      </div>
    
    </>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="group inline-block rounded bg-gradient-to-r from-pink-500 
      via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none 
      focus:ring active:text-opacity-75"
    >
      <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium 
      group-hover:bg-transparent">
        Logout
      </span>
    </button>
  );
};
