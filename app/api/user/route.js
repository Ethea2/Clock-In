import connectMongoDB from '@/libs/mongodb'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'

export async function GET() {
    connectMongoDB()
    const users = await User.find()
    return NextResponse.json({ users })
}

export async function POST(request) {
    const { name, email } = await request.json()

    connectMongoDB()
    await User.create({ name, email })
    return NextResponse.json({ message: "User Created Successfully" }, { status: 201 })
}
