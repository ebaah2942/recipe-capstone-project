🧑‍🍳 Recipe Finder App

A simple and interactive Recipe Finder built with React + Tailwind CSS that fetches meals from the TheMealDB API
.
Users can explore recipes, save favorites, manage a shopping list, and toggle dark mode.

🚀 Features

✅ Search Recipes:
Browse recipes by name and category using live API data.

❤️ Favorites:
Save your favorite recipes for easy access later.

🛒 Shopping List:
Add ingredients from a recipe to your personal shopping list.

🌙 Dark Mode:
Toggle between light and dark themes for a better viewing experience.

🧩 Components Overview
Component Description
Navbar.jsx Navigation bar with links, shopping list, and dark mode toggle.
Footer.jsx Simple footer with credits and links.
LandingPage.jsx Homepage with featured recipes and search functionality.
Dashboard.jsx Displays recipes fetched from TheMealDB API.
RecipeCard.jsx Displays individual recipe details with “View Details” and “Source” links.
RecipeDetails.jsx Shows full recipe details including ingredients and instructions.
Favorites.jsx Lists all user-favorited recipes.
ShoppingList.jsx Displays and manages ingredients users add from recipes.
DarkModeContext.jsx Handles dark/light mode state across the app.
⚙️ Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

Routing: React Router DOM

State Management: React Hooks & Context API

API: TheMealDB

🛠️ Installation

Clone the repository:

git clone https://github.com/ebaah2942/recipe-capstone-project.git
cd recipe-finder

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173

🌈 Future Improvements

Add user authentication for persistent favorites and shopping lists

Upload custom recipes

Profile photo and theme preferences

🧑‍💻 Author

Enoch Baah
Frontend Developer | React Enthusiast
📧 ebaah2942@gmail.com
