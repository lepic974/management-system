import { auth } from "@/auth"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter, Poppins } from "next/font/google"
import React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "500"] })

export const metadata: Metadata = {
	title: {
		default: "YaniPay",
		template: "%s | YaniPay"
	},
	description: "Super Application for save your money",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()


	return (
		
		<SessionProvider session={session}>
			<html lang="en">
				{/* <SessionWrapper> */}
				<ThemeProvider 
					attribute="class" 
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<body
						suppressHydrationWarning
						className={`${inter.className} ${
							process.env.NODE_ENV == "development" ? "debug-screens" : ""
						}`}
					>
						<Toaster />
						{children}
					</body>
				</ThemeProvider>
				{/* </SessionWrapper> */}
			</html>
		</SessionProvider>
	)
}
