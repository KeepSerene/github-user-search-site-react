import { STORAGE_KEY } from "./constants";

export const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    return JSON.parse(savedTheme);
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
