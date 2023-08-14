'use client'
import React from 'react'

export default function Navbar() {
    return (
        <>
<<<<<<< HEAD
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>
                                {/* <!--
                        Icon when menu is closed.

                        Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* <!--
                        Icon when menu is open.

                        Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            {session?.user?.name}
                            {
                                status === 'authenticated' &&
                                <Image src={session?.user?.image} width={35} height={20} className='rounded-lg' />
                            }
                            <div class="relative flex flex-col ml-3">
                                {/* <div>
                                    <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="absolute -inset-1.5"></span>
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div> */}

                                <div>
                                    {
                                        status === 'authenticated' ?
                                            (
                                                <button
                                                    onClick={() => signOut({ callbackUrl: '/' })}
                                                    className='bg-slate-900 text-white rounded-md px-6 py-2'>
                                                    Sign Out
                                                </button>
                                            )
                                            :
                                            (
                                                <button
                                                    onClick={() => signIn('google', { callbackUrl: '/homepage' })}
                                                    className='bg-slate-900 text-white rounded-md px-6 py-2'>
                                                    Sign In
                                                </button>
                                            )
                                    }
                                </div>
                                {/* 
                        <!--
                        Dropdown menu, show/hide based on menu state.

                        Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
          --> */}
                                {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                     <!-- Active: "bg-gray-100", Not Active: "" --> 
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                                </div> */}
                            </div>
                        </div>
=======
            <nav class="w-full h-full p-4 bg-gradient-to-r from-[#A0505C] to-[#693052] rounded-xl">
                <div className="nav-links" class="flex flex-col items-center border border-white h-full justify-evenly">
                    <div className="user-page">
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
>>>>>>> b6c1901cc3698557ddf2e6197cc3441ef14a3416
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
