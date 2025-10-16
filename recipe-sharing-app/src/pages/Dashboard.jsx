import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export default function Dashboard() {
  const [meals, setMeals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMeals = async (q = "Arrabiata") => {
    if (!q) {
      setMeals(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${API_BASE}/search.php?s=${encodeURIComponent(q)}`
      );
      if (!res.ok) throw new Error("Network response was not OK");
      const data = await res.json();
      setMeals(data.meals); // can be null if not found
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // initial search
    searchMeals("Arrabiata");
  }, []);

  return (
    <div>
      <SearchBar onSearch={searchMeals} initial="Arrabiata" />

      <div className="mt-6">
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <>
            {meals === null ? (
              <p className="text-center text-gray-600">
                No results. Try another dish name.
              </p>
            ) : (
              <RecipeList meals={meals} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
