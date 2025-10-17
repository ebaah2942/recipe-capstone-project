// src/pages/ShoppingList.jsx
import React from "react";
import { useShoppingList } from "./ShoppingListContext";

export default function ShoppingList() {
  const { list, removeItem, clearList } = useShoppingList();

  if (list.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center mt-10">
        <h2 className="text-xl font-semibold">
          🛒 Your shopping list is empty
        </h2>
        <p className="text-gray-500 mt-2">Add ingredients from any recipe.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Shopping List</h2>
      <ul className="divide-y divide-gray-200">
        {list.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center py-2 text-gray-700"
          >
            <span>
              {item.measure} {item.name}
            </span>
            <button
              onClick={() => removeItem(item.name)}
              className="text-sm text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button
          onClick={clearList}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
