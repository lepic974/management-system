import { UserRole } from "@prisma/client"
import NextAuth from "next-auth"

import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getTwoFactorConfirmationByUserId } from "./actions/two-factor-confirmation"
import { getAccountByUserId } from "./data/account"

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
	unstable_update,
} = NextAuth({
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
	},
	events: {
		async linkAccount({ user }) {
			await db.user.update({
				where: { id: user.id },
				data: { emailVerified: new Date() },
			})
		},
	},
	callbacks: {
		async signIn({ user, account, profile }) {
			// Allow OAuth without email verification
			if (account?.provider !== "credentials") return true

			const existingUser = await getUserById(user.id)

			// Prevent sign in without email verification
			if (!existingUser?.emailVerified) {
				return false
			}
 
			// 2FA check
			if (existingUser?.isTwoFactorEnabled) {
				const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
					existingUser.id
				)

				if (!twoFactorConfirmation) return false

				// Delete two factor confirmation for next sign in
				await db.twoFactorConfirmation.delete({
					where: { id: twoFactorConfirmation.id },
				})
			}

			return true
		},

		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole
			}

			if (session.user) {
				session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
				//console.log({ sessionToken: tdoken, session })
			}

			if (session.user) {
				session.user.name = token.name as string
				session.user.email = token.email as string
				session.user.isOAuth = token.isOAuth as boolean
			}

			return session
		},

		async jwt({ token }) {
			if (!token.sub) return token

			//console.log({ token })

			const existingUser = await getUserById(token.sub)

			if (!existingUser) return token

			const existingAccount = await getAccountByUserId(existingUser.id)

			token.name = existingUser.name
			token.email = existingUser.email
			token.role = existingUser.role
			token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled
			token.isOAuth = !!existingAccount

			return token
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
})
