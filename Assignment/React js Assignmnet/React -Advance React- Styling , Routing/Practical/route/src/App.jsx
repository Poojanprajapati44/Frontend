import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home1'
import About from './About1'
import NavigationBar from './Navigation'
import Contact from './Contact1'

function App() {

  return (
    <>
      {/* <BrowserRouter>
      <List/>
        <Routes>
          <Route path='/' element={<Home />}></Route>

            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>

        </Routes>

      </BrowserRouter> */}
      <BrowserRouter>
    
        {/* <Navbar /> */}
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
