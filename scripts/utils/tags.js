import { search } from "../utils/search_input.js"
import { generateDropBox } from "../pages/index.js"

const filterItemIngredients = document.getElementsByClassName('filter__ingredients--items');


let tagIngredientAlreadyAdded = false;


const tagIngredientSelect = document.querySelector('.tag__ingredients');


export function addTagFilterIngredients() {
    if (tagIngredientAlreadyAdded === false) {
      tagIngredientAlreadyAdded = true;
      Array.from(filterItemIngredients).forEach((element) => {
        element.addEventListener('click', (e) => {
          const tagIngredientContainer = document.createElement('div');
          tagIngredientContainer.setAttribute('class', 'tag__ingredient');
          
          const tagIngredient = document.createElement('li');
          tagIngredient.innerText = e.target.innerText;
          tagIngredient.classList.add('tag-blue');
          
          const deleteTagIcon = document.createElement('span');
          deleteTagIcon.classname = 'deleteIcon';
          
          const deleteIconImg = document.createElement('i');
          deleteIconImg.className = 'fa-solid fa-xmark';
          
          deleteIconImg.addEventListener('click', () => {
            tagIngredientContainer.remove();
            search();
            return false;
          });
          console.log(tagIngredientSelect)
          tagIngredientSelect.appendChild(tagIngredientContainer);
          tagIngredientContainer.appendChild(tagIngredient);
          tagIngredientContainer.appendChild(deleteTagIcon);
          deleteTagIcon.appendChild(deleteIconImg);
          search();
        });
      });
    }
  }

export function filteredRecipesWithTags(recipesToFilter) {
    const taggedIngredientsDOM = Array.from(document.querySelectorAll('.tag__ingredients .tag__ingredient .tag-blue'));

    let recipesToDisplay = [];
    let taggedIngredients = [];

    
    taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
 
    recipesToDisplay = recipesToFilter.filter((recipe) => {
      let recipeIsMatching = false;
      let ingredientIsMatching = false;
  
  
      let ingredientsMatching = 0;

      let ingredientsInTheRecipe = [];

  
      ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient);
      
      
  
      if(taggedIngredients.length > 0) {
        taggedIngredients.forEach((taggedIngredient) => {
          if (ingredientsInTheRecipe.includes(taggedIngredient)) {
            ingredientsMatching += 1;
          }
        });
      }
  
      if (ingredientsMatching === taggedIngredients.length) {
        ingredientIsMatching = true;
      }
  
      if ((ingredientIsMatching === true)) {
        recipeIsMatching = true;
      }
  
      return recipeIsMatching;
    });
    generateDropBox(recipesToDisplay);
    return recipesToDisplay;
  }