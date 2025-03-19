import { useEffect, useState } from "react";
import axios from "axios";

function Userstable() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(); 
  const [error, setError] = useState(); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        setUsers(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 

  return (
    <div>
      <h2>User List</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Userstable;
