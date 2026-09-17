import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { username } = useParams();
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <div className="profile-card">
        <h2>Account Information</h2>

        <p>
          <strong>Username:</strong> {username || user?.username}
        </p>
      </div>
    </div>
  );
}

export default Profile;