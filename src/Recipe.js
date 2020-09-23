import React from 'react';
import { Link } from "@reach/router";


//takes two input the call back function and then id
function Recipe(props){
    const recipe = props.getRecipe(props.id); // "props.id" contains the id in "/recipe/:id"
    let list = recipe.ingredient.map(ingredient =>
        <li key={ingredient}><Link to={"/with/" + ingredient}>{ingredient}</Link></li>);


    const difficulty = recipe.timeEstimation <= 25 ? "Easy" : "Hard";
return(
    <>
     <Link to="/">Home</Link>
       <h2> {recipe.title}</h2>
       <p>Description: {recipe.description}</p>
       <p>Time: {recipe.timeEstimation} minutes</p>
       <p>Difficulty: <b>{difficulty}</b></p>
        <h2>Ingredients</h2>
<ul>
    {list}
</ul>
        </>
)
}; 

export default Recipe;