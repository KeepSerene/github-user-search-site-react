// React imports
import { createContext, useContext, useState } from "react";

// Helper function import
import { getInitialTheme } from "../utils/theme";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMsg("");

    try {
      console.log(username.trim());
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
        setErrorMsg,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
