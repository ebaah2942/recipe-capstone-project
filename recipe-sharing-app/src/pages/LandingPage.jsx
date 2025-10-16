import React from "react";

import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-extrabold text-green-700 mb-4">
        Recipe Finder 🍽️
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Search, discover, and learn how to cook delicious meals from around the
        world.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/dashboard"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Explore Recipes
        </Link>
        <a
          href="https://www.themealdb.com"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border rounded-md"
        >
          API: TheMealDB
        </a>
      </div>
    </section>
  );
}
