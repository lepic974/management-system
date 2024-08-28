import type { LayoutParams } from "@/types/next";
import Image from "next/image";

import Link from "next/link";
import logo from "../../../assets/images/logo.png";

import { LucideSettings } from "lucide-react";

import { FiHome } from "react-icons/fi";

const NavSidebar = [
  {
    id: 1,
    section: "Dashboard",
    children: [
      {
        title: "Dashboard",
        icon: "./assets/svgs/credit-card.svg",
        iconUul: "Landmark",
        link: "/dashboard",
      },
      {
        title: "User",
        icon: "trousers",
        link: "/user",
      },
      {
        title: "Contact",
        icon: "ampersand-square",
        link: "/contact",
      },
      {
        title: "Organistion",
        icon: "Landmark",
        link: "/organistion",
      },
    ],
  },
  {
    id: 2,
    section: "User",
    children: [
      {
        title: "List",
        icon: "Landmark",
        link: "/list",
      },
    ],
  },
  {
    id: 3,
    section: "Banking",
    children: [
      {
        title: "Transaction",
        icon: "Landmark",
        link: "/user",
      },
    ],
  },
];

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <html lang="en">
      {/* <header>
        <div className="">Header</div>
      </header> */}

      <body className="flex w-full h-screen">
        {/* HEADER */}
        <div className="flex header fixed top-0 left-200 min-w-full h-[100px] border border-solid border-b-dark-500 border-border bg-primary-dark items-center px-4">
          <Image src={logo} alt="logo" width={48} height={28} />
          <span className="sub-header font-sans">
            YaniPay / Dashboard / Accueil
          </span>
        </div>

        <div className="flex w-full flex-row h-full">
          {/* SIDEBAR */}
          <div className="flex w-1/3 border border-solid border-b-dark-500 border-border bg-primary-dark justify-between my-auto max-w-[200px]">
            <div className="flex flex-col top-0 left-0 min-h-screen">
              
              <h1 className="pt-10">Johan L.</h1>

              <p className="flex pt-20 sub-header gap-4">
                Software Engineer
              </p>
              {NavSidebar.map((a, i) => (
                <ul
                  key={i}
                  className="flex flex-col w-full gap-4 group mx-auto px-4 py-1"
                >
                  {a.section}
                  {a.children.map((d) => (
                    <li
                      className="flex justify-start items-start w-full 
                    hover:bg-blue-700 rounded-xl py-2"
                    >
                      <Link
                        href={d.link}
                        className="flex w-full text-sm ml-2 hover:bg-blue-700 hover:text-neutral-100 px-4"
                      >
                        {/* <LucideIcon name="landmark" size={18} {...props} />
                        {d.iconUul} */}
                        {/* <Icon iconNode={d.icon} /> */}
                        {/* <Image
                          src="@/assets/svgs/credit-card.svg"
                          width={18}
                          height={18}
                          alt="card"
                        /> */}
                        {/* <LucideBitcoin name={d.icon} size={18} /> */}
                        <FiHome
                          size={18}
                          className="flex hover:text-neutral-100"
                        />
                        <p className="flex ml-2 items-center uppercase text-md font-semibold hover:text-neutral-100 text-neutral-300">
                          {d.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}

              {/* <li
                  className="flex justify-start items-start w-full mr-2 
                hover:bg-slate-300"
                >
                  <Link href="/dashboard" className="flex w-full">
                    <Home size={18} className="flex" />
                    <p className="flex ml-2 items-center text-md font-semibold text-neutral-300">
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li
                  className="flex justify-start items-start w-full mr-2 
                hover:bg-slate-300"
                >
                  <Link href="/dashboard" className="flex w-full">
                    <PersonStanding size={18} className="flex" />
                    <p className="flex ml-2 items-center text-md font-semibold text-neutral-300">
                      User
                    </p>
                  </Link>
                </li>

                <li className="flex flex-row w-full mr-2 hover:bg-black">
                  <PersonStanding />
                  <p className="ml-2 items-center text-sm font-semibold text-neutral-300">
                    Users
                  </p>
                </li>
                <li className="flex w-full marker:justify-center items-center mr-2 hover:bg-black">
                  <PersonStanding size={18} />
                  <p className="ml-2 items-center text-sm font-semibold text-neutral-300">
                    Contact
                  </p>
                </li>
                <li className="flex flex-row justify-center items-center mr-2 hover:bg-black">
                  <Origami size={18} />
                  <p className="ml-2 items-center text-sm font-semibold text-neutral-300">
                    Organisation
                  </p>
                </li>
              </ul> */}
              <div className="flex-row items-end w-full">
                <Link
                  href="/settings"
                  className="flex w-full text-sm ml-2 hover:bg-blue-700 hover:text-purple-500 mx-4"
                >
                  <LucideSettings size={18} color="currentColor" />
                  <p className="flex ml-2 items-center text-md font-semibold hover:text-purple-500 text-neutral-300">
                    Settings
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHTBAR */}
          <div className="flex h-full w-2/3 bg-yellow-500">
            <div className="flex md:flex-wrap bg-yellow-500">
              <main className="">{props.children}</main>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
      </body>
    </html>
  );
}
