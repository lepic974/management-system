"use client"

import { Home } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { inflateRaw } from "zlib"

interface DemoCardProps {
  label: string
  color?: string
  icon?: string
}

export const DemoCard = ({ label, color, icon }: DemoCardProps) => {

	// const user = useCurrentUser()

	return (
		<>
			{/* <p>{user?.name}</p> */}
			<div className={`flex flex-col w-[500px] h-[50vh] items-center justify-center mx-auto ${color} rounded-xl mt-10`}>

				<Home className="my-2 text-white" size={28} />

				<h1 className="header flex text-4xl text-white">{label}</h1>

				<Button variant={"outline"} className="flex items-center mt-4 mx-auto">
					<Home className="my-2 mr-2" size={18} />
					<Link href="/" className="">
						Go to Homepage
					</Link>
				</Button>
			</div>
		</>
	)
}
