'use client'
import React from 'react'
import { useState, useEffect } from 'react'

export default function ProgressBar() {


    const [time, setTime] = useState(0)
    const [isRunning, setRunning] = useState(false)
    const [progress, setProgress] = useState(0);

    const totalDuration = 4 * 60 * 60; // 4 hours in seconds

    useEffect(() => {
        let timer;
        if (isRunning){
        timer = setInterval(() => {
            setTime((current) => current + 1)
            setProgress((time / totalDuration) * 100);
        }, 1000)
        }

    return () => clearInterval(timer)
    }, [isRunning, time, totalDuration])

    const startTimer = () => {
        setRunning(true)
      }
    
      const pauseTimer = () => {
        setRunning(false)
      }
    
      const resetTimer = () => {
        setRunning(false)
        setTime(0)
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
        
        <div class="w-full flex flex-col justify-between items-center border border-white">
          <div className="timer" class="w-full p-4 flex justify-center items-center gap-6">
            <p class="text-xs"> {hours} hours {minutes} mins {seconds} secs</p>
            <progress value={progress} max="100" class="h-10 w-2/3 border rounded-xl overflow-hidden"></progress>
          </div>
          <div className="buttons" class="w-1/2 flex flex-row items-center justify-between">
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>

        </>
    )
}
