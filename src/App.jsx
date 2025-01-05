// Context provider import
import AppProvider from "./components/AppProvider";

// Component import
import AppContent from "./components/appContent/AppContent";

// Challenge: https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
