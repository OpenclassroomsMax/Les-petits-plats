export class FilterInterface {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._servings = data.servings;
    this._ingredients = data.ingredients;
    this._time = data.time;
    this._description = data.description;
    this._appliance = data.appliance;
    this._ustensils = data.ustensils;
  }

  filterIngredients() {
    return `
        <div class="filter__ingredients--bloc">
            <h2 class="filter__ingredients--title text__Lato" style="display: flex;">Ingredients</h2>
            <i class="fa-solid fa-chevron-down filter__ingredients--chevronDown" style="display: flex;"></i>
            <div class = "header__filtre--ingredients">
                <input placeholder="Sélectionner un ingredients..." class="filter__ingredients--input" data-np-intersection-state="visible" style="display: none;">
                <i class="fa-solid fa-chevron-up filter__ingredients--chevronUp" style="display: none;"></i>
            </div>
            <ul class="filter__ingredients--list text__Lato" style="display: none;"></ul>
        </div>`;
  }

  filterAppareils() {
    return `
        <div class="filter__appliances--bloc">
            <h2 class="filter__appliances--title text__Lato" style="display: flex;">Appareils</h2>
            <i class="fa-solid fa-chevron-down filter__appliances--chevronDown" style="display: flex;"></i>
            <div class = "header__filtre--appliances">
                <input placeholder="Sélectionner un appareils..." class="filter__appliances--input" data-np-intersection-state="visible" style="display: none;">
                <i class="fa-solid fa-chevron-up filter__appliances--chevronUp" style="display: none;"></i>
            </div>
            <ul class="filter__appliances--list text__Lato" style="display: none;"></ul>
        </div>`;
  }

  filterUstensils() {
    return `
        <div class="filter__ustensils--bloc">
            <h2 class="filter__ustensils--title text__Lato" style="display: flex;">Ustensiles</h2>
            <i class="fa-solid fa-chevron-down filter__ustensils--chevronDown" style="display: flex;"></i>
            <div class = "header__filtre--ustensils">
                <input placeholder="Sélectionner un ustensils..." class="filter__ustensils--input" data-np-intersection-state="visible" style="display: none;">
                <i class="fa-solid fa-chevron-up filter__ustensils--chevronUp" style="display: none;"></i>
            </div>
            <ul class="filter__ustensils--list text__Lato" style="display: none;"></ul>
        </div>`;
  }
}
