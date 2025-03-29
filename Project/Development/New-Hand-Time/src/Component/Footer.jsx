import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10 md:px-20 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div>
          <h2 className="text-xl font-bold">
          <svg width="170" height="70" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" fill="none">
  <circle cx="50" cy="50" r="30" stroke="black" stroke-width="4" fill="white"/>
  <line x1="50" y1="50" x2="50" y2="30" stroke="black" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="65" y2="50" stroke="black" stroke-width="3" stroke-linecap="round"/>
  
  <text x="100" y="60" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white">
    WatchLux
  </text>
</svg>
            </h2>
          <p className="text-gray-400 text-sm">American Logo Watch</p>
          <p className="text-gray-600 text-xs mt-10">All rights reserved 2018</p>
        </div>

        {/* Menu Section */}
        <div className="flex justify-center space-x-10">
          <div>
            <h3 className="font-bold text-sm">MENU</h3>
            <ul className="mt-3 space-y-2 text-gray-400 text-sm">
              <li>SHOP</li>
              <li>SERVICES</li>
              <li>FAQS</li>
            </ul>
          </div>
          <div>
            <ul className="mt-10 space-y-2 text-gray-400 text-sm">
              <li>CONTACT US</li>
              <li>MY ACCOUNT</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-sm">SIGN UP FOR OUR NEWSLETTER</h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 bg-black border border-gray-500 text-white flex-grow outline-none"
            />
            <button className="bg-[#c89c8a] px-5 py-2 text-black text-sm">SEND</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

