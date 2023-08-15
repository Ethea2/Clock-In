import connectMongoDB from '@/libs/mongodb'
import User from '@/models/userModel'
import Time from '@/models/timeModel'
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to get the correct month (0-indexed)
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export async function POST(request) {
    const { email } = await request.json()
    connectMongoDB()
    let user = mongoose.model('User')
    const today = formatDate(new Date())
    try {
        user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: 'user does not exist' }, {status: 404});
        }
        if (user) {
            const timeExists = await Time.findOne({ userRef: user._id, date: today })
            if (timeExists) {
                return NextResponse.json({ message: "You already clocked in today" }, { status: 404})
            }

            const newTime = await Time.create({ userRef: user._id })
            if (user.timeRef) {
                user.timeRef = [...user.timeRef, newTime._id]
            } else {
                user.timeRef = [newTime._id]
            }
            await user.save()
            return NextResponse.json({ message: "clocked in successfully!" })
        }
        return NextResponse.json({ message: 'user does not exist' })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: e }, { status: 500 })
    }

}