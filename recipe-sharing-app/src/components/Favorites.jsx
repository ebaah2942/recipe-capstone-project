// src/pages/Favorites.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import RecipeCard from "./RecipeCard";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">❤️ My Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
