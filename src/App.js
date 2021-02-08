import React, {useEffect, useState} from "react";
import './App.css';
import Jumbotron from './components/jumbotron';

function App() {

  const APP_ID = "437209d7";
  const APP_KEY= "17286e1704e9a158e6171ec68fc03c7d";



  useEffect(() => {
    getRecipes()
    }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
    
  }


  return (
    <div className="App">
    <Jumbotron/>
    <form className="search-form">
      <input type="text" className="search-bar"></input>
      <button type="submit" className="btn btn-danger m-4">Search</button>
    </form>

    </div>
  );
}

export default App;
