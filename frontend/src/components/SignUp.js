import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const collectData = () => {
    console.warn(name, email, password);
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="email"
        value={email}
        placeholder="enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" className="appButton" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
