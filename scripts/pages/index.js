import { recipes } from "../../data/recipes.js"
import { Recipe } from "../factories/recipes.js"
import { search } from "../utils/search_input_for.js"
import { FilterInterface } from "../factories/filters.js"

/*Afficher les Données*/
export function displayData(data) {
    const recipesSectionCards = document.querySelector(".recipes__cards--all");
    /*const filtersIngredientsSection = document.querySelector(".filters__ingredients")
    const filtersAppareilsSection = document.querySelector(".filters__appliances")
    const filtersUstensilsSection = document.querySelector(".filters__ustensils")*/
    recipesSectionCards.innerHTML="";
    console.log(data);
    data.forEach((recipes) => {
        
        const recipesModel = new Recipe(recipes);
        const recipesCardDOM = recipesModel.createhtmlRecipeCard();
        recipesSectionCards.innerHTML=recipesSectionCards.innerHTML+(recipesCardDOM);
    
    });
    
    /*const filterModel = new FilterInterface(recipes);
    const filterDOM = filterModel.filterIngredients();
    filtersIngredientsSection.innerHTML=filtersIngredientsSection.innerHTML+(filterDOM);*/
}
 
function generateDropBox(data){
    const ingredientDropBox = [];
    data.forEach( recipe =>{
        console.log(recipe);
        console.log(recipe.ingredients);
        recipe.ingredients.forEach (ingredient =>{
            console.log(ingredient.ingredient);
            /*console.log(ingredient)*/
        })

    });
}
async function init() {
    // Récupère les datas des recettes
   console.log(recipes)
    displayData(recipes);
    generateDropBox(recipes);



}



init();
