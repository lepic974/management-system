import LoginButton from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
})

export default function AuthPage() {
	return (
		<div className="flex flex-col w-full h-full items-center justify-center bg-transparent">
			<div className="space-y-6 text-center">
				<h1
					className={cn(
						"text-6xl font-semibold text-white drop-shadow-md",
						font.className,
					)}
				>
					🔐 Auth admin
				</h1>
				<p className="text-white text-lg">A simple authentication service</p>
				<div className="items-center">
					<LoginButton mode="modal" asChild>
						<Button variant="secondary" size="lg">
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
		</div>
	)
}