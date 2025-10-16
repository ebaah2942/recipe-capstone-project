import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ meal }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
        <p className="text-sm text-gray-500">
          {meal.strCategory} • {meal.strArea}
        </p>
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
