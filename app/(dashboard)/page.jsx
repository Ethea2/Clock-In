'use client'

import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ClockInCalendar from '../components/ClockInCalendar'

export default function Homepage() {
  const { status, data: session, loading } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!loading) {
      if (status === 'unauthenticated') {
        router.push("/signin")
      }
    }
  }, [session, router])
  return (
    <>
      <div className="container">
        <button onClick={() => signOut({ callbackUrl: '/signin' })}>Signout</button>
        <div className="p-4 flex gap-4">
          <div className="p-4 border border-white bg-gradient-to-b from-[#A0505C] to-[#693052] flex items-center gap-4 px-10 rounded-3xl">
            <div className="border-2 border-white rounded-full overflow-hidden">
              <Image src={session?.user?.image} width={100} height={100} />
              </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{session?.user?.name}</h2>
              <p className="text-xs font-light underline">{session?.user?.email}</p>
            </div>
          </div>

          <div className="p-4 border border-white bg-gradient-to-b from-gray-500 to-gray-700 flex items-center gap-4 rounded-3xl flex-auto">
            <ProgressBar />
          </div>
        </div>

        <div className="px-4">
          <ClockInCalendar/>
        </div>
      </div>

    </>
  )
}
