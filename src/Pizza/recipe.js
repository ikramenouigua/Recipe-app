import React from 'react';
import  './recipe.css'

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
   <div className="recipe">
       <h1 className="title">{title}</h1>
       <ul className="list">
           {ingredients.map((ingredient) => (
               <li className="element">{ingredient.text}</li>
           ))}
       </ul>
       <p><p className="cal">Calories </p>  {calories}</p>
       <img className="image" src={image} alt=" "></img>
      
   </div>
    )
}
export default Recipe;