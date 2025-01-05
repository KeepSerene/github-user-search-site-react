// React imports
import { createContext, useContext, useState } from "react";

// Helper function import
import { getInitialTheme } from "../utils/theme";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);
  const [userInfo, setUserInfo] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleUsernameSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        `https://api.github.com/users/${username.trim()}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User Not Found!");
        }

        throw new Error("Failed to fetch user information!");
      }

      const data = await response.json();

      // Set user profile information
      setUserInfo({
        avatarUrl: data.avatar_url,
        name: data.name || data.login,
        username: data.login,
        joinDate: new Date(data.created_at).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        bio: data.bio || "This profile has no bio!",
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location,
        blog: data.blog,
        twitter: data.twitter,
        company: data.company,
      });

      setUsername("");
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        username,
        setUsername,
        isLoading,
        setIsLoading,
        errorMsg,
        handleUsernameSubmit,
        userInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
