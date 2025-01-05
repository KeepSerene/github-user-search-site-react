import "./UserProfile.css";

// Helper import
import { USER_SOCIAL_ICONS } from "../../utils/constants";

function UserProfile() {
  return (
    <div className="user-profile | wrapper">
      <div className="profile-header">
        <img src="/reddit-avatar.png" alt="User avatar" className="avatar" />

        <section className="profile-info">
          <h2 className="username">The octocat</h2>

          <a href="#" className="mention">
            @octocat
          </a>

          <p className="user-join-date">Joined 25 jan 2011</p>
        </section>
      </div>

      <div className="profile-body">
        <p className="bio">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          adipisci, nesciunt illo ipsum laboriosam mollitia?
        </p>

        <div className="profile-stats">
          <div className="profile-stat">
            <p className="stat-label">Repos</p>
            <p className="stat-value">8</p>
          </div>

          <div className="profile-stat">
            <p className="stat-label">Followers</p>
            <p className="stat-value">6195</p>
          </div>

          <div className="profile-stat">
            <p className="stat-label">Following</p>
            <p className="stat-value">9</p>
          </div>
        </div>
      </div>

      <ul role="list" className="profile-socials">
        {USER_SOCIAL_ICONS.map((icon, index) => (
          <li key={index} className={`profile-social | social${index + 1}`}>
            {icon}

            <span className="social-info">Hello</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
