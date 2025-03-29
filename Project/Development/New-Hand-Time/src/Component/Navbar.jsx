import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems = [], setCartItems }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to close the mobile menu when a link is clicked
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Function to increase quantity
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Function to decrease quantity
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ));
    };

    // Function to remove an item from cart
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        alert("Proceeding to Checkout!");
        setCartItems([]);
    };

    // Calculate total price
    const totalPrice = cartItems?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

    return (
        <nav className="flex justify-between items-center px-10 py-2 border-b border-gray-700">
            <div className="text-xl font-bold"><svg width="160" height="60" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="50" cy="50" r="30" stroke="black" stroke-width="4" fill="none"/>
  <line x1="50" y1="50" x2="50" y2="35" stroke="black" stroke-width="4"/>
  <line x1="50" y1="50" x2="65" y2="50" stroke="black" stroke-width="4"/>
  <circle cx="50" cy="50" r="3" fill="black"/>
  

  <text x="90" y="60" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="black">
    WatchLux
  </text>
</svg>
</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 text-sm uppercase font-BOLD">
                <Link to="/Home" className="hover:text-gray-400">HOME</Link>
                <Link to="/watches" className="hover:text-gray-400">WATCHES</Link>
                <a href="#services" className="hover:text-gray-400">SERVICES</a>
                <a href="#About-us" className="hover:text-gray-400">ABOUT US</a>
                <a href="#contactform" className="hover:text-gray-400">CONTACT US</a>
            </div>

            {/* User and Cart Icons */}
            <div className="hidden md:flex space-x-4">
                <Link to="/"><FaUser className="cursor-pointer" /></Link>
                <div className="relative cursor-pointer" onClick={toggleCart}>
                    <FaCartShopping />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                    )}
                </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
                ☰
            </div>

            {/* Mobile Menu - Conditional Rendering */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full absolute top-0 left-0 bg-white p-6 shadow-md z-10 transition-transform ease-in-out duration-300">
                    {/* Close Button */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-black">Menu</h2>
                        <button className="text-2xl font-bold text-red-700" onClick={toggleMobileMenu}>
                            ✖
                        </button>
                    </div>
                    <ul className="space-y-6 text-black font-medium">
                        <li><Link to="/" className="hover:text-purple-700" onClick={closeMobileMenu}>HOME</Link></li>
                        <li><Link to="/watches" className="hover:text-purple-700" onClick={closeMobileMenu}>WATCHES</Link></li>
                        <li><a href="#services" className="hover:text-purple-700" onClick={closeMobileMenu}>SERVICES</a></li>
                        <li><a href="#About-us" className="hover:text-purple-700" onClick={closeMobileMenu}>ABOUT US</a></li>
                        <li><a href="#contactform" className="hover:text-purple-700" onClick={closeMobileMenu}>CONTACT US</a></li>
                    </ul>
                </div>
            )}

            {/* Shopping Cart Panel */}
            <div className={`fixed top-0 right-0 w-[400px] h-full bg-white p-6 shadow-lg transform ${isCartOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300 z-50`}>
                <div className="flex justify-between items-center text-red-700">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button className="text-xl font-bold text-black" onClick={toggleCart}>X</button>
                </div>
                
                {cartItems.length === 0 ? (
                    <p className="text-xl text-black font-bold mt-4">Your cart is empty</p>
                ) : (
                    <div className="mt-4 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <h3 className="font-bold text-black">{item.name}</h3>
                                    <p className="text-gray-700">${item.price} x {item.quantity}</p>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 px-2 rounded">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 px-2 rounded">+</button>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                            </div>
                        ))}
                        <h3 className="font-bold text-black text-lg mt-4">Total: ${totalPrice}</h3>
                    </div>
                )}
                {cartItems.length > 0 && (
                    <button
                        onClick={handleCheckout}
                        className="mt-6 w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    >
                        Checkout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
