import React, { useState } from "react";

function SearchBar({ onSearch, initial = "" }) {
  const [query, setQuery] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto flex gap-2"
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes by name (e.g., Arrabiata)"
        className="flex-grow border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label="Search recipes"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
