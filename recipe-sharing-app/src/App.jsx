import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./components/Favorites";
import ShoppingList from "./pages/ShoppingList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Full-width Navbar */}
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-grow w-full flex justify-center">
        <div className="w-full max-w-6xl px-4 py-6">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        </div>
      </main>

      {/* Full-width Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
