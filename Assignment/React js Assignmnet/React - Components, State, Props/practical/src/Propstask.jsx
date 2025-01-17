import React from 'react';
// import './App.css'; // Optional: To style the card (see below for example styles)
import './Propstask.css'


const Propstask = ({ name, age, location }) => {
  return (
    <div className="Propstask">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default Propstask;