import React from "react";
import { useShoppingList } from "../components/ShoppingListContext";

export default function ShoppingList() {
  const { shoppingList, removeItem, clearList } = useShoppingList();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">🛒 My Shopping List</h2>

      {shoppingList.length === 0 ? (
        <p className="text-gray-600">
          No items yet. Add ingredients from recipes.
        </p>
      ) : (
        <>
          <ul className="space-y-2">
            {shoppingList.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {item.measure} {item.name}
                </span>
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={clearList}
            className="mt-4 text-sm text-gray-700 hover:text-red-600 underline"
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}
