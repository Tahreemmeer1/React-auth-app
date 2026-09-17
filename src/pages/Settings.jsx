import { useTheme } from "../contexts/ThemeContext";

function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <p>Manage your account settings here.</p>

      <div className="settings-section">
        <h2>Appearance</h2>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Settings;