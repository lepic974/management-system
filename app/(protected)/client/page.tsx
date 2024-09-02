import { UserInfo } from "@/components/user-info"
import { currentUser } from "@/lib/auth"

const ClientPage = async () => {
	const user = await currentUser()

	return <UserInfo label="😎 Client component" user={user} />
}

export default ClientPage
