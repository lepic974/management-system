"use client";

import { Cloud, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import logo from "@/assets/images/logo.png";

import totoImg from "@/assets/images/todo_list.svg";
import treeImg from "@/assets/images/tree_structure.svg";
import webcamImg from "@/assets/images/webcam.svg";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AiOutlineClose } from "react-icons/ai";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import SignInButton from "../signInButton";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Features",
    link: "/features",
    children: [
      {
        label: "Banking",
        link: "/banking",
        iconImage: totoImg,
      },
      {
        label: "Fidelity",
        link: "/fidelity",
        iconImage: treeImg,
      },
      {
        label: "Identity",
        link: "/identity",
        iconImage: webcamImg,
      },
    ],
  },
  {
    label: "Company",
    link: "/company",
    children: [
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Our Team",
        link: "/our-team",
      },
      {
        label: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    label: "Donate",
    link: "/donate",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <nav className="flex w-full h-[70px] max-w-full justify-between px-4 py-5 text-sm fixed top-0 z-100 bg-white shadow-md dark:bg-primary-dark">
      {/* Left Side */}
      <section
        ref={animationParent}
        className="flex items-center max-w-7xl mr-auto gap-4"
      >
        {/* Logo */}
        <Link href={"/"} className="flex flex-row items-center">
          <Image src={logo} alt="logo" width={48} />
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <span className="flex text-2xl font-bold mr-5 text-primary dark:text-white">
            YaniPay
          </span>
        </Link>

        {/* NavItems */}
        <div className="md:flex items-center gap-2 transition-all hidden">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className={`relative group px-2 py-3 transition-all hover:scale-110 ${
                pathname === d.link ? "text-red-700" : "text-gray-600"
              } hover:text-red-700`}
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-primary-light">
                <span
                  className={`hover:border-b-2 hover:border-b-default scale-100 transition-all hover:scale-110 ${
                    pathname === d.link ? "text-red-700" : "text-gray-600"
                  } hover:text-red-700`}
                >
                  {d.label}
                </span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-3 pr-10 text-neutral-400 hover:text-black"
                    >
                      {/* Image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" width={28} />
                      )}
                      {/* Item */}
                      <span className="whitespace-nowrap pl-3">{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Right Side */}
      <section className="hidden md:flex items-center gap-2">
        <Button variant="link" size="sm" onClick={() => {}} className="">
          <span className="text-sm text-green-500">Démo</span>
        </Button>

        {/* <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-white ">
          Register
        </button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Cloud className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

              <Cloud className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className=""
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}

        <SignInButton />

        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>

        {/* <ClientPage /> */}
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </nav>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-10">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-black/60 text-4xl"
          />
        </section>

        <div className=" flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-4  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            Theme
          </Button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1 rounded-lg bg-white py-3 transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
