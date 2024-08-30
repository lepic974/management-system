"use client"

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { DEFAUTL_LOGIN_REDIRECT } from "@/routes"
import { signIn } from "next-auth/react"
import { Button } from "../ui/button"

export const Social = () => {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: DEFAUTL_LOGIN_REDIRECT
		})
	}
	return (
		<div className="flex items-center w-full gap-x-2">
			<Button variant="outline" size="lg" className="w-full" onClick={() => onClick("google")}>
				<FcGoogle className="w-5 h-5" />
			</Button>
			<Button variant="outline" size="lg" className="w-full" onClick={() => onClick("github")}>
				<FaGithub className="w-5 h-5" />
			</Button>
		</div>
	)
}
