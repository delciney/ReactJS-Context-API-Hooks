import React from "react";
import { useAuth } from "../../contexts/auth";
import "./index.css";
const Dashboard: React.FC = () => {
  const { singOut, user } = useAuth();
  function handleSingOut() {
    singOut();
  }
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <p>{user?.name}</p>
      <button onClick={handleSingOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
