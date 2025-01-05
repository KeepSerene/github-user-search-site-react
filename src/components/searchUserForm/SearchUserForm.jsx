import "./SearchUserForm.css";

// Context import
import { useAppContext } from "../AppProvider";

function SearchUserForm() {
  const { handleSubmit, username, setUsername, isLoading } = useAppContext();

  return (
    <form onSubmit={handleSubmit} className="search-form | wrapper">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </i>

      <label htmlFor="search-input" className="sr-only">
        Enter a github username to retrieve profile information
      </label>

      <input
        type="text"
        id="search-input"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Search GitHub username..."
      />

      <button
        type="submit"
        className="search-btn"
        disabled={!username.trim() || isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchUserForm;
