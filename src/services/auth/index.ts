import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "../database";
import NodemailerProvider from "next-auth/providers/nodemailer"
import Google from 'next-auth/providers/google'

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/auth',
        signOut: '/auth',
        error: '/auth',
        verifyRequest: '/auth',
        newUser: '/app',
    },
    adapter: PrismaAdapter(prisma),
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
    }), NodemailerProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
    })],
    events: {}
})