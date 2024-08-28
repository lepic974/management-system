//import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { authOptions, getServerSession } from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";


// export const { auth, handlers, signIn, signOut } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     providers: [ 
//         GoogleProvider({ 
//             clientId: process.env.GOOGLE_CLIENT_ID, 
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         }),
//          GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,

            // profile(profile) {
            //     // console.log({ profile })
            //     return (
            //         id: profile.id.toString()
            //         username: profile.login
            //         name: profile.name
            //         email: profile.email
            //         image: profile.avatar_url
            //     )
            // },
//         })
//     ],
//     callbacks: {
//         session({ session, user }) {
//             if (!session?.user) return session
//             session.user.id = user.id
//             return session
//         }
//     }
// })


export const authOptions: AuthOpitions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    // callbacks: {
    //     session({ session, user }) {
    //         if (!session?.user) return session
    //         session.user.id = user.id
    //         return session
    //     }
    // }
};

export const getAuthSession = async () => {
    const session = await getServerSession(authOptions)
    return session;
};
