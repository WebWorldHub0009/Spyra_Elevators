import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import ServicesPage from "./Pages/ServicesPage"
import SingleServicePage from "./Pages/SingleServicePage"

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/services/:id" element={<SingleServicePage />} />
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
