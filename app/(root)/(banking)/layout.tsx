import Image from "next/image"
import Link from "next/link"

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import logo from "@/assets/images/logo.png"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Contact, LayoutDashboardIcon, LucideSettings } from "lucide-react"
import { FiHome } from "react-icons/fi"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

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
]

export default function RoutLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className="flex w-full h-screen">
			<ResizablePanelGroup
				direction="horizontal"
				className="flex w-full rounded-lg border md:min-w-[450px]"
			>
				<ResizablePanel defaultSize={20}>
					<div className="flex flex-col w-[200px] items-center justify-center p-2">
						<Avatar>
							<AvatarImage src="/assets/icons/Mac-32.png" />
							<AvatarFallback>
								<Image src={logo} alt="logo" width={32} height={32} />
								<Contact size={48} className="pt-4 mx-auto" />

								<p className="text-md font-bold text-center pt-10">Johan L.</p>
								<p className="pt-2 text-sm text-white/70 text-center gap-4">
									Software Engineer
								</p>
							</AvatarFallback>
						</Avatar>

						<Separator className="my-4" />

					  {/* SIDEBAR */}
						<div className="flex w-full flex-row h-full">
							<div className="flex w-full justify-between my-auto max-w-[200px]">
								<div className="flex flex-col min-h-screen">
                  
									{NavSidebar.map((a) => (
										<ul
											key={a.id}
											className="flex flex-col text-[16px] w-full font-bold gap-4 group mx-auto px-2 py-1 mb-4"
										>
											{a.section}
											{a.children.map((d) => (
												<li
													key={d.title}
													className="flex justify-start items-start w-full 
                      hover:bg-blue-700 rounded-xl"
												>
													{/* <NavigationMenuItem> */}
													<Link
														href={d.link}
														className="flex w-full text-sm ml-2 items-center hover:bg-blue-700 hover:text-neutral-100 px-2 py-1"
														// legacyBehavior
														// passHref
													>
														{/* <NavigationMenuLink
																className={navigationMenuTriggerStyle()}
															>
																{/* <LucideIcon name="landmark" size={18} {...props} /> */}
														{/* {d.iconUul} */}
														{/* <Icon iconNode={d.icon} /> */}
														{/* <Image
                                src="@/assets/svgs/credit-card.svg"
                                width={18}
                                height={18}
                                alt="card"
                                /> */}
														<LayoutDashboardIcon size={16} />
														{/* <LucideIcon name={d.icon} size={18} /> */}

														<p className="uppercase text-sm font-semibold text-neutral-100 ml-2">
															{d.title}
														</p>
														{/* </NavigationMenuLink> */}
													</Link>
													{/* </NavigationMenuItem> */}
												</li>
											))}
										</ul>
									))}

									<NavigationMenu>
										<NavigationMenuList>
											<NavigationMenuItem>
												<NavigationMenuTrigger>Menu</NavigationMenuTrigger>
												<NavigationMenuContent>
													<NavigationMenuLink>
														<Link
															href="/"
															className="flex w-full text-sm ml-2 hover:bg-blue-700 hover:text-neutral-100 px-4"
														>
															<FiHome
																size={18}
																className="flex hover:text-neutral-100"
															/>
															<p className="flex ml-2 items-center uppercase text-md font-semibold hover:text-neutral-100 text-neutral-300">
																Home
															</p>
														</Link>
														<Link
															href="/"
															className="flex w-full text-sm ml-2 hover:bg-blue-700 hover:text-neutral-100 px-4"
														>
															<FiHome
																size={18}
																className="flex hover:text-neutral-100"
															/>
															<p className="flex ml-2 items-center uppercase text-md font-semibold hover:text-neutral-100 text-neutral-300">
																Home
															</p>
														</Link>
													</NavigationMenuLink>
												</NavigationMenuContent>
											</NavigationMenuItem>
										</NavigationMenuList>
									</NavigationMenu>

									<NavigationMenu>
										<NavigationMenuItem>
											<NavigationMenuTrigger>Settings</NavigationMenuTrigger>
											<NavigationMenuContent>
												<NavigationMenuLink>
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
												</NavigationMenuLink>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</NavigationMenu>
								</div>
							</div>
						</div>
					</div>

          
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={80}>
					<ResizablePanelGroup direction="vertical">
						<ResizablePanel defaultSize={20}>
							<div className="flex h-full items-center justify-center p-6">
								{/* HEADER */}
								<div className="flex header top-0 left-200 min-w-full h-[100px] border border-solid border-b-dark-500 border-border bg-primary-dark items-center px-4">
									<Image src={logo} alt="logo" width={48} height={28} />
									<span className="sub-header font-sans">
										YaniPay / Dashboard / Accueil
									</span>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle />
						<ResizablePanel defaultSize={80}>
							<div className="flex h-full items-center justify-center">
								<main className="">{children}</main>
								{/* RIGHTBAR */}
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	)
}
