import connectMongoDB from '@/libs/mongodb'
import User from '@/models/userModel'
import Time from '@/models/timeModel'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const { email } = params
    connectMongoDB()
    const user = await User.findOne({ email })
    if (!user) {
        return NextResponse.json({ message: "User does not exist." }, { status: 404 })
    }
    const times = await Time.find({ userRef: user._id })
    return NextResponse.json({ times })
}