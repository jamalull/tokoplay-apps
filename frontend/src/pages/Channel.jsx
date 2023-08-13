import React from 'react'
import DetailVideo from "../components/DetailVideo"
import { useParams } from "react-router-dom";

function Channel() {
  let {videoId} = useParams();
  
  return (
    <>
      <DetailVideo videoId = {videoId}/>
    </>
  )
}

export default Channel