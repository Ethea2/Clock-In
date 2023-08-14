import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    // callbacks: {
    //     async signIn({ user, account }) {
    //         const { name, email } = user
    //         if (account.provider === 'google') {
    //             try {
    //                 connectMongoDB()
    //                 const userExists = await User.findOne({ email })
    //                 if (!userExists) {
    //                     const res = await fetch('http://localhost:3000/api/user/', {
    //                         method: "POST",
    //                         headers: {
    //                             'Content-Type': 'application/json'
    //                         },
    //                         body: JSON.stringify({
    //                             name,
    //                             email
    //                         })
    //                     })
    //                     if (res.ok) {
    //                         return user
    //                     }
    //                 }
    //                 return user
    //             } catch (e) {
    //                 console.log(e)
    //             }
    //         }
    //     }
    // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } 