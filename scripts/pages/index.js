import { recipes } from "../../data/recipes.js"
import { Recipe } from "../factories/recipes.js"
import { search } from "../utils/search_input.js"
import { FilterInterface } from "../factories/filters.js"
import { addTagFilterIngredients } from "../utils/tags.js"
import { inputIngredient } from "../utils/filters_inputs.js"

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
export function filterIngredientsDOM(){
    const filtersIngredientsSection = document.querySelector(".filters__ingredients")
    const filterModel = new FilterInterface(recipes);
    const filterDOM = filterModel.filterIngredients();
    filtersIngredientsSection.innerHTML=filtersIngredientsSection.innerHTML+(filterDOM);
}
export  function filterIngredientsEvent(){
    const Ingredients = document.querySelector('.filters__ingredients');
    const BlocIngredients = document.querySelector('.filter__ingredients--bloc');
    const titleIngredients = document.querySelector('.filter__ingredients--title');
    const chevronDownIngredients = document.querySelector('.filter__ingredients--chevronDown');
    const chevronUpIngredients = document.querySelector('.filter__ingredients--chevronUp');
    const inputIngredients = document.querySelector('.filter__ingredients--input');
    const listIngredients = document.querySelector('.filter__ingredients--list');

    chevronDownIngredients.addEventListener('click', (e) => {
        if (e.target.className === 'fa-solid fa-chevron-down filter__ingredients--chevronDown') {
            BlocIngredients.classList.remove('filter__ingredients--bloc');
            BlocIngredients.classList.add('filter__ingredients--view');
            Ingredients.style.width= '70%';
            titleIngredients.style.display = 'none';
            chevronDownIngredients.style.display = 'none';
            inputIngredients.style.display = 'flex';
            chevronUpIngredients.style.display = 'flex';
            listIngredients.style.display = 'flex';
            inputIngredients.focus();
            inputIngredient();
          
        }
        addTagFilterIngredients();
        
    });
    chevronUpIngredients.addEventListener('click', (e) => {
        if (e.target.className === 'fa-solid fa-chevron-up filter__ingredients--chevronUp') {
            BlocIngredients.classList.remove('filter__ingredients--view');
            BlocIngredients.classList.add('filter__ingredients--bloc');
            Ingredients.style.width= '';
            titleIngredients.style.display = 'flex';
            inputIngredients.style.display = 'none';
            chevronDownIngredients.style.display = 'flex';
            chevronUpIngredients.style.display = 'none';
            listIngredients.style.display = 'none';
    
        }
      });
    return (BlocIngredients)
}


export function filterAppareilsDOM(){
    const filtersAppareilsSection = document.querySelector(".filters__appliances")
    const filterModel = new FilterInterface(recipes);
    const filterDOM = filterModel.filterAppareils();
    filtersAppareilsSection.innerHTML=filtersAppareilsSection.innerHTML+(filterDOM);
}
export function filterUstensilsDOM(){
    const filtersUstensilsSection = document.querySelector(".filters__ustensils")
    const filterModel = new FilterInterface(recipes);
    const filterDOM = filterModel.filterUstensils();
    filtersUstensilsSection.innerHTML=filtersUstensilsSection.innerHTML+(filterDOM);
}
 
export function generateDropBox(data){
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
            const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText);
            if (ingredientsList.includes(ingredient.ingredient) === false && itags.includes(ingredient) === false) {
                ingredientsList.push(ingredient.ingredient);
                const filterListIngredients = document.createElement('li');
                filterListIngredients.classList.add('filter__ingredients--items');
                filterListIngredients.innerText = ingredient.ingredient;
                ingredientsBloc.appendChild(filterListIngredients);
            }
        })
        console.log(ingredientsList);


        recipe.ustensils.forEach (ustensil =>{
            if (ustensilsList.includes(ustensil) === false) {
                ustensilsList.push(ustensil);
                const filterItem = document.createElement('li');
                filterItem.classList.add('filter__ustensils--items');
                filterItem.innerText = ustensil;
                ustensilsBloc.appendChild(filterItem);
            }
        })

    });

    addTagFilterIngredients();
}

async function init() {
    // Récupère les datas des recettes
    console.log(recipes)
    displayData(recipes);
    filterIngredientsDOM();
    filterIngredientsEvent();
    filterAppareilsDOM();
    filterUstensilsDOM();
    generateDropBox(recipes);

}



init();
