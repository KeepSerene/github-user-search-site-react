import "./UserProfile.css";

// Constant imports
import {
  PROFILE_SOCIAL_ICONS,
  PROFILE_STAT_LABELS,
} from "../../utils/constants";

// Context import
import { useAppContext } from "../AppProvider";

function UserProfile() {
  const { errorMsg, userInfo } = useAppContext();

  if (errorMsg) {
    return <div className="wrapper | msg error">{errorMsg}</div>;
  }

  if (!userInfo) {
    return (
      <div className="wrapper | msg">
        Search for a GitHub user by their username to view their profile
        information here!
      </div>
    );
  }

  const statValues = [userInfo.repos, userInfo.followers, userInfo.following];

  const socialInfo = [
    userInfo.location,
    userInfo.blog,
    userInfo.twitter,
    userInfo.company,
  ];

  return (
    <div className="user-profile | wrapper">
      <div className="profile-header">
        <img
          src={userInfo.avatarUrl}
          alt={`${userInfo.username}'s avatar`}
          className="avatar"
        />

        <section className="profile-info">
          <h2 className="name">{userInfo.name}</h2>

          <a
            href={`https://www.github.com/${userInfo.username}`}
            target="_blank"
            className="mention"
          >
            @{userInfo.username}
          </a>

          <p className="join-date">Joined on {userInfo.joinDate}</p>
        </section>
      </div>

      <div className="profile-body">
        <p className="bio">{userInfo.bio}</p>

        <ul role="list" className="profile-stats">
          {PROFILE_STAT_LABELS.map((statLabel, index) => (
            <li key={index} className="profile-stat">
              <span className="stat-label">{statLabel}</span>

              <span className="stat-value">{statValues[index]}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul role="list" className="profile-socials">
        {PROFILE_SOCIAL_ICONS.map((socialIcon, index) => (
          <li
            key={index}
            style={{
              color: socialInfo[index]
                ? ""
                : "hsla(var(--text-secondary) / 0.5)",
            }}
            className={`profile-social | social${index + 1}`}
          >
            {socialIcon}

            <span
              style={{ textTransform: index === 0 ? "capitalize" : "" }}
              className="social-info"
            >
              {socialInfo[index] ? socialInfo[index] : "Not Available"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
