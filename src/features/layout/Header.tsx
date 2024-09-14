"use client";

import Nav from "@/components/Nav";
// import ToogleButton from "@/components/ToggleButton";

import { useTheme } from "next-themes";

const Header = () => {
  // const session = await useSession();

  return (
    <header className="w-full h-[50px] border-b border-b-accent fixed top-0 left-0 bg-background z-100 ">
      {/* <div className="flex w-full h-[10px] top-0 bg-red-300" /> */}
      <div className="flex justify-center items-center py-2 max-w-7xl m-auto gap-1">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
