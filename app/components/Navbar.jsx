'use client'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-full p-4 bg-gradient-to-r from-[#A0505C] to-[#693052] rounded-xl">
                <div className="flex flex-col items-center border border-white h-full justify-evenly">
                    <div className="user-page">
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                    <div className="teams-page">
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M16 19C16 15.6863 12.866 13 9 13C5.13401 13 2 15.6863 2 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5C13.8053 5 12.7329 5.52375 12 6.35418" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M22 19C22 15.6863 18.866 13 15 13C14.1928 13 12.897 12.7069 12 11.7655" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                    <div className="history">
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16V11M12 16V8M16 16V14M18 4L6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                </div>
            </nav>
        </>
    )
}
