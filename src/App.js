import React, {useEffect, useState} from "react";
import './App.css';
import Jumbotron from './components/jumbotron';
import Recipe from "./components/recipe";

function App() {

  const APP_ID = process.env.REACT_APP_RECIPE_APP_ID;
  const APP_KEY= process.env.REACT_APP_RECIPE_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
    <Jumbotron/>
    <form onSubmit={getSearch} className="search-form">
      <input type="text" className="search-bar" value={search} onChange={updateSearch}></input>
      <button type="submit" className="btn btn-danger m-4">Search</button>
    </form>
    <div className="recipes"> 
    {recipes.map(recipe =>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      dietLabels={recipe.recipe.dietLabels}
      healthLabels={recipe.recipe.healthLabels}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
      </div>
    </div>
  );
}

export default App;
