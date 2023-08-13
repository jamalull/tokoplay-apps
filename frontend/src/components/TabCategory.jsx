import React from 'react'

function TabCategory() {
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">Tab</label>

          <select id="Tab" className="w-full rounded-md border-gray-200">
            {/* <option select>Live</option> */}
            <option>Live</option>
            <option>Explore</option>
            <option>Terbaru</option>
            <option>Upcoming</option>
            <option>Promo Terbatas!</option>
            <option>Official Store</option>
            <option>Tips & Rekomendasi</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="flex gap-2 overflow-x-scroll no-scrollbar py-1 pl-1" aria-label="Tabs">
            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 bg-green-500/50 hover:bg-green-500/50 hover:text-white border border-green-500"
            >
              Live
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Explore
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Terbaru
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Upcoming
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Promo Terbatas!
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Official Store
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Tips & Rekomendasi
            </a>

            <a
              href="#"
              className="shrink-0 rounded-2xl px-4 p-2 text-sm font-medium text-white/75 hover:bg-green-500/50 hover:text-white border border-white/40"
            >
              Notifications
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default TabCategory