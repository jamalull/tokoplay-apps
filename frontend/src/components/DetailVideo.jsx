import React, { useContext } from 'react'
import NavbarChannel from "./NavbarChannel"
import VideoList from "./VideoList"
import ProductList from "./ProductList"
import CommentList from "./CommentList"
import { GlobalContext } from "../context/GlobalContext"

function DetailVideo(props) {
  const { state } = useContext(GlobalContext);
  const { dataVideo } = state;

  return (
    <>
      <NavbarChannel/>

      <article
        className="videocard-channel mx-10 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        {dataVideo !== null && 
          dataVideo.map((res, index) => {
            if(res.videoId == props.videoId){
              return(
                <iframe key={index} className="absolute inset-0 h-full w-full object-cover"
                        width="560" height="315" src={res.video} title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
              )
            }
          })
        }
      </article>

      <div className="flex overflow-x-scroll gap-2  product-field mx-10 mt-8">
        <ProductList videoId = {props.videoId}/>
      </div>

      <CommentList videoId = {props.videoId}/>

      <div className="mt-16">
        <p className="font-bold mb-6">Explorasi video lainnya</p>
        <VideoList/>
      </div>
    </>
  )
}

export default DetailVideo