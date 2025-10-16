import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ meals }) {
  if (!meals || meals.length === 0) {
    return <p className="text-center text-gray-600">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((m) => (
        <RecipeCard key={m.idMeal} meal={m} />
      ))}
    </div>
  );
}
