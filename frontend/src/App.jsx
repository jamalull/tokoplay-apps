import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home" 
import Channel from "./pages/Channel"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="channel" element={<Channel/>}/>
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
