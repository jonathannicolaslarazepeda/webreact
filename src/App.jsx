import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/About/About"

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/comment" element={<Comment/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
