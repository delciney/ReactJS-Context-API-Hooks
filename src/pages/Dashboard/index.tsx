import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";
import "./index.css";
const Dashboard: React.FC = () => {
  const { singOut } = useContext(AuthContext);
  function handleSingOut() {
    singOut();
  }
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <button onClick={handleSingOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
