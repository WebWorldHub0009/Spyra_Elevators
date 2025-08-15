import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import Footer from "./Components/Footer"
import About from "./Pages/About"

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
