import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home" 
import Channel from "./pages/Channel"
import { GlobalProvider } from "./context/GlobalContext"

function App() {

  return (
    <>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="channel/:videoId" element={<Channel/>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
    </> 
  )
}

export default App
