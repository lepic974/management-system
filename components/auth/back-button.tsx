"use client"

import Link from "next/link"
import { Button } from "../ui/button"

interface BackButtonProps {
	label: string
	href: string
}

export const BackButton = ({ label, href }: BackButtonProps) => {
	return (
		<Button variant="link" size="sm" className="text-black/90 dark:text-white/90 font-normal w-full" asChild>
			<Link href={href}>{label}</Link>
		</Button>
	)
}
