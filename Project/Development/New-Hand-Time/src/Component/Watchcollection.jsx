import React, { useState } from "react";

const WatchCollection = ( {cartItems, setCartItems } ) => {
  const [activeCategory, setActiveCategory] = useState("latest");

  // Latest Watches (Added IDs)
  const latestWatches = [
    { id: 1, name: "DEFY Classic Titanium", price: 2300, image: "/watch-1.png" },
    { id: 2, name: "SEIKO SNZG07K1", price: 4700, image: "/watch-2.jpg" },
    { id: 3, name: "ROAMER RM 220837", price: 3800, image: "/watch-3.jpg" },
    { id: 4, name: "OMEGA SPEEDMASTER", price: 2400, image: "/watch-4.jpg" },
    { id: 5, name: "Tag Heuer Carrera", price: 2400, image: "/watch-5.jpg" },
    { id: 6, name: "Tag Heuer Carrera", price: 4200, image: "/watch-6.jpg!d" },
  ];

  // Popular Watches (Added IDs)
  const popularWatches = [
    { id: 7, name: "Breitling Navitimer", price: 1800, image: "/watch-7.jpg" },
    { id: 8, name: "Patek Philippe Nautilus", price: 2500, image: "/watch-8.jpg" },
    { id: 9, name: "Hublot Big Bang", price: 5850, image: "/watch-9.webp" },
    { id: 10, name: "Rolex Submariner", price: 2000, image: "/watch-10.jpg" },
    { id: 11, name: "Audemars Piguet Royal Oak", price: 3500, image: "/watch-11.avif" },
    { id: 12, name: "Audemars Piguet Royal Oak", price: 4600, image: "/watch-12.jpg" },
  ];

  // Select the active watch category
  const watches = activeCategory === "latest" ? latestWatches : popularWatches;

  const addToCart = (watch) => {
    if (!setCartItems) {
      console.error("setCartItems is undefined");
      return;
    }

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === watch.id);

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...watch, quantity: 1, image: watch.image}];
      }
    });
  
  };
  

  return (
    <div className="bg-black text-white py-16 px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">COLLECTIONS</h2>

      {/* Latest & Popular Tabs */}
      <div className="flex justify-center md:justify-start gap-6 text-sm uppercase mb-6">
        <span
          className={`pb-1 cursor-pointer ${activeCategory === "latest" ? "border-b-2 border-white" : "text-gray-400 hover:text-white"}`}
          onClick={() => setActiveCategory("latest")}
        >
          Latest
        </span>
        <span
          className={`pb-1 cursor-pointer ${activeCategory === "popular" ? "border-b-2 border-white" : "text-gray-400 hover:text-white"}`}
          onClick={() => setActiveCategory("popular")}
        >
          Popular
        </span>
      </div>

      {/* Watch Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {watches.map((watch) => (
          <div key={watch.id} className="border border-gray-700 p-6 rounded-lg flex flex-col items-center">
            <img src={watch.image} alt={watch.name} className="w-[70%] h-[220px] object-contain mx-auto" />
            <h3 className="mt-4 font-bold">{watch.name}</h3>
            <p className="text-gray-400 font-semibold">${watch.price}</p>
            <button
              onClick={() => addToCart(watch)}
              className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchCollection;
