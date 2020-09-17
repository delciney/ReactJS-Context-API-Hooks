import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

import "./index.css";

const SignIn: React.FC = () => {
  const { signed, singIn } = useContext(AuthContext);
  function handleSingIn() {
    singIn();
  }
  return (
    <div className="SignIn">
      <h1>SignIn</h1>
      <button onClick={handleSingIn}>Login</button>
    </div>
  );
};

export default SignIn;
