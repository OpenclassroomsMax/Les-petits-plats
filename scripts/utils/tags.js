import { search } from "../utils/search_input.js";
import { generateDropBox } from "../pages/index.js";
import { recipes } from "../../data/recipes.js";
import { displayData } from "../pages/index.js";

let recipeTab = [];

export function TagShearch() {
  const listeTagingredients = document.querySelectorAll(".tag__ingredient");
  const listeTagapplaiances = document.querySelectorAll(".tag__appliance");
  const listeTagustensils = document.querySelectorAll(".tag__ustensil");

  /*recherche si il y a un tag ingredients */
  if (listeTagingredients.length > 0) {
    listeTagingredients.forEach((tag) => {
      recipeTab = [
        ...recipeTab.filter((recipe) => {
          let ingredientsMatching = false;
          recipe.ingredients.forEach(({ ingredient }) => {
            if (
              ingredient.toLowerCase().includes(tag.innerText.toLowerCase())
            ) {
              ingredientsMatching = true;
            }
          });
          return ingredientsMatching;
        }),
      ];
    });
  }

  /*recherche si il y a un tag appareils */
  if (listeTagapplaiances.length > 0) {
    listeTagapplaiances.forEach((tag) => {
      recipeTab = [
        ...recipeTab.filter((recipe) => {
          if (
            recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase())
          ) {
            return true;
          }
        }),
      ];
    });
  }

  /*recherche si il y a un tag ustensils */
  if (listeTagustensils.length > 0) {
    listeTagustensils.forEach((tag) => {
      recipeTab = [
        ...recipeTab.filter((recipe) => {
          let ustensilsMatching = false;
          recipe.ustensils.forEach((ustensil) => {
            if (ustensil.toLowerCase().includes(tag.innerText.toLowerCase())) {
              ustensilsMatching = true;
            }
          });
          return ustensilsMatching;
        }),
      ];
    });
  }
}

const filterItemIngredients = document.getElementsByClassName(
  "filter__ingredients--items"
);
const tagIngredientSelect = document.querySelector(".tag__ingredients");

export function addTagFilterIngredients() {
  Array.from(filterItemIngredients).forEach((element) => {
    element.addEventListener("click", (e) => {
      const tagIngredientContainer = document.createElement("div");
      tagIngredientContainer.setAttribute(
        "class",
        "tag__ingredient text__Lato"
      );

      tagIngredientContainer.innerText = e.target.innerText;
      tagIngredientContainer.classList.add("tag-blue");

      const deleteIconImg = document.createElement("i");
      deleteIconImg.className = "fa-solid fa-xmark";

      deleteIconImg.addEventListener("click", () => {
        const searchInput = document.querySelector(".search__input");
        tagIngredientContainer.remove();
        let contentInput;

        if (searchInput.value.length > 2) {
          contentInput = searchInput.value.trim().toLowerCase();
          recipeTab = recipes.filter((recipe) => {
            let recipeIsMatching = false;

            if (recipe.name.toLowerCase().includes(contentInput)) {
              recipeIsMatching = true;
            } else if (
              recipe.description.toLowerCase().includes(contentInput)
            ) {
              recipeIsMatching = true;
            }
            recipe.ingredients.forEach(({ ingredient }) => {
              if (ingredient.toLowerCase().includes(contentInput)) {
                recipeIsMatching = true;
              }
            });
            return recipeIsMatching;
          });
        } else {
          recipeTab = [...recipes];
        }
        TagShearch(recipeTab);
        displayData(recipeTab);
        generateDropBox(recipeTab);
        return false;
      });
      tagIngredientSelect.appendChild(tagIngredientContainer);
      tagIngredientContainer.appendChild(deleteIconImg);
      search();
    });
  });
}

const filterItemAppliances = document.getElementsByClassName(
  "filter__appliances--items"
);
const tagApplianceWrapper = document.querySelector(".tag__appliances");

export function addTagFilterAppliances() {
  Array.from(filterItemAppliances).forEach((element) => {
    element.addEventListener("click", (e) => {
      const tagApplianceContainer = document.createElement("div");
      tagApplianceContainer.setAttribute("class", "tag__appliance text__Lato");

      tagApplianceContainer.innerText = e.target.innerText;
      tagApplianceContainer.classList.add("tag-green");

      const deleteIconImg = document.createElement("i");
      deleteIconImg.className = "fa-solid fa-xmark";

      deleteIconImg.addEventListener("click", () => {
        const searchInput = document.querySelector(".search__input");
        tagApplianceContainer.remove();
        let contentInput;
        if (searchInput.value.length > 2) {
          contentInput = searchInput.value.trim().toLowerCase();

          recipeTab = recipes.filter((recipe) => {
            let recipeIsMatching = false;

            if (recipe.name.toLowerCase().includes(contentInput)) {
              recipeIsMatching = true;
            } else if (
              recipe.description.toLowerCase().includes(contentInput)
            ) {
              recipeIsMatching = true;
            }

            if (recipe.appliance.toLowerCase().includes(contentInput)) {
              recipeIsMatching = true;
            }

            return recipeIsMatching;
          });
        } else {
          recipeTab = [...recipes];
        }
        TagShearch(recipeTab);
        displayData(recipeTab);
        generateDropBox(recipeTab);
        return false;
      });
      tagApplianceWrapper.appendChild(tagApplianceContainer);
      tagApplianceContainer.appendChild(deleteIconImg);
      search();
    });
  });
}
const filterItemUstensils = document.getElementsByClassName(
  "filter__ustensils--items"
);
const tagUstensilWrapper = document.querySelector(".tag__ustensils");

export function addTagFilterUstensils() {
  Array.from(filterItemUstensils).forEach((element) => {
    element.addEventListener("click", (e) => {
      const tagUstensilContainer = document.createElement("div");
      tagUstensilContainer.setAttribute("class", "tag__ustensil text__Lato");

      tagUstensilContainer.innerText = e.target.innerText;
      tagUstensilContainer.classList.add("tag-red");

      const deleteIconImg = document.createElement("i");
      deleteIconImg.className = "fa-solid fa-xmark";

      deleteIconImg.addEventListener("click", () => {
        const searchInput = document.querySelector(".search__input");
        tagUstensilContainer.remove();
        let contentInput;

        if (searchInput.value.length > 2) {
          contentInput = searchInput.value.trim().toLowerCase();

          recipeTab = recipes.filter((recipe) => {
            let recipeIsMatching = false;

            if (recipe.name.toLowerCase().includes(contentInput)) {
              recipeIsMatching = true;
            } else if (
              recipe.description.toLowerCase().includes(contentInput)
            ) {
              recipeIsMatching = true;
            }
            recipe.ustensils.forEach((ustensil) => {
              if (ustensil.toLowerCase().includes(contentInput)) {
                recipeIsMatching = true;
              }
            });
            return recipeIsMatching;
          });
        } else {
          recipeTab = [...recipes];
        }

        TagShearch(recipeTab);
        displayData(recipeTab);
        generateDropBox(recipeTab);
        return false;
      });
      tagUstensilWrapper.appendChild(tagUstensilContainer);
      tagUstensilContainer.appendChild(deleteIconImg);
      search();
    });
  });
}

export function filteredRecipesWithTags(recipesToFilter) {
  /* Faire des tableaux des items afficher pour chaque filtre */
  const taggedIngredientsDOM = Array.from(
    document.querySelectorAll(".tag__ingredient")
  );

  const taggedAppliancesDOM = Array.from(
    document.querySelectorAll(".tag__appliance")
  );

  const taggedustensilsDOM = Array.from(
    document.querySelectorAll(".tag__ustensil")
  );
  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedUstensils = [];

  taggedIngredients = taggedIngredientsDOM.map(
    (taggedIngredient) => taggedIngredient.innerText
  );
  taggedAppliances = taggedAppliancesDOM.map(
    (taggedAppliance) => taggedAppliance.innerText
  );
  taggedUstensils = taggedustensilsDOM.map(
    (taggedUstensil) => taggedUstensil.innerText
  );

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

    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) =>
      ingredient.toLowerCase()
    );

    appliancesInTheRecipe.push(recipe.appliance.toLowerCase());

    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) =>
      ustensil.toLowerCase()
    );

    if (taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient.toLowerCase())) {
          ingredientsMatching += 1;
        }
      });
    }

    if (taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance.toLowerCase())) {
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

    if (
      ingredientIsMatching === true &&
      applianceIsMatching === true &&
      ustensilIsMatching === true
    ) {
      recipeIsMatching = true;
    }

    return recipeIsMatching;
  });
  generateDropBox(recipesToDisplay);
  return recipesToDisplay;
}
