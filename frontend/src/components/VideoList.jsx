import React, { useContext } from 'react'
// import dataVideoList from '../data/dataVideoList.json'
import VideoCard from "../components/VideoCard"
import { GlobalContext } from "../context/GlobalContext"

function VideoList() {
  const { state } = useContext(GlobalContext);
  const { dataVideo } = state;

  return (
    <>
    <div className="grid max-[560px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-4 pr-2">
      {/* Import from file */}
      {/* {console.log(dataVideoList)} */}
      {/* {dataVideoList.map((res, index)=> {
        return (
          <VideoCard key={index} id={index} thumbnail={res.thumbnail} name={res.altImage} />
        )
      })} */}
      
      {/* from API */}
      {dataVideo !== null && 
        dataVideo.map((res, index)=> {
        return (
          <VideoCard key={index} videoId={res.videoId} thumbnail={res.thumbnail} name={res.altImage} views ={res.views} />
        )
      })}
    </div>
    </>
  )
}

export default VideoList