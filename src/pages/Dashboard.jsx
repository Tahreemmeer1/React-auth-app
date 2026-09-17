import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <p className="dashboard-welcome">
        Welcome, {user?.username}!
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Profile</h2>
          <p>View and manage your profile information.</p>
        </div>

        <div className="dashboard-card">
          <h2>Settings</h2>
          <p>Customize your application preferences.</p>
        </div>

        <div className="dashboard-card">
          <h2>Account</h2>
          <p>Your account is currently active.</p>
        </div>
      </div>
      <Link to="details">View Dashboard Details</Link>

      <Outlet />
    </div>
  );
}

export default Dashboard;