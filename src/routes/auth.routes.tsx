import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
    </BrowserRouter>
  );
};

export default AuthRoutes;
