import React from 'react'

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className='flex flex-col gap-4'>
        <input type="email" className='border-2 border-emerald-600'/>
        <input type="text" className='border-2 border-emerald-600'/>
        <input type="password" className='border-2 border-emerald-600'/>
        <button>Signup</button>
      </form>
    </main>
  )
}
