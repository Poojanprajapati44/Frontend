import React from "react";

const Secondlist = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" }
  ];

  return (
    <div>
      <h3>User List</h3>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id} className="text-lg">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Secondlist;
