import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const username = (e) => {
    return sessionStorage.setItem("user", JSON.stringify(e.target.value));
  };

  const setUser = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", { username });
    navigate(-1);
  };

  return (
    <div className="login">
      <div className="login-div">
        <h1>Login</h1>
        <form action={setUser}>
          <input
            type="text"
            placeholder="Enter a Username"
            onChange={(e) => username(e)}
            required
          />
          <br />
          <input type="password" placeholder="Enter a Password" required/>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
