import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-600 text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
      <ul className="flex gap-6">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/dashboard" className="hover:underline">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/profile" className="hover:underline">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
