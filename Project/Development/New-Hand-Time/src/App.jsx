import { BrowserRouter, Route, Routes } from "react-router"
import { useState } from "react"
import About from "./Component/About"
import Contacform from "./Component/Contactform"
import Footer from "./Component/Footer"
import HomePage from "./Component/HomePage"
import Navbar from "./Component/Navbar"
import Service from "./Component/Service"   
import WatchCollection from "./Component/Watchcollection"
import Home from "./Home"
import Loginpage from "./Component/Loginpage"


const App =()=> {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Watches" element={<WatchCollection cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/" element={ <Loginpage/>}/>
        </Routes>
        <Footer />
       
      </BrowserRouter>
      
    </div>
  )
}

export default App
