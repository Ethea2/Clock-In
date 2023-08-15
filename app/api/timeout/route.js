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
    const { email, hours } = await request.json()
    connectMongoDB()
    let user = mongoose.model('User')
    let time = mongoose.model('Time')
    const today = formatDate(new Date())
    try {
        user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: 'user does not exist' })
        }
        time = await Time.findOne({ userRef: user._id, date: today })
        if (!time) {
            return NextResponse.json({ message: 'has not clocked in' })
        }
        if (time.timeout || time.hours) {
            return NextResponse.json({ message: 'has already timed out.'})
        }
        
        time.timeout = new Date()
        time.hours = hours
        await time.save()
        // const success = await Time.findOneAndUpdate({ time }, { hours, timeout: new Date() })
        return NextResponse.json({ time })

    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: e }, { status: 500 })
    }

}