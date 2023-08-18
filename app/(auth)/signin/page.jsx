'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'

export default function Home() {
  const login = () => {
    localStorage.removeItem('time')
    signIn('google', { callbackUrl: '/' })
  }

  const svgVariants = {
    hidden: {
      rotate: -180
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1
      }
    }
  }

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className='flex justify-center'>
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256px" height="256px">
          <linearGradient id="4kXag7aWDZG56P3e36kb0a" x1="48" x2="48" y1="29.833" y2="35.539" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
            <stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <motion.path variants={pathVariants} fill="url(#4kXag7aWDZG56P3e36kb0a)" d="M53.91,30c-0.47,2.84-2.94,5-5.91,5c-2.97,0-5.44-2.16-5.91-5H53.91z" />
          <linearGradient id="4kXag7aWDZG56P3e36kb0b" x1="21" x2="21" y1="22.833" y2="37.504" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
            <stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <motion.path variants={pathVariants} fill="url(#4kXag7aWDZG56P3e36kb0b)" d="M28,23v10c-2.21,0-4,1.79-4,4H14C14,29.27,20.27,23,28,23z" />
          <linearGradient id="4kXag7aWDZG56P3e36kb0c" x1="32" x2="32" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
            <stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient>
          <motion.path variants={pathVariants} fill="url(#4kXag7aWDZG56P3e36kb0c)" d="M58,29c1.103,0,2-0.897,2-2v-2c0-1.103-0.897-2-2-2H47.483C42.972,16.732,35.734,13,28,13 C14.767,13,4,23.767,4,37s10.767,24,24,24c6.837,0,13.322-2.914,17.878-8H58c1.103,0,2-0.897,2-2v-2c0-1.103-0.897-2-2-2 c0-3.962-2.321-7.382-5.67-9C55.679,36.382,58,32.962,58,29z M58,27H38v-2h20V27z M36,49v2c0,0.686,0.348,1.293,0.876,1.653 C34.185,54.188,31.163,55,28,55c-9.587,0-17.426-7.541-17.949-17h13.05c0.465,2.279,2.484,4,4.899,4c2.757,0,5-2.243,5-5 c0-2.414-1.721-4.434-4-4.899V19.05c3.806,0.206,7.359,1.574,10.287,3.95H38c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2 c0,3.962,2.322,7.382,5.67,9C40.322,39.618,38,43.038,38,47C36.897,47,36,47.897,36,49z M28,34c1.654,0,3,1.346,3,3s-1.346,3-3,3 s-3-1.346-3-3S26.346,34,28,34z M27,32.101C25.044,32.5,23.5,34.044,23.101,36h-13.05C10.556,26.874,17.874,19.556,27,19.051V32.101 z M28,59C15.869,59,6,49.131,6,37s9.869-22,22-22c6.594,0,12.795,2.963,16.958,8h-2.701C38.512,19.19,33.35,17,28,17 C16.972,17,8,25.972,8,37s8.972,20,20,20c4.372,0,8.504-1.389,11.983-4h3.113C39.03,56.836,33.645,59,28,59z M58,51H38v-2h20V51z M56,47H40c0-4.072,3.06-7.436,7-7.931V41h2v-1.931C52.94,39.564,56,42.928,56,47z M49,36.931V35h-2v1.931 c-3.94-0.495-7-3.859-7-7.931h16C56,33.072,52.94,36.436,49,36.931z" /><linearGradient id="4kXag7aWDZG56P3e36kb0d" x1="45" x2="45" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <motion.path variants={pathVariants} fill="url(#4kXag7aWDZG56P3e36kb0d)" d="M49.949 17.536L41.465 9.05 40.051 10.464 48.535 18.95z" /><linearGradient id="4kXag7aWDZG56P3e36kb0e" x1="11" x2="11" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient>
          <motion.path variants={pathVariants} fill="url(#4kXag7aWDZG56P3e36kb0e)" d="M15.949 10.464L14.535 9.05 6.051 17.536 7.465 18.95z" />
          <linearGradient id="4kXag7aWDZG56P3e36kb0f" x1="28" x2="28" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
            <stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <motion.path variants={pathVariants} fill="url(#4kXag7aWDZG56P3e36kb0f)" d="M28,11c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S25.794,11,28,11z M28,5 c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S26.897,5,28,5z" />
        </motion.svg>
        <p className='text-9xl bg-gradient-to-b from-[#A0505C] to-[#693052] bg-clip-text text-transparent'>CLOCK IN</p>
      </div>
      <button onClick={() => login()} type="button" className="w-1/4 p-6 text-white  bg-gradient-to-b from-[#A0505C] to-[#693052] ease-in duration-100 hover:opacity-70 font-medium rounded-lg text-md text-center inline-flex items-center justify-center gap-2">
        <div className="icon">
          <motion.svg
            className="w-6 h-6"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            initial="hidden"
            animate="visible"
            variants={svgVariants}>
            <motion.path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              variants={pathVariants}
            >
            </motion.path>
          </motion.svg>
        </div>
        <div className="text">
          <p>Sign in with Google</p>
        </div>
      </button>
      {/* <p><small>No account? <Link href="/signup" className='text-emerald-300'>Sign-up</Link></small></p> */}
    </main>
  )
}
