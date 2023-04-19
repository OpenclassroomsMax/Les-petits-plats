import { displayData } from "../pages/index.js";
import { recipes } from "../../data/recipes.js";

const searchInput = document.querySelector(".search__input");
const noResultMessage = document.querySelector(".no-result-message");

export function search() {
  let recipesToDisplay = [];
  let contentInput;
  console.log(searchInput.value.length);
  if (searchInput.value.length > 2) {
    contentInput = searchInput.value.trim().toLowerCase();
    console.log(recipes);

    for (let i = 0; i < recipes.length; i++) {
      let recipeIsMatching = false;
      if (recipes[i].name.toLowerCase().includes(contentInput)) {
        recipeIsMatching = true;
      } else if (recipes[i].description.toLowerCase().includes(contentInput)) {
        recipeIsMatching = true;
      }
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        console.log(recipes[i].ingredients[j].ingredient.toLowerCase());
        console.log(contentInput);
        if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(contentInput)) {
          recipeIsMatching = true;
        }
      }
      if (recipeIsMatching === true) {
        recipesToDisplay.push(recipes[i]);
      }
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
