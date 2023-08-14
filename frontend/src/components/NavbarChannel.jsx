import React from 'react'
import { Link } from "react-router-dom"

function NavbarChannel() {
  return (
    <>
      <div className="navbar-channel flex gap-2 mb-4">
        <Link to={"/"}>
          <svg fill="none" viewBox="0 0 15 15" height="24" width="24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <p className="title flex-1 font-semibold">Edisi Cuci Gudang, Harga Hancur-hancuran. Termurah se-Tokopedia !!!</p>

        <span className="flex items-center gap-2 mr-10">
          <img
            alt="Man"
            src="https://images.tokopedia.net/img/cache/850/BgtCLw/2022/5/9/4eb9a3c5-36e2-4207-9f2c-acb5100cad2d.jpg?ect=4g"
            className="h-8 w-8 rounded-full object-cover"
          />
          <p className="title flex-1 font-semibold">Kimboy Store</p>

          <a
              href="#"
              className="shrink-0 rounded-lg px-2 py-0.5 text-sm font-medium text-white hover:bg-green-500/50 hover:text-white border border-white"
            >
              Follow
            </a>

        </span>
      </div>
    </>
  )
}

export default NavbarChannel