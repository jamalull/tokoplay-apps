import React from 'react'
import dataVideoList from '../data/dataVideoList.json'
import VideoCard from "../components/VideoCard"

function VideoList() {
  return (
    <>
    <div className="grid max-[560px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-4 pr-2">
      {console.log(dataVideoList)}
      {dataVideoList.map((res, index)=> {
        return (
          <VideoCard id={index} thumbnail={res.thumbnail} name={res.altImage} />
        )
      })}
    </div>
    </>
  )
}

export default VideoList