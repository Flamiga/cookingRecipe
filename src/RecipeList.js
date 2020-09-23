import React from 'react'; 
import { Link } from "@reach/router";

function RecipeList(props){ 
let recipes = props.recipes;
const filter = props.filter;

if(filter){
recipes = recipes.filter(recipe => recipe.ingredient.includes(filter));
}
 let mapFunction = element =>
   <Link to={`/recipe/${element.id}`} key={element.id}>
     <li>{element.title}</li>
   </Link>;

    let recipeList = recipes.map(mapFunction);

    return (
    <>
    <h1>Recipes</h1>
    <ul>
   {recipeList}
    </ul>
  </>
  );
}

export default RecipeList;