import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  //if local storage has value
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:6060/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please Enter Correct Details");
    }
  };

  return (
    <div className="login center-content">
      <h1>Login</h1>
      <input
        className="inputBox"
        type="text"
        placeholder=" Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder=" Enter Password "
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin} className="LoginBtn" type="button">
        {" "}
        Login
      </button>
    </div>
  );
};
export default Login;
