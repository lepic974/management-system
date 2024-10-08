"use client"

import { UserButton } from "@/components/auth/user-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function TopNavbar() {
    const pathname = usePathname()

    return (
			<div className="flex flex-row max-w-full w-full items-center justify-between px-2 mx-auto">
				{/* LEFT */}
				<div className="flex flex-row items-center gap-2">
					<Button variant="outline" size="icon" className="mr-1">
						<Image
							src="/Module.svg"
							alt="module"
							width={22}
							height={22}
							className="gap-x-2"
						/>
					</Button>

					<Image src="/search.svg" alt="search" width={22} height={22} />
					<Input type="text" placeholder="Search in Dashboard..." />
				</div>

				{/* RIGHT */}
				<div className="flex flex-row items-center gap-2">
					<Button variant="outline" size="default" className="gap-x-2">
						<Image
							src="/CoinWallet.svg"
							alt="menu"
							width={22}
							height={22}
							className=""
						/>
						<span>0x3943...0943</span>
					</Button>

					<Button variant="outline" size="icon" className="mr-1">
						<Image
							src="/notification.svg"
							alt="menu"
							width={22}
							height={22}
							className="gap-x-2"
						/>
					</Button>
					<Button variant="outline" size="icon" className="mr-1">
						<Image
							src="/QrCode.svg"
							alt="menu"
							width={22}
							height={22}
							className="gap-x-2"
						/>
					</Button>
					<Button variant="outline" size="icon" className="mr-1">
						<Image
							src="/menu.svg"
							alt="menu"
							width={22}
							height={22}
							className="gap-x-2"
						/>
					</Button>
					<UserButton />
				</div>
			</div>
		)
}