import React, { useState } from 'react'
import Calendar from 'react-calendar'

export default function ClockInCalendar() {

    const [date, setDate] = useState(new Date())

  return (
    <div>
      <Calendar onChange={setDate} value={date}/>
    </div>
  )
}
