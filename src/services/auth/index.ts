import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "../database";
import NodemailerProvider from "next-auth/providers/nodemailer"

export const { handlers: { GET, POST }, auth } = NextAuth({
    pages: {
        signIn: '/auth',
        signOut: '/auth',
        error: '/auth',
        verifyRequest: '/auth',
        newUser: '/app',
    },
    adapter: PrismaAdapter(prisma),
    providers: [NodemailerProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
    })],
    events: {}
})