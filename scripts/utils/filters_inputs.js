export function getSearchIngredients() {
  const filterRender = document.querySelectorAll(
    ".filter__ingredients--list li"
  );
  const ingredientsList = document.querySelectorAll(
    ".filter__ingredients--items"
  );
  const searchQuery = document.querySelector(
    ".filter__ingredients--input"
  ).value;
  ingredientsList.forEach((ingredient) => {
    if (
      ingredient.innerText.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      ingredient.classList.remove("is-hidden");
    } else {
      ingredient.classList.add("is-hidden");
    }
  });
  return filterRender;
}

export function inputIngredient() {
  const searchInputIngredient = document.querySelectorAll(
    ".filter__ingredients--input"
  );
  let typingTimer;
  const typeInterval = 100;
  searchInputIngredient[0].addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}

export function getSearchAppliances() {
  const filterRender = document.querySelectorAll(
    ".filter__appliances--list li"
  );
  const appliancesList = document.querySelectorAll(
    ".filter__appliances--items"
  );
  const searchQuery = document.querySelector(
    ".filter__appliances--input"
  ).value;

  appliancesList.forEach((appareils) => {
    if (appareils.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      appareils.classList.remove("is-hidden");
    } else {
      appareils.classList.add("is-hidden");
    }
  });
  return filterRender;
}

export function inputAppliance() {
  const searchInputAppliance = document.querySelectorAll(
    ".filter__appliances--input"
  );
  let typingTimer;
  const typeInterval = 100;
  searchInputAppliance[0].addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchAppliances, typeInterval);
  });
}

export function getSearchUstensils() {
  const filterRender = document.querySelectorAll(".filter__ustensils--list li");
  const ustensilsList = document.querySelectorAll(".filter__ustensils--items");
  const searchQuery = document.querySelector(".filter__ustensils--input").value;

  ustensilsList.forEach((ustensils) => {
    if (ustensils.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      ustensils.classList.remove("is-hidden");
    } else {
      ustensils.classList.add("is-hidden");
    }
  });
  return filterRender;
}

export function inputUstensil() {
  const searchInputUstensil = document.querySelector(
    ".filter__ustensils--input"
  );
  let typingTimer;
  const typeInterval = 100;
  searchInputUstensil.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchUstensils, typeInterval);
  });
}
