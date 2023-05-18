import { displayData } from "../pages/index.js";
import { recipes } from "../../data/recipes.js";
import { filteredRecipesWithTags } from "../utils/tags.js"

const searchInput = document.querySelector(".search__input");
const noResultMessage = document.querySelector(".no-result-message");

export function search() {
  let tagsUsed = false;
  let recipesToDisplay = [];
  let contentInput;
  console.log(searchInput.value.length);
  if (searchInput.value.length > 2) {
    contentInput = searchInput.value.trim().toLowerCase();
    console.log(recipes);

    recipesToDisplay = recipes.filter((recipe) => {
      let recipeIsMatching = false;
      /*console.log(recipe.name);
      console.log(contentInput);*/
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
    console.log(recipesToDisplay);
  }
  if (Array.from(document.querySelectorAll('.tag__ingredients .tag__ingredient .tag-blue')).length > 0) {
    tagsUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
    recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }
  if (recipesToDisplay.length > 0) {
    noResultMessage.innerHTML = "";
    displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
    noResultMessage.innerHTML = "<p>Aucune recette ne correspond</p>";
  }

  if (searchInput.value === "" || searchInput.value.length < 3) {
    displayData(recipes);
    noResultMessage.innerHTML = "";
  }
}

let timer;
const interval = 100;
searchInput.addEventListener("keyup", () => {
  clearTimeout(timer);
  timer = setTimeout(search(), interval);
});
