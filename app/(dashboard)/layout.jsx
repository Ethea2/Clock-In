import React from 'react'
import Navbar from '../components/Navbar'

export default function DashboardLayout({children}) {
  return (
    <>
        <div className="w-screen h-screen flex flex-row gap-4 items-center justify-between px-8">
            {/* <div className="h-4/5 w-1/12 border border-white">
                <Navbar/>
            </div> */}
            <div className="border border-white flex flex-auto h-4/5">
                {children}
            </div>
        </div>
        
    </>
  )
}
