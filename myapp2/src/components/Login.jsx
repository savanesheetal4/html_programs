import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
  if (username === "" || password === "") {
    setErrorMessage("Please enter username & password");
  }
  if (username === "demo" || password === "12345") {
    console.log("Login Successfully!");
  } else {
    setErrorMessage("Invalid username and password");
  }
}
return (
    <div>
      <h4>Welcome to Login Page</h4>{/*mention entire login page */}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" value={username} onChange={handleUserNameChange}></input>
          <br></br>
          <br></br>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
          <br />
          <br />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;