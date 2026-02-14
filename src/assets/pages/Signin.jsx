import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    dob: ""
  });

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !user.username ||
      !user.password ||
      !user.phone ||
      !user.email ||
      !user.dob
    ) {
      alert("Please fill all signup fields");
      return;
    }

  
    const oldUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists=oldUsers.some(
      (u) =>u.email === user.email
    );
    if (emailExists) {
    alert("This email ID is already registered. Please use another email.");
    return;
  }

    
    oldUsers.push(user);


    localStorage.setItem("users", JSON.stringify(oldUsers));

    alert("Signup successful");

    
    navigate("/");
  };

  return (
    <form onSubmit={handleSignup} className="sign-form">
      <h2>Signup</h2>

      <input
        placeholder="Username"
        onChange={e => setUser({ ...user, username: e.target.value })}
      /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setUser({ ...user, password: e.target.value })}
      /><br />

      <input
        placeholder="Phone"
        onChange={e => setUser({ ...user, phone: e.target.value })}
      /><br />

      <input
        placeholder="Email"
        onChange={e => setUser({ ...user, email: e.target.value })}
      /><br />

      <input
        type="date"
        onChange={e => setUser({ ...user, dob: e.target.value })}
      /><br />

      <button type="submit">Signup</button>
    </form>
  );
}
