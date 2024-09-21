import { UserInfo } from "@/components/user-info"
import { currentUser } from "@/lib/auth"
import { auth } from "@/auth";

const ServerPage = async () => {
	const session = await auth()
	const user = await currentUser()

	{JSON.stringify(session?.user)}

	return <UserInfo label="💻 Server component" user={user} />
}

export default ServerPage
