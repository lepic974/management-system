import NextAuth from "next-auth"
import { NextRequest } from "next/server"

import authConfig from "@/auth.config"
const { auth } = NextAuth(authConfig)

import {
	DEFAUTL_LOGIN_REDIRECT,
	DEFAULT_REDIRECT,
	apiAuthPrefix,
	authRoutes,
	publicRoutes,
} from "@/routes"


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
		let callbackUrl = nextUrl.pathname

		if (nextUrl.search) {
			callbackUrl += nextUrl.search
		}
		console.log(nextUrl.pathname)

		const encodedCallbackUrl = encodeURIComponent(callbackUrl)

		return Response.redirect(
			new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
		)
	}

	console.log("IS LOGGEDIN: ", isLoggedIn)
	console.log("ROUTE: ", req.nextUrl.pathname)

	return null
})

// export { auth as middleware } from "@/auth"

// Skip Next.js internals and all static files, unless found in search params
// Always run for API routes
// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}
