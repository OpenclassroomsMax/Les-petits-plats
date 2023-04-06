import { recipes } from "../../data/recipes.js"
import { Recipe } from "../factories/recipes.js"
import { search } from "../utils/search_input.js"
import { FilterInterface } from "../factories/filters.js"

/*Afficher les Données*/
async function displayData(data) {
    const recipesSectionCards = document.querySelector(".recipes__cards--all");
    const filtersIngredientsSection = document.querySelector(".filters__ingredients")
    const filtersAppareilsSection = document.querySelector(".filters__appliances")
    const filtersUstensilsSection = document.querySelector(".filters__ustensils")
    data.forEach((recipes) => {
        const recipesModel = new Recipe(recipes);
        const recipesCardDOM = recipesModel.createhtmlRecipeCard();
        recipesSectionCards.innerHTML=recipesSectionCards.innerHTML+(recipesCardDOM);

    });
    const filterModel = new FilterInterface(recipes);
    const filterDOM = filterModel.filterIngredients();
    filtersIngredientsSection.innerHTML=filtersIngredientsSection.innerHTML+(filterDOM);
}

async function init() {
    // Récupère les datas des recettes
   console.log(recipes)
    displayData(recipes);

}



init();
