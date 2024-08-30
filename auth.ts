import { UserRole } from "@prisma/client"
import NextAuth from "next-auth"

import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  events: {
    async linkAccount({ user}) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
	callbacks: {
		async signIn({ user, account }) {
      // Allow OAuth without email verification
      if(account?.provider !== "credentials") return true

      const existingUser = await getUserById(user.id)
      
      // Prevent sign in without email verification
			if (!existingUser?.emailVerified) {
        return false
			}

      // TODO: Add 2FA check
      
      return true
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole
			}
			console.log({ sessionToken: token, session })
			return session
		},

		async jwt({ token }) {
			if (!token.sub) return token
			console.log({ token })

			const existingUser = await getUserById(token.sub)

			if (!existingUser) return token

			token.role = existingUser.role

			return token
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
})