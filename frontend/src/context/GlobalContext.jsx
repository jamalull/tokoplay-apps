import axios from "axios";
import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

  const [dataVideo, setDataVideo] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [dataComment, setDataComment] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://tokoplay-backend.cyclic.cloud/api/video")
        .then((res) => {
          setDataVideo([...res.data]);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

        
      axios
        .get("https://tokoplay-backend.cyclic.cloud/api/product")
        .then((res) => {
          setDataProduct([...res.data]);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get("https://tokoplay-backend.cyclic.cloud/api/comment")
        .then((res) => {
          setDataComment([...res.data]);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });


    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  const [inputComment, setInputComment] = useState({
    videoId : "",
    username : "",
    comment : ""
  });

  const handleInputComment = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputComment({...inputComment, [name]: value });
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    let{
      videoId, username, comment
    } = inputComment;

    axios
      .post("https://tokoplay-backend.cyclic.cloud/api/comment",{ videoId, username, comment })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      });

    setInputComment({
      username : "",
      comment : ""
    });
  };


  let state = {
    dataVideo,
    setDataVideo,
    dataProduct,
    setDataProduct,
    dataComment,
    setDataComment,
    inputComment,
    setInputComment,
    fetchStatus,
    setFetchStatus
  }

  let handlefunction = {
    handleInputComment, 
    handleSubmitComment
  }


  return (
    <GlobalContext.Provider
      value={{
        state, handlefunction
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
