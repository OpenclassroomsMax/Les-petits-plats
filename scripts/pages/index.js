import { recipes } from "../../data/recipes.js"
import { Recipe } from "../factories/recipes.js"
import { FilterInterface } from "../factories/filters.js"
import { addTagFilterIngredients } from "../utils/tags.js"
import { inputIngredient } from "../utils/filters_inputs.js"
import { addTagFilterAppliances } from "../utils/tags.js"
import { inputAppliance } from "../utils/filters_inputs.js"
import { addTagFilterUstensils } from "../utils/tags.js"
import { inputUstensil } from "../utils/filters_inputs.js"

/*import { tagIngredientAlreadyAdded } from "../utils/tags.js"*/



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
        /*addTagFilterIngredients();*/
        
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

export function filterAppliancesEvent(){
    const Appareils = document.querySelector(".filters__appliances")
    const BlocAppliances = document.querySelector('.filter__appliances--bloc');
    const titleAppliances = document.querySelector('.filter__appliances--title');
    const chevronDownAppliances = document.querySelector('.filter__appliances--chevronDown');
    const chevronUpAppliances = document.querySelector('.filter__appliances--chevronUp');
    const inputAppliances = document.querySelector('.filter__appliances--input');
    const listAppliances = document.querySelector('.filter__appliances--list');

    chevronDownAppliances.addEventListener('click', (e) => {
        if (e.target.className === 'fa-solid fa-chevron-down filter__appliances--chevronDown') {
            BlocAppliances.classList.remove('filter__appliances--bloc');
            BlocAppliances.classList.add('filter__appliances--view');
            Appareils.style.width= '70%';
            titleAppliances.style.display = 'none';
            chevronDownAppliances.style.display = 'none';
            inputAppliances.style.display = 'flex';
            chevronUpAppliances.style.display = 'flex';
            listAppliances.style.display = 'flex';
            inputAppliances.focus();
            inputAppliance();
          
        }
        /*addTagFilterAppliances();*/
    });
    chevronUpAppliances.addEventListener('click', (e) => {
        if (e.target.className === 'fa-solid fa-chevron-up filter__appliances--chevronUp') {
            BlocAppliances.classList.remove('filter__appliances--view');
            BlocAppliances.classList.add('filter__appliances--bloc');
            Appareils.style.width= '';
            titleAppliances.style.display = 'flex';
            inputAppliances.style.display = 'none';
            chevronDownAppliances.style.display = 'flex';
            chevronUpAppliances.style.display = 'none';
            listAppliances.style.display = 'none';
    
        }
      });
      return (BlocAppliances)
}


export function filterUstensilsDOM(){
    const filtersUstensilsSection = document.querySelector(".filters__ustensils")
    const filterModel = new FilterInterface(recipes);
    const filterDOM = filterModel.filterUstensils();
    filtersUstensilsSection.innerHTML=filtersUstensilsSection.innerHTML+(filterDOM);
}
export function filterUstensilsEvent(){
    const Ustensils = document.querySelector(".filters__ustensils")
    const BlocUstensils = document.querySelector('.filter__ustensils--bloc');
    const titleUstensils = document.querySelector('.filter__ustensils--title');
    const chevronDownUstensils = document.querySelector('.filter__ustensils--chevronDown');
    const chevronUpUstensils = document.querySelector('.filter__ustensils--chevronUp');
    const inputUstensils = document.querySelector('.filter__ustensils--input');
    const listUstensils = document.querySelector('.filter__ustensils--list');

    chevronDownUstensils.addEventListener('click', (e) => {
        if (e.target.className === 'fa-solid fa-chevron-down filter__ustensils--chevronDown') {
            BlocUstensils.classList.remove('filter__ustensils--bloc');
            BlocUstensils.classList.add('filter__ustensils--view');
            Ustensils.style.width= '70%';
            titleUstensils.style.display = 'none';
            chevronDownUstensils.style.display = 'none';
            inputUstensils.style.display = 'flex';
            chevronUpUstensils.style.display = 'flex';
            listUstensils.style.display = 'flex';
            inputUstensils.focus();
            inputUstensil();
          
        }
        /*addTagFilterUstensils();*/
    });
    chevronUpUstensils.addEventListener('click', (e) => {
        if (e.target.className === 'fa-solid fa-chevron-up filter__ustensils--chevronUp') {
            BlocUstensils.classList.remove('filter__ustensils--view');
            BlocUstensils.classList.add('filter__ustensils--bloc');
            Ustensils.style.width= '';
            titleUstensils.style.display = 'flex';
            inputUstensils.style.display = 'none';
            chevronDownUstensils.style.display = 'flex';
            chevronUpUstensils.style.display = 'none';
            listUstensils.style.display = 'none';
    
        }
      });
      return (BlocUstensils)
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

    let ingredientListTri = [];
    let ustensilsListTri = [];
    let appliancesListTri = [];

    data.forEach( recipe =>{
        /*console.log(recipe);*/

        /*console.log(recipe.appliance);*/
        const atags = [...document.querySelectorAll('.tag__appliance')].map( (atag) => atag.innerText);

        if (appliancesList.includes(recipe.appliance) === false && atags.includes(recipe.appliance) === false) {
            appliancesList.push(recipe.appliance);
            const filterListAppliances = document.createElement('li');
            filterListAppliances.classList.add('filter__appliances--items');
            filterListAppliances.innerText = recipe.appliance;
            appliancesBloc.appendChild(filterListAppliances);
        }
        
        recipe.ingredients.forEach (ingredient =>{
            /*console.log(ingredient.ingredient);*/
            /*console.log(ingredientsList.sort());*/
            /*let ingredientListTri = ingredientsList.sort();*/
            /*ingredientListTri.filter((items,index) => ingredientListTri.indexOf(items === index))*/
            /*console.log( ingredientListTri.filter((items,index) => ingredientListTri.indexOf(items === index)))*/
            const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText);
            if (ingredientListTri.includes(ingredient.ingredient) === false && itags.includes(ingredient) === false) {
                ingredientListTri.push(ingredient.ingredient.toLowerCase());
                /*const filterListIngredients = document.createElement('li');
                filterListIngredients.classList.add('filter__ingredients--items');
                filterListIngredients.innerText = ingredient.ingredient;
                ingredientsBloc.appendChild(filterListIngredients);
                console.log(ingredientsBloc)*/
            }
        })
        
        /*console.log(ingredientsList);*/

        const utags = [...document.querySelectorAll('.tag__ustensil')].map( (utag) => utag.innerText)
        recipe.ustensils.forEach (ustensil =>{
            if (ustensilsListTri.includes(ustensil) === false && utags.includes(ustensil) === false) {
                ustensilsListTri.push(ustensil.toLowerCase());
            }
        })

    });
    ingredientListTri.sort();
    let ingredientListTriUnique = [...new Set(ingredientListTri)];
    ingredientListTriUnique.forEach(ingredient =>{
        const filterListIngredients = document.createElement('li');
        filterListIngredients.classList.add('filter__ingredients--items');
        filterListIngredients.innerText = ingredient;
        ingredientsBloc.appendChild(filterListIngredients);
    });

    /*const filterListAppliances = document.createElement('li');
    filterListAppliances.classList.add('filter__appliances--items');
    filterListAppliances.innerText = recipe.appliance;
    appliancesBloc.appendChild(filterListAppliances);*/

    ustensilsListTri.sort();
    let ustensilsListTriUnique = [...new Set(ustensilsListTri)];
    ustensilsListTriUnique.forEach (ustensil =>{
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter__ustensils--items');
        filterItem.innerText = ustensil;
        ustensilsBloc.appendChild(filterItem);
    });


    addTagFilterIngredients();
    addTagFilterAppliances();
    addTagFilterUstensils();
}
function isArrowClicked() {
  
    const arrowDownIngredient = document.querySelector('.filter__ingredients--chevronDown');
    const arrowDownAppliance = document.querySelector('.filter__appliances--chevronDown');
    const arrowDownUstensil = document.querySelector('.filter__ustensils--chevronDown');
  
    let ingredientCloseElt;
    let ingredientArrowUp;
    let applianceCloseElt;
    let applianceArrowUp;
    let ustensilCloseElt;
    let ustensilArrowUp;
  
    arrowDownIngredient.addEventListener('click', () => {
      applianceCloseElt = document.querySelector('.filter__appliances--view');
      applianceArrowUp = document.querySelector('.filter__appliances--chevronUp');
      ustensilCloseElt = document.querySelector('.filter__ustensils--view');
      ustensilArrowUp = document.querySelector('.filter__ustensils--chevronUp');
      if (applianceCloseElt != null) {
        applianceArrowUp.click();
      }
      if (ustensilCloseElt != null) {
        ustensilArrowUp.click();
      }
    });

    arrowDownAppliance.addEventListener('click', () => {
      ustensilCloseElt = document.querySelector('.filter__ustensils--view');
      ustensilArrowUp = document.querySelector('.filter__ustensils--chevronUp');
      ingredientCloseElt = document.querySelector('.filter__ingredients--view');
      ingredientArrowUp = document.querySelector('.filter__ingredients--chevronUp');
      if (ustensilCloseElt != null) {
        ustensilArrowUp.click();
      }
      if (ingredientCloseElt != null) {
        ingredientArrowUp.click();
      }
    });
  
    arrowDownUstensil.addEventListener('click', () => {
      ingredientCloseElt = document.querySelector('.filter__ingredients--view');
      ingredientArrowUp = document.querySelector('.filter__ingredients--chevronUp');
      applianceCloseElt = document.querySelector('.filter__appliances--view');
      applianceArrowUp = document.querySelector('.filter__appliances--chevronUp');
      if (ingredientCloseElt != null) {
        ingredientArrowUp.click();
        }
      if (applianceCloseElt != null) {
        applianceArrowUp.click();
      }  
    });
  }

async function init() {
    // Récupère les datas des recettes
    console.log("1");

    displayData(recipes);
    filterIngredientsDOM();
    filterIngredientsEvent();
    filterAppareilsDOM();
    filterAppliancesEvent();
    filterUstensilsDOM();
    filterUstensilsEvent();
    generateDropBox(recipes);
    isArrowClicked();

}



init();
