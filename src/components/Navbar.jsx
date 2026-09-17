import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/">Home</Link>

      {!user && <Link to="/login">Login</Link>}

      {user && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to={`/profile/${user.username}`}>Profile</Link>
          <Link to="/settings">Settings</Link>

          <button onClick={logout}>Logout</button>
        </>
      )}

      <button onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;