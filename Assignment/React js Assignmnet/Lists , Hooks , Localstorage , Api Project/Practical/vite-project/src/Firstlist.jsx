import React from "react";

const Firstlist = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Grapes"];

  return (
    <div>
      <h3>Fruit List</h3>
      <ul className="list-disc pl-5">
        {fruits.map((fruit, index) => (
          <li key={index} className="text-lg">{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Firstlist;