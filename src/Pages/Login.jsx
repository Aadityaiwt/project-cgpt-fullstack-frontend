import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async () => {
  try {
    const res = await API.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);
    console.log(res.data);

    navigate("/dashboard");
  } catch (error) {
    console.log(error.response?.data); // ?? real error yaha milega
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;