import "@/app/globals.css"

import { logo } from "@/public/logo"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import MenuSidebar from "../_components/menu-sidebar"
import TopNavbar from "../_components/top-navbar"

const NavLink = [
	{ label: "Login", href: "/login" },
	{ label: "Password", href: "/password" },
	{ label: "Forgot Paaword", href: "/forgot-password" },
	{ label: "Register", href: "/register" },
]

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Dashboard page",
	description: "Administrator manager app",
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main
			className={`${inter.className} max-w-screen max-h-screen overflow-x-hidden`}
		>
			{/* TOP */}
			<div className="flex flex-row w-screen h-screen">
				{/* SIDEBAR */}
				<div className="flex flex-col min-w-[20%] h-screen border-r-2 border-gray-500 bg-secondaryNew-dark">
					<div className="flex flex-col w-full">
						<Link
							href="/"
							className="flex flex-row items-center gap-2 justify-center py-3 px-1"
						>
							<Image src={logo} alt="logo" width={32} height={32} />
							<span className="text-xl font-black">YaniPay</span>
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image src="/polygon.svg" alt="logo" width={60} height={60} />
						<span className="text-md font-black">Johan LEPINAY</span>
						<span className="text-sm font-semibold">Admin</span>
					</div>

					<div className="bg-secondaryNew-dark">
						<MenuSidebar />
					</div>
				</div>

				{/* CENTER */}
				<div className="flex flex-col w-screen h-full">
					{/* TOPBAR */}
					<div className="flex h-[100px] flex-1 border-b-2 border border-secondaryNew-light bg-secondaryNew-dark py-2">

						{/* <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
							Topbar
						</h2> */}
						<TopNavbar />
					</div>
					{/* BODY */}
					<div className="flex flex-row flex-1 w-screen h-full">
						<div className="flex max-w-[80%] max-h-full overflow-scroll">
							{/* LEFT */}

							{children}

							{/* RIGHT */}
							<div className="hidden md:flex w-1/3 h-screen bg-secondaryNew-light">
								<h2 className="sub-header font-semibold">Rightbar</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* BOTTOM */}
			<div className="flex w-full h-[50px] bg-gray-800">
				<span className="text-[12px] text-primary-dark self-center text-center p-2">
					2024 © YaniPay, SASU
				</span>
			</div>
		</main>
	)
}
