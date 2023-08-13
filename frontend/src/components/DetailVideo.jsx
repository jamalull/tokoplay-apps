import React from 'react'
import NavbarChannel from "./NavbarChannel"
import VideoList from "./VideoList"
import ProductList from "./ProductList"

function DetailVideo(props) {
  return (
    <>
      <NavbarChannel/>

      <article
        className="videocard-channel mx-10 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        <iframe className="absolute inset-0 h-full w-full object-cover"
                width="560" height="315" src="https://www.youtube.com/embed/3y9SRQqgNuk" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        
        {/* <img
          alt="Office"
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        /> */}

        {/* <div className="relative bg-gradient-to-t from-gray-900/25 to-gray-900/30 pt-2 sm:pt-1 lg:pt-2 p-2">
          <span
            class="inline-flex mr-1 items-center justify-center rounded-md bg-red-500 px-2.5 py-[0.4px] text-white"
          >
            <p class="whitespace-nowrap font-medium">LIVE</p>
          </span>

          <span
            class="inline-flex mr-1 items-center justify-center rounded-md bg-[#2e2d2d80] px-2.5 py-0.5 text-white"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="15"
              width="15"
            >
              <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
            </svg>

            <p class="whitespace-nowrap text-sm ml-1">2000</p>
          </span>

        </div>

        <div
          className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 max-[640px]:pt-[430px] pt-[420px]"
        >
          <div className="p-2 sm:p-4">
            <time dateTime="2022-10-10" className="block text-xs text-white/90">
              10th Oct 2022
            </time>

            <p className="mt-2 font-semibold line-clamp-2 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
              sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
              voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
              Molestias explicabo corporis voluptatem?
            </p>
            
            <h3 className="text-sm mt-0.5 text-white">
              Kimbby Store
            </h3>
          </div>
        </div> */}
      </article>

      <div className="flex overflow-x-scroll gap-2  product-field mx-10 mt-8">
        <ProductList videoId = {props.videoId}/>
      </div>

      <div className="flex max-[900px]:flex-col gap-4 comment-field mx-10 mt-8">
        <div className="overflow-y-scroll comment-box h-44 rounded-lg border flex-grow p-2">
          {/* <p className="center">Comment Will be display in here ...</p> */}
          <ul>
            <li className="flex gap-2 ">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""  className="rounded-full mt-1" />
              <div>
                <p className="text-sm text-yellow-400">Profile Name</p>
                <p className="text-comment text-xs mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                </p>
              </div>
            </li>
            <li className="flex gap-2 ">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""  className="rounded-full mt-1" />
              <div>
                <p className="text-sm text-yellow-400">Profile Name</p>
                <p className="text-comment text-xs mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                </p>
              </div>
            </li>
            <li className="flex gap-2 ">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""  className="rounded-full mt-1" />
              <div>
                <p className="text-sm text-yellow-400">Profile Name</p>
                <p className="text-comment text-xs mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quos voluptatum consequuntur non suscipit ipsam?
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="lg:w-96 flex flex-col gap-2">
          <label
            for="Comment"
            class="relative mr-2 flex-1 block rounded-lg border border-gray-200 shadow-sm focus-within:border-green-500/50 focus-within:ring-1 focus-within:ring-green-500/50"
          >
            <input
              type="text"
              id="Comment"
              class="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Comment"
            />

            <span
              class="pointer-events-none absolute start-5 top-0 -translate-y-1/2 p-0.5 bg-[#242424] text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Type Your Username
            </span>
          </label>

          <label
            for="Comment"
            class="relative mt-2 mr-2 flex-1 block rounded-lg border border-gray-200 shadow-sm focus-within:border-green-500/50 focus-within:ring-1 focus-within:ring-green-500/50"
          >
            <input
              type="text"
              id="Comment"
              class="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Comment"
            />

            <span
              class="pointer-events-none absolute start-5 top-0 -translate-y-1/2 p-0.5 bg-[#242424] text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Comment Here
            </span>
          </label>

          <button className="bg-slate-500 hover:bg-slate-600 rounded-lg p-3">
            Send Comment
          </button>
        </div>
      </div>

      <div className="mt-16">
        <p className="font-bold mb-6">Explorasi video lainnya</p>
        <VideoList/>
      </div>
    </>
  )
}

export default DetailVideo