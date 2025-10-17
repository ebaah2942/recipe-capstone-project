// src/components/RecipeCard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./FavoritesContext";

export default function RecipeCard({ meal }) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const toggleFavorite = () => {
    if (isFavorite(meal.idMeal)) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite(meal);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
            <p className="text-sm text-gray-500">
              {meal.strCategory} • {meal.strArea}
            </p>
          </div>
          <button
            onClick={toggleFavorite}
            className={`text-xl ${
              isFavorite(meal.idMeal)
                ? "text-red-500"
                : "text-gray-400 hover:text-red-400"
            }`}
          >
            {isFavorite(meal.idMeal) ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <Link
            to={`/recipe/${meal.idMeal}`}
            className="text-sm text-green-700 font-medium hover:underline"
          >
            View Details
          </Link>
          <a
            href={
              meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`
            }
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
