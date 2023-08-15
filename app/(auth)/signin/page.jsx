'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function Home() {
  const login = () => {
    localStorage.removeItem('time')
    signIn('google', { callbackUrl: '/' })
  }
  return (
    <main className="flex min-h-screen items-center justify-center">
        <button onClick={() => login()} type="button" className="w-1/4 p-6 text-white  bg-gradient-to-b from-[#A0505C] to-[#693052] ease-in duration-100 hover:opacity-70 font-medium rounded-lg text-md text-center inline-flex items-center justify-center gap-2">
          <div className="icon">
            <svg className="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
          </div>
         <div className="text">
          <p>Sign in with Google</p>
         </div>
        </button>
      {/* <p><small>No account? <Link href="/signup" className='text-emerald-300'>Sign-up</Link></small></p> */}
    </main>
  )
}
