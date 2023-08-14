import React from 'react'
import ProgressBar from '../components/ProgressBar'

export default function Homepage() {
  return (
    <>
    
    <div className="container">
        <div className="header" class="p-4 flex gap-4">
          <div className="profile" class="p-4 border border-white bg-gradient-to-b from-[#A0505C] to-[#693052] flex items-center gap-4 px-10 rounded-3xl">
            <div className="user-icon" class="border-2 border-white rounded-full overflow-hidden">
              <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
            <div className="user-information" class="flex flex-col gap-2">
              <h2 class="text-3xl font-bold">Patty Arao</h2>
              <p class="text-xs font-light underline">patriciaarao1115@gmail.com</p>
            </div>
          </div>

          <div className="progress-bar" class="p-4 border border-white bg-gradient-to-b from-gray-500 to-gray-700 flex items-center gap-4 px-10 rounded-3xl flex-auto">
            <ProgressBar/>
          </div>
        </div>

        <div className="calendar" class="border border-white">
          <p>calendar</p>
        </div>
    </div>
    
    </>
  )
}
