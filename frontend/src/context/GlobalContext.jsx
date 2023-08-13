import axios from "axios";
import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

  const [dataVideo, setDataVideo] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("http://localhost:3000/api/video")
        .then((res) => {
          setDataVideo([...res.data]);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  let state = {
    dataVideo,
    setDataVideo,
    fetchStatus,
    setFetchStatus
  }

  let handlefunction = {

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
