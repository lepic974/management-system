import NextAuth from "next-auth"
import github from "next-auth/providers/github"

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	providers: [github],
})
