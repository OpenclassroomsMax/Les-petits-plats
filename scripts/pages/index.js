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
    const ingredientsBloc = document.querySelector('.filter__ingredients--list');
    const appliancesBloc = document.querySelector('.filter__appliances--list');
    const ustensilsBloc = document.querySelector('.filter__ustensils--list');

    const ingredientsList = [];
    const appliancesList = [];
    const ustensilsList = [];

    ingredientsBloc.innerHTML = '';
    appliancesBloc.innerHTML = '';
    ustensilsBloc.innerHTML = '';

    data.forEach( recipe =>{
        console.log(recipe);

        console.log(recipe.appliance);
        if (appliancesList.includes(recipe.appliance) === false) {
            appliancesList.push(recipe.appliance);
            const filterListAppliances = document.createElement('li');
            filterListAppliances.classList.add('filter__appliances--items');
            filterListAppliances.innerText = recipe.appliance;
            appliancesBloc.appendChild(filterListAppliances);
        }
        
        recipe.ingredients.forEach (ingredient =>{
            console.log(ingredient.ingredient);
            if (ingredientsList.includes(ingredient) === false) {
                ingredientsList.push(ingredient);
                const filterListIngredients = document.createElement('li');
                filterListIngredients.classList.add('filter__ingredients--items');
                filterListIngredients.innerText = ingredient;
                ingredientsBloc.appendChild(filterListIngredients);
            }
        })

        recipe.ustensils.forEach (ustensiles =>{
            console.log(ustensiles);
            if (ustensilsList.includes(ustensil) === false) {
                ustensilsList.push(ustensil);
                const filterItem = document.createElement('li');
                filterItem.classList.add('filter__ustensils--items');
                filterItem.innerText = ustensil;
                ustensilsBloc.appendChild(filterItem);
            }
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
