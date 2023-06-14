import React, {useEffect, useState} from "react";
import './App.css';
import Recipe  from './recipe'

const App = () => {
  //const APP_ID = "9a93479a";
//const APP_KEY = "702ddabd83734ad902b1c7e94325e854	";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');
//const exampleReq ='https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=9a93479a&app_key=%20702ddabd83734ad902b1c7e94325e854&imageSize=REGULAR'
useEffect(() => {
getRecipes();

}, [query]);

const getRecipes = async () => {
  const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=9a93479a&app_key=%20702ddabd83734ad902b1c7e94325e854&imageSize=REGULAR');
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
  
  
  }
    
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    }




return(
  <div className= "App">
    <form onSubmit={getSearch} className="search-form">
      <input cLassName="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
    <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
        ))}
    </div>
  </div>
);
};

export default App;
