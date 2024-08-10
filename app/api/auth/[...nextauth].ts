import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github"
import { Provider } from "react-wrap-balancer";

const githubId = process.env.AUTH_GITHUB_ID
const githubSecret = process.env.AUTH_GITHUB_SECRET

if (!githubId || !githubSecret) {
    throw new Error('Missing GITHUB ID or GITHUB SECRET environement')
}

export const authConfig = {
    providers:[
        GithubProvider({
            clientId: githubId,
            clientSecret: githubSecret
        })
    ],
    adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions

export default NextAuth(authConfig)