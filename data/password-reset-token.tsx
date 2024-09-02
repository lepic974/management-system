import { db } from "@/lib/db"

export const getPasswordResetTokenByToken = async (token: string) => {
	try {
		const passworResetToken = await db.passwordResetToken.findUnique({
			where: { token },
		})
		return passworResetToken
	} catch {
		return null
	}
}

export const getPasswordResetTokenByEmail = async (email: string) => {
	try {
		const passworResetToken = await db.passwordResetToken.findFirst({
			where: { email },
		})
		return passworResetToken
	} catch {
		return null
	}
}
