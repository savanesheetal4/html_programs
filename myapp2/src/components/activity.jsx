import React, { useState, useEffect } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simulating user credentials check
    const validUserName = "Sheetal";
    const validPassword = "12345";

    if (userName === validUserName && password === validPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    // Clear error message when input changes
    setError("");
  }, [userName, password]);

  return (
    <div style={{ margin: "20px auto", textAlign: "center", width: "300px" }}>
      <h1>User Login</h1>
      {!isLoggedIn ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Username:{" "}
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Password:{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <h2>Welcome, {userName}!</h2>
      )}
    </div>
  );
};

export default LoginPage;
