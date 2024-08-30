import bcrypt from "bcryptjs"
import { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { getUserByEmail } from "./data/user"
import { LoginSchema } from "./schemas"

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedField = LoginSchema.safeParse(credentials)

				if (validatedField.success) {
					const { email, password } = validatedField.data
					const user = await getUserByEmail(email)

					if (!user || !user.password) {
						return null
					}

					const passwordMatch = await bcrypt.compare(password, user.password)
					if (passwordMatch) return user
				}

				return null
			},
		}),

		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
} satisfies NextAuthConfig
