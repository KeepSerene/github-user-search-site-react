import "./App.css";

// React imports
import { useEffect, useState } from "react";

// Component imports
import Header from "./components/header/Header";
import SearchUserForm from "./components/searchUserForm/SearchUserForm";

// Challenge: https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("isDevFinderThemeDark");

    if (savedTheme) {
      return JSON.parse(savedTheme);
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

  useEffect(
    () =>
      localStorage.setItem("isDevFinderThemeDark", JSON.stringify(isDarkTheme)),
    [isDarkTheme]
  );

  return (
    <main className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

      <SearchUserForm />
    </main>
  );
}

export default App;
