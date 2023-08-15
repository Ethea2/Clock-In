import connectMongoDB from '@/libs/mongodb'
import User from '@/models/userModel'
import Time from '@/models/timeModel'
import { NextResponse } from 'next/server'

export async function GET() {
    connectMongoDB()
    const times = await Time.find({})
    return NextResponse.json({times})
}