import React,{useEffect,useState} from 'react';
import Recipe from './Pizza/recipe';
import './App.css'
import Apps from'./menu/apps';

const App=()=>{

  const App_ID= '';
  const App_key= '';

 const[recipes,setRecepices]=useState([]);
 const [search,setSearch]=useState('');
 const [query,setQuery]=useState('');
  
  useEffect(()=>{
   getRecipes();
  },[query])
  
  const getRecipes= async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data =await response.json();
    console.log(data);
    setRecepices(data.hits);
  }
  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }
  return(
    <div className="App">
      <form  onSubmit={getSearch} className="search-form" >
        <label className="labell">Find your recipe   :    </label>
        <input  className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button  className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  )
}

export default App;
