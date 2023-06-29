import { displayData } from "../pages/index.js";
import { recipes } from "../../data/recipes.js";
import { filteredRecipesWithTags } from "../utils/tags.js";
import { generateDropBox } from "../pages/index.js";

const searchInput = document.querySelector(".search__input");
const noResultMessage = document.querySelector(".no-result-message");

export function search() {
  let tagsUsed = false;
  let recipesToDisplay = [];
  let contentInput;
  if (searchInput.value.length > 2) {
    contentInput = searchInput.value.trim().toLowerCase();

    recipesToDisplay = recipes.filter((recipe) => {
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
  if (
    Array.from(document.querySelectorAll(".tag__ingredient")).length > 0 ||
    Array.from(document.querySelectorAll(".tag__appliance")).length > 0 ||
    Array.from(document.querySelectorAll(".tag__ustensil")).length > 0
  ) {
    tagsUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
      recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }
  if (recipesToDisplay.length > 0) {
    noResultMessage.innerHTML = "";

    generateDropBox(recipesToDisplay);
    displayData(recipesToDisplay);
  } else {

    displayData(recipesToDisplay);
    noResultMessage.innerHTML = "<p>Aucune recette ne correspond</p>";
  }

  if (searchInput.value === "" || searchInput.value.length < 3) {
    generateDropBox(recipes);
    noResultMessage.innerHTML = "";
  }
}

let timer;
const interval = 100;
searchInput.addEventListener("keyup", () => {
  clearTimeout(timer);
  timer = setTimeout(search(), interval);
});
