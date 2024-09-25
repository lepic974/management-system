//"use client"
import "@/app/globals.css"
import { auth } from "@/auth"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter, Poppins } from "next/font/google"
import React, { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "500"] })

const metadata: Metadata = {
	title: {
		default: "YaniPay",
		template: "%s | YaniPay",
	},
	description: "Super Application for save your money",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()

	// // State to track if the component has mounted
	// const [mounted, setMounted] = useState(false)

	// // Use useEffect to set mounted to true after the component mounts
	// useEffect(() => {
	// 	setMounted(true)
	// }, [mounted])

	// // Render null until the component has mounted to avoid hydration errors
	// if (!mounted) {
	// 	return null
	// }

	return (
		<SessionProvider session={session}>
			<html lang="fr">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<body
						suppressHydrationWarning
						className={`${inter.className} ${
							process.env.NEXT_PUBLIC_NODE_ENV == "development"
								? "debug-screens"
								: ""
						}`}
					>
						<Toaster />
						{children}
					</body>
				</ThemeProvider>
			</html>
		</SessionProvider>
	)
}
