/**
 * An array of routes that are accessible to the public
 * These route do not require authentification
 * @type {string[]}
 */

export const publicRoutes = [
	"/",
	"/features",
	"/banking",
	"/fidelity",
	"/identity",
	"/company",
	"/company/about",
	"/company/blog",
	"/company/our-team",
	"/donate",
	"/contact",
	"/open-ai",
	"/auth/new-verification",
	"/dashboard",
	"/clients",
	"/users",
	"/maintenance",
]

/**
 * An array of routes that are used for authentification
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
	"/auth",
	"/auth/login",
	"/auth/register",
	"/auth/error",
	"/auth/reset",
	"/auth/new-password",
]

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth"

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const DEFAUTL_LOGIN_REDIRECT = "/settings"
export const DEFAULT_REDIRECT = "/"
