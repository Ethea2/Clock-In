import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import moment from 'moment/moment'

export default function ClockInCalendar() {
  const [date, setDate] = useState(new Date())
  const { status, data: session, loading } = useSession()
  const [dates, setDates] = useState([])
  const router = useRouter()
  useEffect(() => {
    if (!loading) {
      const fetchData = async () => {
        const res = await fetch('http://localhost:3000/api/time/' + session?.user?.email)
          .then((res) => res.json())
          .then((data) => {
            data.times.map((day) => {
              console.log('called')
              setDates((old) => [...old, day.date])
            })
          })
          .catch((e) => toast(e))
      }
      fetchData()
    }
  }, [session]) //figure out highlighting.
  return (
    <div>
      <Calendar onChange={setDate} value={date}
        tileClassName={({ date, view }) => {
          if (dates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
            return 'text-emerald-300'
          }
        }} />
      <button onClick={() => console.log(dates)}>hello</button>
    </div>
  )
}
