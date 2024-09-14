"use client";
// import ToogleButton from "@/components/ToggleButton";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Nav = () => {
    const { theme, setTheme } = useTheme();

  return (
    <>
      <h2 className="text-2xl font-bold mr-auto">YaniStore</h2>
      {/* {session ? <UserProfile /> : <LoginButton />} */}
      {/* <ToogleButton /> */}

      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className=""
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};

export default Nav;
