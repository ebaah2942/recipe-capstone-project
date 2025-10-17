import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="w-full bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Recipe Finder</h1>

        <ul className="flex gap-6 items-center">
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>

          <li>
            <Link to="/shopping-list" className="hover:text-gray-200">
              🛒 Shopping List
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
