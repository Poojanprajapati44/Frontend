import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setMessage("❌ Fill the empty field.");
    } else {
      setMessage("✅ Your Details have been submitted.");
      setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <div id="contactform" className="flex justify-center items-center bg-black min-h-screen p-6">
      <div className="w-full max-w-2xl p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">CONTACT US</h2>

        {/* Message Display */}
        {message && (
          <p className={`text-center font-semibold ${message.includes("❌") ? "text-red-500" : "text-green-500"}`}>
            {message}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded shadow-md focus:outline-none"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded shadow-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded shadow-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded shadow-md focus:outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded shadow-md hover:bg-purple-700 transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
