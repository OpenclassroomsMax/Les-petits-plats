/*import { displayData } from "../pages/index.js"*/

const searchInput = document.querySelector(".search__input");
const noResultMessage = document.querySelector(".no-result-message");

export function search(){

    let recipesToDisplay = [];
    let contentInput;

    if(searchInput.value.length > 2){
        contentInput = searchInput.value;
        console.log(recipes);
        const regex = new RegExp (`${contentInput.trim().toLowerCase()}`);
        recipesToDisplay = recipes.filter((recipe)=>{
            let recipeIsMatching = false;
            if (regex.test(recipe.name)) {
                recipeIsMatching = true;
            } else if (regex.test(recipe.description)) {
                recipeIsMatching = true;
            }
        recipe.ingredients.forEach(({ ingredient }) => {
        if (regex.test(ingredient)) {
          recipeIsMatching = true;
        }
        });
        return recipeIsMatching;
        })
    }
    if (recipesToDisplay.length > 0) {
        noResultMessage.innerHTML = '';
        displayData(recipesToDisplay);
      } else {
        displayData(recipesToDisplay);
         noResultText.innerHTML = '<p>Aucune recette ne correspond</p>';
    }

    if (((searchInput.value === '') || (searchInput.value.length < 3))) {
        fillFilters(recipes);
        displayData(recipes);
        noResultMessage.innerHTML = '';
      }
}

let timer;
const interval = 100;
searchInput.addEventListener('keyup', () => {
  clearTimeout(timer);
  timer = setTimeout(search(), interval);
});