import React, { useState } from 'react';

const Statetask = () => {
  // Initialize state to keep track of count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Statetask ;
