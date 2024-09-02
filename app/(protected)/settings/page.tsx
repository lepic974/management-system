"use client"

import { logout } from "@/actions/logout"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import {useCurrentUser} from "@/hooks/use-current-user"

const SettingsPage = () => {
	const user = useCurrentUser()

	const onClick = () => {
		logout()
	}

	return (
		<div className="bg-white p-10 gap-5 rounded-xl">
			{/* {JSON.stringify(user)} */}

			<form>
				<Button onClick={onClick} type="submit" className="text-black">
					Sign out
				</Button>
			</form>
		</div>
	)
}

export default SettingsPage
