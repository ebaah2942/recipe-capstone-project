import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { FavoritesProvider } from "./components/FavoritesContext.jsx";
import { ShoppingListProvider } from "./components/ShoppingListContext.jsx";
import { DarkModeProvider } from "./components/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <FavoritesProvider>
          <ShoppingListProvider>
            <App />
          </ShoppingListProvider>
        </FavoritesProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
