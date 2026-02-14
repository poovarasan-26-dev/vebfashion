import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      alert("Please fill the signin page");
      return;
    }

    const validUser = users.find(
      u =>
        u.username === login.username &&
        u.password === login.password
    );

    if (validUser) {
      navigate("/Home");   
    } else {
      alert("Username or Password not match");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login">
      <h2>Login</h2>

      

      <input
        placeholder="Username"
        onChange={e => setLogin({ ...login, username: e.target.value })}
      /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setLogin({ ...login, password: e.target.value })}
      /><br />

      <button type="submit">Login</button>
    

      <p>
        No account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate("/signin")}
        >
          Sign in
        </span>
      </p>
    </form>
  );
}
