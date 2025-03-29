import React from 'react'
import{useState} from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  }

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  return (
    <div>
        <div className="bg-black text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-screen bg-black text-white flex flex-col justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2168277.jpg')" }}></div>
        <div className="relative z-10 p-6 bg-black bg-opacity-10 rouded-lg w-[50%]">
          <h1 className="text-4xl md:text-6xl font-serif">A LEGACY OF LUXURY ON YOUR WRIST</h1>
          <div className="mt-6 flex gap-4">
            <Link to="/Watches" className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">EXPLORE WATCHES</Link>
            <a href='#About-us' className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">About Us</a>
          </div>
        </div>
      </div>

        </div>
      </div>
   
  )
}

export default HomePage