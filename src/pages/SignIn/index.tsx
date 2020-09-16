import React from "react";

import { singIn } from "../../sevices/auth";

import "./index.css";

const SignIn: React.FC = () => {
  async function handleSingIn() {
    const response = await singIn();
    console.log(response);
  }
  return (
    <div className="SignIn">
      <h1>SignIn</h1>
      <button onClick={handleSingIn}>Login</button>
    </div>
  );
};

export default SignIn;
