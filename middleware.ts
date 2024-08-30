import authConfig from "@/auth.config"
import NextAuth from "next-auth"

import {
	apiAuthPrefix,
	authRoutes,
	DEFAUTL_LOGIN_REDIRECT,
	publicRoutes,
} from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
	const { nextUrl } = req
	const isLoggedIn = !!req.auth

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)

	if (isApiAuthRoute) {
		return null
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAUTL_LOGIN_REDIRECT, nextUrl))
		}
		return null
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/auth/login", nextUrl))
	}

	console.log("IS LOGGEDIN: ", isLoggedIn)
	console.log("ROUTE: ", req.nextUrl.pathname)

	return null
})

// export { auth as middleware } from "@/auth"

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!.+\\.[\\w]+$|_next).*)",
		"/",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
	// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
