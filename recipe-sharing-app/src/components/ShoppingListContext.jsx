import React, { createContext, useContext, useState, useEffect } from "react";

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addItem = (item) => {
    setShoppingList((prev) => {
      if (prev.some((i) => i.name === item.name)) return prev; // avoid duplicates
      return [...prev, item];
    });
  };

  const removeItem = (name) => {
    setShoppingList((prev) => prev.filter((i) => i.name !== name));
  };

  const clearList = () => setShoppingList([]);

  return (
    <ShoppingListContext.Provider
      value={{ shoppingList, addItem, removeItem, clearList }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => useContext(ShoppingListContext);
