import React, { useState } from 'react'
import TabCategory from "./TabCategory"

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false)
  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <>
      <header className="bg-[#242424] mb-2 sticky top-0 z-10">

        <div className="px-2 py-4 sm:px-2 lg:px-2" x-data="{ isActive: false }">
          <div className="flex items-center sm:justify-between sm:gap-4">

          <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <span className="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://st3.depositphotos.com/3096625/17456/v/600/depositphotos_174563426-stock-illustration-letters-tp-logo-initials-minimal.jpg"
                className="h-12 w-12 rounded-full object-cover"
              />

              <p className="ms-2 hidden text-left sm:block">
                <strong className="block font-semibold">TokoPlay</strong>
              </p>
            </button>

            <div
              className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
            >
              <div className="flex gap-4">
                <button
                  type="button"
                  className="block shrink-0 rounded-lg bg-[#2e2d2d] p-2.5 text-white shadow-sm hover:text-gray-700 sm:hidden"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                <a
                  href="#"
                  className="block shrink-0 rounded-lg bg-[#2e2d2d] p-2.5 text-white shadow-sm hover:bg-green-500/50"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
              </div>

              <div className="relative hidden sm:block">
                <label className="sr-only" htmlFor="search"> Search </label>

                <input
                  className="h-10 w-full rounded-lg border-none bg-[#2e2d2d] pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search video..."
                />

                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-[#2e2d2d] p-2 text-white transition hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                onClick={handleDropdown}
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <span className="sr-only">Menu</span>
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <p className="ms-2 hidden text-left text-xs sm:block">
                  <strong className="block font-medium">Jamalul Ikhsan</strong>

                  <span className="text-gray-500"> jamalul@ikhsan.com </span>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showDropdown > 0 &&
              <div
                className="absolute end-0 z-10 mt-64 w-52 divide-y divide-gray-600 rounded-md border border-gray-600 bg-[#2e2d2d] shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-slate-300 hover:text-gray-700"
                    role="menuitem"
                  >
                    My Account Profle
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-slate-300 hover:text-gray-700"
                    role="menuitem"
                  >
                    Edit Profile
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-slate-300 hover:text-gray-700"
                    role="menuitem"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-slate-300 hover:text-gray-700"
                    role="menuitem"
                  >
                    Help
                  </a>
                </div>

                <div className="p-2">
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-500 hover:bg-slate-300"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>

                      Logout Now
                    </button>
                  </form>
                </div>
              </div>
              }

            </div>
          </div>

          <div className="mt-4">
            <TabCategory/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar