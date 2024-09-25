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
		<section
			className={`${inter.className}flex flex-col max-w-screen w-full max-h-screen h-screen p-0 m-0 overflow-auto`}
		>
			{/* TOP */}
			<div className="flex flex-row w-full h-screen">
				{/* SIDEBAR */}
				<div className="hidden md:flex flex-col w-[20%] h-screen border-r-2 border-primary-light">
					<div className="flex flex-col w-full">
						<Link
							href="/"
							className="flex flex-row items-center gap-2 justify-center py-3 px-1"
						>
							<Image src={logo} alt="logo" width={32} height={32} />
							<span className="text-xl font-black text-secondaryNew-light">
								YaniPay
							</span>
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image src="/polygon.svg" alt="logo" width={60} height={60} />
						<div className="flex flex-row items-center gap-2">
							<span className="text-md font-black">Johan LEPINAY</span>
							<Image src="/Approval.svg" alt="avatar" width={22} height={28} />
						</div>
						<span className="text-sm font-semibold">Admin</span>
					</div>

					<div className="">
						<MenuSidebar />
					</div>
				</div>

				{/* CENTER */}
				<div className="flex flex-col w-[80%] h-full">
					{/* TOPBAR */}
					<div className="flex h-[100px] max-w-[100%] w-full flex-1 border-b-2 border-primary-light py-2">
						<TopNavbar />
					</div>
					{/* BODY */}
					<div className="flex flex-row w-full h-full">
						<div className="flex w-3/4 h-full p-0 m-0">
							{/* LEFT */}

							{children}
						</div>

						{/* RIGHT */}
						<div className="flex w-1/4 h-full p-0 m-0">
							<h2 className="sub-header font-semibold">Rightbar</h2>
						</div>
					</div>
				</div>
			</div>

			{/* BOTTOM */}
			<div className="flex flex-row w-full h-[50px] justify-between items-center bg-gray-800 gap-2">
				<span className="text-[12px] text-primary-dark self-center text-center p-2">
					2024 © YaniPay, SASU
				</span>
				<span className="text-[12px] text-primary-dark self-center text-center p-2">
					v 0.0.1
				</span>
			</div>
		</section>
	)
}
