'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function ProgressBar() {
  const { data: session } = useSession()
  const [clockedIn, setClockedIn] = useState(false)
  const [time, setTime] = useState(0)
  const [isRunning, setRunning] = useState(false)
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false)
  let timer;

  const totalDuration = 4 * 60 * 60; // 4 hours in seconds


  useEffect(() => {
    setTime(JSON.parse(localStorage.getItem('time')) ? JSON.parse(localStorage.getItem('time')).currentTime : 0)
    setClockedIn(JSON.parse(localStorage.getItem('time')) ? JSON.parse(localStorage.getItem('time')).clockedIn : false)
    setRunning(JSON.parse(localStorage.getItem('time')) ? JSON.parse(localStorage.getItem('time')).isRunning : false)
  }, []);

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setTime((current) => current + 1)
        setProgress((time/totalDuration) * 100);
        localStorage.setItem('time', JSON.stringify({ currentTime: time, clockedIn: true, isRunning }))
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isRunning, time, totalDuration])

  const clockIn = () => {
    const clockin = async () => {
      const res = await fetch('http://localhost:3000/api/timein', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": session?.user?.email
        })
      })
      const json = await res.json()

      if (res.ok) {
        toast(json.message)
        setRunning(true)
        setClockedIn(true)
      } else {
        toast(json.message)
      }
    }
    clockin()
  }

  const pauseTimer = () => {
    setRunning(false)
    setPaused(true)
  }

  const unpause = () => {
    setRunning(true)
    setPaused(false)
  }

  const clockOut = () => {

    const clockout = async () => {
      const res = await fetch('http://localhost:3000/api/timeout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": session?.user?.email,
          "hours": Math.floor(time / 3600)
        })
      })
      const json = await res.json()

      if (res.ok) {
        setRunning(false)
        setClockedIn(false)
        setTime(0)
        localStorage.removeItem('time')
      } else {
        toast(json.message)
      }
    }
    clockout()
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 1000 / 60 / 60)
    const mins = Math.floor(time / 60)
    const secs = time % 60
    return { hours: hours.toString().padStart(2, "0"), minutes: mins.toString().padStart(2, "0"), seconds: secs.toString().padStart(2, "0") }

  }

  const { hours, minutes, seconds } = formatTime(time)


  return (
    <>
      <div className="w-full flex flex-col justify-between items-center border border-white">
        <div className="w-full p-4 flex justify-center items-center gap-6">
          <p className="text-xs"> {hours} hours {minutes} mins {seconds} secs</p>
          {/* <progress value={progress} max="100" className="h-10 w-2/3 border rounded-xl overflow-hidden"></progress> */}
          <div className="h-10 w-2/3 border rounded-xl overflow-hidden bg-white">
            <div className="flex items-center justify-center h-64  transition-width transition-slowest ease bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x" style={{ width: `${progress}%` }}>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-row items-center justify-between">
          {
            !clockedIn
              ?
              <button onClick={clockIn} className='bg-transparent hover:bg-blue-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Clock In</button>
              :
              <button onClick={clockOut} className='bg-transparent hover:bg-blue-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Clock Out</button>
          }
          {
            paused
              ?
              <button onClick={unpause} className='bg-transparent hover:bg-blue-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Unpause</button>
              :
              <button onClick={pauseTimer} className='bg-transparent hover:bg-blue-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Pause</button>
          }
        </div>
      </div>
    </>
  )
}
