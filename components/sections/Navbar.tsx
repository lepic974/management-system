"use client"

import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/images/logo.png"
import { CiBank } from "react-icons/ci";

import totoImg from "@/assets/images/todo_list.svg"
import treeImg from "@/assets/images/tree_structure.svg"
import webcamImg from "@/assets/images/webcam.svg"
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";


type NavItem= {
  label: string
  link?: string
  children?: NavItem[]
  iconImage?: string
}

const navItems: NavItem[] = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Banking",
        link: "#",
        iconImage: totoImg
      },
      {
        label: "Fidelity",
        link: "#",
        iconImage: treeImg
      },{
        label: "Identity",
        link: "#",
        iconImage: webcamImg
      }
    ],
  },
  {
    label: "Company",
    link: "#",
    children: [
      {
        label: "About",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      }
    ]
  },
  {
    label: "Donate",
    link: "#"
  },
  {
    label: "Contact",
    link: "#"
  }
]

export default function Navbar () {

  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className='mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-white text-sm'>
      {/* Left Side */}
      <section ref={animationParent} className="flex items-center gap-18">
        {/* Logo */}
        <Image src={logo} alt="logo" width={48}/>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu}/>}
        <span className="flex text-2xl font-bold mr-5">YaniPay</span>

        {/* NavItems */}
        <div className="md:flex items-center gap-4 transition-all hidden">
          {navItems.map((d, i) => (
            <Link 
              key={i}
              href={d.link ?? "#"}
              className="relative group px-2 py3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-white">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0"/>  
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
      <section className="hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-white">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-white hover:text-white">
          Register
        </button>
      </section>

      <FiMenu 
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  )
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-10">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-black/60 text-4xl "
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

        <section className="flex flex-col gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
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

