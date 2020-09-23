import React, { useState } from 'react';
import { Router } from "@reach/router";
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import './App.css';

function App() {
  const [ recipe, setData ] = useState([
   {title: 'Chocolatecake',description: 'Rich chocolate cake with bits in it, its so moist', id: 1, ingredient:['flour', 'sugar', 'cocoa', 'baking powder', 'baking soda', 'salt', 'espresso powder', 'milk', 'vegetable oil', 'eggs', 'vanilla', 'water'], timeEstimation: 60},
   {title: 'Carrotcake',description: 'How to use your leftover Carrot with a deliious frosting', id: 2, ingredient:['sugar', 'vegetable oil', 'eggs', 'flour', 'cinnamon', 'baking soda', 'vanilla', ' salt', 'carrots', 'walnuts' ], timeEstimation: 20}, 
   {title: 'You-know cake', description: 'This is mainly for danish people who love the chocolatety version of the dreamcake', id:3, ingredient: ['Sukker', 'Æg', 'Sødmælk', 'Hvedemel', 'Vanillesukker', 'Kakao', 'Bagepulver', 'Smør'], timeEstimation: 90} 
  ]);


//callback function
  function getRecipe(id){
    //remember the parseInt to compare with a integere
    const recipeObject = recipe.find(data => data.id === parseInt(id));
     return recipeObject;
      }

  return (
    //router looks at the components and then routes 
  <Router>
    <RecipeList path="/" recipes = {recipe}>{recipe.title}</RecipeList>
    <RecipeList path="/with/:filter" recipes={recipe}/>
    <Recipe path="/recipe/:id" getRecipe={getRecipe}/>
  </Router>
  )};

export default App;
