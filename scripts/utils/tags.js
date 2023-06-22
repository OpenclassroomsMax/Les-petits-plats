import { search } from "../utils/search_input_for.js"
import { generateDropBox } from "../pages/index.js"
import { recipes } from "../../data/recipes.js";
import { displayData } from "../pages/index.js"



const filterItemIngredients = document.getElementsByClassName('filter__ingredients--items');
const tagIngredientSelect = document.querySelector('.tag__ingredients');

export function addTagFilterIngredients() {


    /*if (tagIngredientAlreadyAdded === false) {*/
      console.log("je suis appelé");

      /*tagIngredientAlreadyAdded = true;*/
      Array.from(filterItemIngredients).forEach((element) => {
        element.addEventListener('click', (e) => {
          
          const tagIngredientContainer = document.createElement('div');
          tagIngredientContainer.setAttribute('class', 'tag__ingredient text__Lato');
          
          /*const tagIngredient = document.createElement('p');*/
          tagIngredientContainer.innerText = e.target.innerText;
          tagIngredientContainer.classList.add('tag-blue');
          
          /*const deleteTagIcon = document.createElement('span');
          deleteTagIcon.classname = 'deleteIcon';*/
          
          const deleteIconImg = document.createElement('i');
          deleteIconImg.className = 'fa-solid fa-xmark';
          console.log("création du tag ", e.target.innerText)                       
          
          deleteIconImg.addEventListener('click', () => {
            const searchInput = document.querySelector(".search__input");
            tagIngredientContainer.remove();
            console.log("remove");
            let recipeTab =  [];
            let contentInput;

            if (searchInput.value.length > 2) {
              contentInput = searchInput.value.trim().toLowerCase();
              console.log(recipes);
          
              recipeTab = recipes.filter((recipe) => {
                let recipeIsMatching = false;
               
                if (recipe.name.toLowerCase().includes(contentInput)) {
                  recipeIsMatching = true;
                } else if (recipe.description.toLowerCase().includes(contentInput)) {
                  recipeIsMatching = true;
                }
                recipe.ingredients.forEach(({ ingredient }) => {
                  if (ingredient.toLowerCase().includes(contentInput)) {
                    recipeIsMatching = true;
                  }
                });
                return recipeIsMatching;
              });
            }
            else{
              recipeTab = [...recipes]
              
            }
            
            console.log(recipeTab);
/** si la recherche est vide afficher les recettes **/
/** faire la liste des tags**/
          const listeTag = document.querySelectorAll(".tag__ingredient");
          console.log(listeTag)

          if(listeTag.length > 0 ){
            console.log("il y a des tags")
            /*filtrer le recipeTab par rapport au tags restant parcourir le tableau*/
    
            listeTag.forEach((tag) => {
              console.log(tag);
              console.log(tag.innerText);
              console.log("1", recipeTab)
              recipeTab = [...recipeTab.filter((recipe) => {
                let ingredientsMatching = false;
                recipe.ingredients.forEach(({ ingredient }) => {
                  
                  console.log(ingredient);
                  if (ingredient.toLowerCase().includes(tag.innerText.toLowerCase())) {
                    console.log("true");
                    ingredientsMatching = true;
                  }
                });
                return ingredientsMatching;
              })];
              console.log(recipeTab);

            });
            console.log(recipeTab);
          }
          
          displayData(recipeTab);
          generateDropBox(recipeTab);

/** filtrer la liste en fonction des tags**/
            return false;
          });
          tagIngredientSelect.appendChild(tagIngredientContainer);
          /*tagIngredientContainer.appendChild(tagIngredient);*/
          /*tagIngredientContainer.appendChild(deleteTagIcon);*/
          tagIngredientContainer.appendChild(deleteIconImg);
          search();

        });
      });
    /*}*/
  }

const filterItemAppliances = document.getElementsByClassName('filter__appliances--items');
let tagApplianceAlreadyAdded = false;
const tagApplianceWrapper = document.querySelector('.tag__appliances');

export function addTagFilterAppliances() {

      Array.from(filterItemAppliances).forEach((element) => {
        element.addEventListener('click', (e) => {
  
          const tagApplianceContainer = document.createElement('div');
          tagApplianceContainer.setAttribute('class', 'tag__appliance text__Lato');
  
          /*const tagAppliance = document.createElement('p');*/
          tagApplianceContainer.innerText = e.target.innerText;
          tagApplianceContainer.classList.add('tag-green');
  
          /*const deleteTagIcon = document.createElement('span');
          deleteTagIcon.className = 'deleteIcon';*/
          
          const deleteIconImg = document.createElement('i');
          deleteIconImg.className = 'fa-solid fa-xmark';

          deleteIconImg.addEventListener('click', () => {
            const searchInput = document.querySelector(".search__input");
            tagApplianceContainer.remove();
            let recipeTab =  [];
            let contentInput;
            if (searchInput.value.length > 2) {
              contentInput = searchInput.value.trim().toLowerCase();
              console.log(recipes);
          
              recipeTab = recipes.filter((recipe) => {
                let recipeIsMatching = false;
               
                if (recipe.name.toLowerCase().includes(contentInput)) {
                  recipeIsMatching = true;
                } else if (recipe.description.toLowerCase().includes(contentInput)) {
                  recipeIsMatching = true;
                }
                recipe.appliance.forEach(({ appareils }) => {
                  if (appareils.toLowerCase().includes(contentInput)) {
                    recipeIsMatching = true;
                  }
                });
                return recipeIsMatching;
              });
            }
            else{
              recipeTab = [...recipes]
              
            }
          const listeTag = document.querySelectorAll(".tag__appliance");
          console.log(listeTag)

          if(listeTag.length > 0 ){
            console.log("il y a des tags")
            /*filtrer le recipeTab par rapport au tags restant parcourir le tableau*/
    
            /*listeTag.forEach(({ tag }) => {
              console.log(tag.innerText);
              recipeTab = [...recipeTab.filter((recipe) => {
                recipe.appliance.forEach(({ appareils }) => {
                  if (appareils.toLowerCase().includes(tag)) {
                    return true;
                  }
                });
            
              })];
              console.log(recipeTab);

            });*/
            console.log(listeTag);
            console.log(recipeTab);
          }
          
          displayData(recipeTab);
          generateDropBox(recipeTab);
            return false;
          });
          tagApplianceWrapper.appendChild(tagApplianceContainer);
          /*tagApplianceContainer.appendChild(tagAppliance);
          tagApplianceContainer.appendChild(deleteTagIcon);*/
          tagApplianceContainer.appendChild(deleteIconImg);
          search();
        });
    });
}
const filterItemUstensils = document.getElementsByClassName('filter__ustensils--items');
const tagUstensilWrapper = document.querySelector('.tag__ustensils');

export function addTagFilterUstensils() {
    Array.from(filterItemUstensils).forEach((element) => {
      element.addEventListener('click', (e) => {
        
        const tagUstensilContainer = document.createElement('div');
        tagUstensilContainer.setAttribute('class', 'tag__ustensil text__Lato');

        /*const tagUstensil = document.createElement('p');*/
        tagUstensilContainer.innerText = e.target.innerText;
        tagUstensilContainer.classList.add('tag-red');
        
        /*const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';*/
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-solid fa-xmark';

        deleteIconImg.addEventListener('click', () => {
          const searchInput = document.querySelector(".search__input");
          tagUstensilContainer.remove();
          let recipeTab =  [];
          let contentInput;

          if (searchInput.value.length > 2) {
            contentInput = searchInput.value.trim().toLowerCase();
            console.log(recipes);
        
            recipeTab = recipes.filter((recipe) => {
              let recipeIsMatching = false;
             
              if (recipe.name.toLowerCase().includes(contentInput)) {
                recipeIsMatching = true;
              } else if (recipe.description.toLowerCase().includes(contentInput)) {
                recipeIsMatching = true;
              }
              recipe.ustensils.forEach(({ ustensil }) => {
                if (ustensil.toLowerCase().includes(contentInput)) {
                  recipeIsMatching = true;
                }
              });
              return recipeIsMatching;
            });
          }
          else{
            recipeTab = [...recipes]
            
          }
          const listeTag = document.querySelectorAll(".tag__ustensil");
          console.log(listeTag)

          if(listeTag.length > 0 ){
            console.log("il y a des tags")
            /*filtrer le recipeTab par rapport au tags restant parcourir le tableau*/
    
            listeTag.forEach(({ tag }) => {
              console.log(tag.innerText);
              recipeTab = [...recipeTab.filter((recipe) => {
                recipe.ustensils.forEach(({ ustensil }) => {
                  if (ustensil.toLowerCase().includes(tag)) {
                    return true;
                  }
                });
            
              })];
              console.log(recipeTab);

            });
            console.log(listeTag);
            console.log(recipeTab);
          }
          
          displayData(recipeTab);
          generateDropBox(recipeTab);
          return false;
        });
        tagUstensilWrapper.appendChild(tagUstensilContainer);
        /*tagUstensilContainer.appendChild(tagUstensil);
        tagUstensilContainer.appendChild(deleteTagIcon);*/
        tagUstensilContainer.appendChild(deleteIconImg);
        search();
      });
    });
  
}

export function filteredRecipesWithTags(recipesToFilter) {
  console.log("filteredRecipesWithTags");
  /* Faire des tableaux des items afficher pour chaque filtre */ 
  const taggedIngredientsDOM = Array.from(document.querySelectorAll('.tag__ingredient'));

  const taggedAppliancesDOM = Array.from(document.querySelectorAll('.tag__appliance'));

  const taggedustensilsDOM = Array.from(document.querySelectorAll('.tag__ustensil'));
  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedUstensils = [];
  
  taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
  taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
  taggedUstensils = taggedustensilsDOM.map((taggedUstensil) => taggedUstensil.innerText);
  console.log("taggedIngredientsDOM",taggedIngredientsDOM);
  console.log("taggedIngredients", taggedIngredients);
  console.log("ancienne", recipesToFilter )
  /* Définir le tableau recipesToDisplay un filtre de recipes */
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let ustensilIsMatching = false;

    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;

    let ingredientsInTheRecipe = [];
    let appliancesInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient.toLowerCase());
    
    appliancesInTheRecipe.push(recipe.appliance);
    
    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil.toLowerCase());

    console.log(recipe.name);
    console.log(ingredientsInTheRecipe);
    if(taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        console.log(taggedIngredient);
        if (ingredientsInTheRecipe.includes(taggedIngredient.toLowerCase())) {
          console.log("ingredientsMatching");
          ingredientsMatching += 1;
        }
      });
    }

    if(taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching += 1;
        }
      });
    }
    
    if (taggedUstensils.length > 0) {
      taggedUstensils.forEach((taggedUstensil) => {
        if (ustensilsInTheRecipe.includes(taggedUstensil.toLowerCase())) {
          ustensilsMatching += 1;
        }
      });
    }

    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    if (taggedAppliances.length > 0) {
      if (appliancesMatching > 0) {
        applianceIsMatching = true;
      }
    } else applianceIsMatching = true;

    if (ustensilsMatching === taggedUstensils.length) {
      ustensilIsMatching = true;
    }

    if ((ingredientIsMatching === true) && (applianceIsMatching === true) && (ustensilIsMatching === true)) {
      recipeIsMatching = true;
    }

    return recipeIsMatching;
  });
  console.log(recipesToDisplay);
  generateDropBox(recipesToDisplay);
  return recipesToDisplay;
}