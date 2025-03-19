import React, { useState, useEffect } from "react";

const API_URL = "https://api.escuelajs.co/api/v1/locations"; 

const Spiner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="spinner">Loading...</div>; // Display loading spinner
  }

  if (error) {
    return <div className="error">Error: {error}</div>; // Show error message
  }

  return (
    <div>
      <h2>Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default Spiner;
