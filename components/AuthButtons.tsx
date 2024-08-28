"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <>
      <button
        onClick={() => signIn()}
        className="group inline-block rounded bg-gradient-to-r from-pink-500 
        via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none 
        focus:ring active:text-opacity-75"
      >
        <span className="block rounded-sm bg-transparent px-8 py-3 text-sm font-medium 
        group-hover:bg-transparent">
          Login
        </span>
      </button>
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
      <span className="block rounded-sm bg-transparent px-8 py-3 text-sm font-medium 
      group-hover:bg-transparent">
        Logout
      </span>
    </button>
  );
};
