"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SidebarItems = [
	{
		section: "Loyalty",
		childen: [
			{
				label: "Dashboard",
				link: "/dashboard",
				icon: "/ControlPanel.svg",
			},
			{
				label: "Store",
				link: "/dashboard/store",
				icon: "/Shop.svg",
			},
			{
				label: "Reward",
				link: "/dashboard/reward",
				icon: "/Trophy.svg",
			},
			{
				label: "Gift Card",
				link: "/dashboard/gift-card",
				icon: "/Gift.svg",
			},
			{
				label: "Integrations",
				link: "/dashboard/integrations",
				icon: "/Module.svg",
			},
			{
				label: "Agency",
				link: "/dashboard/agency",
				icon: require("/assets/svgs/suitcase.svg"),
			},
			{
				label: "Team Member",
				link: "/dashboard/team-member",
				icon: require("/assets/svgs/home.svg"),
			},
			{
				label: "Analytics",
				link: "/dashboard/analytics",
				icon: "/Tools.svg",
			},
			{
				label: "Orders",
				link: "/dashboard/orders",
				icon: "/ShoppingCart.svg",
			},
			{
				label: "Customer",
				link: "/dashboard/customer",
				icon: "/MaleUser.svg",
			},
		],
	},
	{
		section: "Banking",
		childen: [
			{
				label: "Home",
				link: "/dashboard/home",
				icon: "/home.svg",
			},
			{
				label: "Account",
				link: "/dashboard/account",
				icon: "/Wallet.svg",
			},
			{
				label: "Card",
				link: "/dashboard/card",
				icon: require("/assets/svgs/CreditCard.svg"),
			},
			{
				label: "Payments",
				link: "/dashboard/payments",
				icon: require("/assets/svgs/TestPassed.svg"),
			},
		],
	},
	{
		section: "Identity",
		childen: [
			{
				label: "Profile",
				link: "/dashboard/home",
				icon: "/MaleUser.svg",
			},
			{
				label: "Documents",
				link: "/dashboard/account",
				icon: "/TestPassed.svg",
			},
			{
				label: "Verif",
				link: "/dashboard/card",
				icon: "/OK.svg",
			},
			{
				label: "Settings",
				link: "/dashboard/settings",
				icon: "/Gear.svg",
			},
		],
	},
]

const MenuSidebar = () => {
	const pathname = usePathname()
  return (
		<div>
			{SidebarItems.map((i, index) => (
				<div key={index} className="flex flex-col h-full overflow-scroll">
					<div className="flex flex-col gap-2 py-2 px-2" key={i.section}>
						<span className="text-md font-semibold text-primary-dark">
							{i.section}
						</span>
						{i.childen.map((c) => (
							<Link
								href={c.link}
								key={c.label}
								className="flex flex-row items-center justify-start gap-2 py-1 px-2 hover:bg-blue-600 hover:rounded-xl hover:text-primary-light cursor-pointer"
							>
								<Image src={c.icon} alt={c.label} width={22} height={22} />
								{c.link === pathname ? (
									<span className="text-sm font-black uppercase text-secondary-dark scale-105">
										{c.label}
									</span>
								) : (
									<span className="text-[14px] font-semibold uppercase">
										{c.label}
									</span>
								)}
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default MenuSidebar