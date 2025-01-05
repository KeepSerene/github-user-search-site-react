import "./AppContent.css";

// Context import
import { useAppContext } from "../AppProvider";

// React import
import { useEffect } from "react";

// Helper import
import { STORAGE_KEY } from "../../utils/constants";

// Component imports
import Header from "../header/Header";
import SearchUserForm from "../searchUserForm/SearchUserForm";
import UserProfile from "../userProfile/UserProfile";

function AppContent() {
  const { isDarkTheme } = useAppContext();

  useEffect(
    () => localStorage.setItem(STORAGE_KEY, JSON.stringify(isDarkTheme)),
    [isDarkTheme]
  );

  return (
    <main className="app-content" data-theme={isDarkTheme ? "dark" : "light"}>
      <Header />

      <SearchUserForm />

      <UserProfile />
    </main>
  );
}

export default AppContent;
