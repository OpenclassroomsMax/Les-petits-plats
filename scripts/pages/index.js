import { recipes } from "../../data/recipes.js"
import { Recipe } from "../factories/recipes.js"

/*Afficher les Données*/
async function displayData(data) {
    const recipesSectionCards = document.querySelector(".recipes__cards--all");
    data.forEach((recipes) => {
        const recipesModel = new Recipe(recipes);
        const recipesCardDOM = recipesModel.createhtmlRecipeCard();
        recipesSectionCards.innerHTML=recipesSectionCards.innerHTML+(recipesCardDOM);
    });
}

async function init() {
    // Récupère les datas des recettes
   console.log(recipes)
    displayData(recipes);
}

init();
