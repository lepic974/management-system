"use client"

import Image from "next/image"
import Link from "next/link"

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
				link: "/store",
				icon: "/Shop.svg",
			},
			{
				label: "Reward",
				link: "/rewards",
				icon: "/Trophy.svg",
			},
			{
				label: "Gift Card",
				link: "/gift-card",
				icon: "/Gift.svg",
			},
			{
				label: "Integrations",
				link: "/integrations",
				icon: "/Module.svg",
			},
			{
				label: "Agency",
				link: "/agency",
				icon: "/Suitcase.svg",
			},
			{
				label: "Team Member",
				link: "/team-member",
				icon: "/assets/svgs/home.svg",
			},
			{
				label: "Analytics",
				link: "/analytics",
				icon: "/Tools.svg",
			},
			{
				label: "Orders",
				link: "/orders",
				icon: "/ShoppingCart.svg",
			},
			{
				label: "Customer",
				link: "/customer",
				icon: "/MaleUser.svg",
			},
		],
	},
	{
		section: "Banking",
		childen: [
			{
				label: "Home",
				link: "/home",
				icon: "/home.svg",
			},
			{
				label: "Account",
				link: "/account",
				icon: "/Wallet.svg",
			},
			{
				label: "Card",
				link: "/card",
				icon: "/CreditCard.svg",
			},
			{
				label: "Payments",
				link: "/payments",
				icon: "/Todo_list.svg",
			},
		],
	},
	{
		section: "Identity",
		childen: [
			{
				label: "Profile",
				link: "/home",
				icon: "/MaleUser.svg",
			},
			{
				label: "Documents",
				link: "/account",
				icon: "/TestPassed.svg",
			},
			{
				label: "Verif",
				link: "/card",
				icon: "/OK.svg",
			},
			{
				label: "Settings",
				link: "/settings",
				icon: "/Gear.svg",
			},
		],
	},
]

const MenuSidebar = () => {
  return (
    <div>
      {SidebarItems.map(i => (
        <div className="flex flex-col gap-2 overflow-scroll">
          <div className="flex flex-col gap-2 py-4 px-2" key={i.section}>
            <span className="text-md font-semibold text-primary-light">
            {i.section}
            </span>
            {i.childen.map(c => (
              <Link href={c.link} key={c.label} className="flex flex-row items-center justify-start gap-2 py-1/2 px-2 hover:bg-blue-600">
                <Image src={c.icon} alt={c.label} width={22} height={22} />
                <span className="text-sm font-semibold uppercase">{c.label}</span>
              </Link>
            ))}
          </div>


        </div>
      ))}
    </div>
  )
}

export default MenuSidebar