import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Simulate fetching data from an API or JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Replace with your JSON URL if different
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run this effect once on component mount

  return (
    <div style={{ margin: "20px auto", width: "400px", textAlign: "center" }}>
      <h1>User List</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : users.length > 0 ? (
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.username}</strong> - {user.name}
            </li>
          ))}
        </ol>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
