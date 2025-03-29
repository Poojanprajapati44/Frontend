import React, { createContext, useContext, useState } from "react";

const ChecklistContext = createContext();

export const ChecklistProvider = ({ children }) => {
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  return (
    <ChecklistContext.Provider value={{ isCitizen, setIsCitizen, isOver21, setIsOver21 }}>
      {children}
    </ChecklistContext.Provider>
  );
};

// Checklist Component
const Checklist = () => {
  const { isCitizen, setIsCitizen, isOver21, setIsOver21 } = useContext(ChecklistContext);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-lg font-bold">Are you a Citizen : {isCitizen ? "Yes" : "No"}</h2>
      <h2 className="text-lg font-bold mb-3">Are you over 21 : {isOver21 ? "Yes" : "No"}</h2>
      
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={isCitizen}
          onChange={() => setIsCitizen(!isCitizen)}
          className="mr-2"
        />
        Are you a Citizen?
      </label>
      
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={isOver21}
          onChange={() => setIsOver21(!isOver21)}
          className="mr-2"
        />
        Are you over 21?
      </label>
    </div>
  );
};

export default Checklist;
