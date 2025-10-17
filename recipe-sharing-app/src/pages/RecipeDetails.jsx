import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useShoppingList } from "../components/ShoppingListContext";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useShoppingList();

  // ✅ function must be defined before it’s used
  const parseIngredients = (m) => {
    if (!m) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = m[`strIngredient${i}`];
      const qty = m[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredients.push({ name: ing.trim(), measure: qty ? qty.trim() : "" });
      }
    }
    return ingredients;
  };

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch (err) {
        setError("Could not load recipe. Try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <p className="text-center">Loading recipe...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!meal)
    return <p className="text-center text-gray-600">Recipe not found.</p>;

  // ✅ safe to call here
  const ingredients = parseIngredients(meal);
  const youtubeId = meal.strYoutube
    ? new URL(meal.strYoutube).searchParams.get("v")
    : null;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full md:w-1/3 h-64 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
          <p className="text-sm text-gray-500 mb-3">
            {meal.strCategory} • {meal.strArea}
          </p>

          <h3 className="font-semibold mt-2">Ingredients</h3>
          <ul className="list-disc list-inside mt-2">
            {ingredients.map((ing, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span>
                  {ing.measure} {ing.name}
                </span>
                <button
                  onClick={() => addItem(ing)}
                  className="ml-4 text-sm text-green-600 hover:underline"
                >
                  Add to 🛒
                </button>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-4">Instructions</h3>
          <p className="mt-2 whitespace-pre-line">{meal.strInstructions}</p>

          {meal.strSource && (
            <p className="mt-4">
              <a
                href={meal.strSource}
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:underline"
              >
                View original source
              </a>
            </p>
          )}
        </div>
      </div>

      {youtubeId && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">How-to Video</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="youtube"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              allowFullScreen
              className="w-full h-64 md:h-96 rounded"
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        <Link to="/dashboard" className="text-sm text-gray-600 hover:underline">
          ← Back to results
        </Link>
      </div>
    </div>
  );
}
