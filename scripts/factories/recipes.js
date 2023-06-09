export class Recipe {
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

  /*Création de la carte de la recette*/
  createhtmlRecipeCard() {
    return `
        <div class="recipes__cards">
            <div class="imgcards__containers"></div>
            <div class="recipescards__containers">
                <div class="header__cards">
                    <h2 class="title__cards text__Lato">${this._name}</h2>
                    <p class="timer__cards text__Lato"><i class="fa-sharp fa-regular fa-clock"></i> ${
                      this._time
                    } min</p>
                </div>
                <div class="info__cards">
                    <p class="ingrediants__cards text__Lato">${this.createIngrediants()}</p>
                    <p class="description__cards text__Roboto">${
                      this._description
                    }</p>
                </div>
            </div>
        </div>`;
  }

  /*Création de la liste des ingrediants pour l'affichache */
  createIngrediants() {
    let html = "";
    this._ingredients.forEach((element) => {
      let quantity = "";
      let unit = "";
      if (element.unit) {
        unit = element.unit;
      }
      if (element.quantity) {
        quantity = element.quantity;
      }
      html += `${element.ingredient} : ${quantity}${unit} <br>`;
    });
    return html;
  }

  filterIngredients() {
    return `
        <div>
            <div>
                <h2>Ingredients</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <i class="fa-solid fa-chevron-up"></i>
            <input placeholder="Sélectionner un ingredients..." class="filter__ingredients--input" data-np-intersection-state="visible" style="display: none;">


        </div>`;
  }
  filterAppareils() {
    return `
        <div>
            <div>
                <h2>Appareils</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <i class="fa-solid fa-chevron-up"></i>
            <input placeholder="Sélectionner un Appareils..." class="filter__Appareils--input" data-np-intersection-state="visible" style="display: none;">


        </div>`;
  }
  filterUstensils() {
    return `
        <div>
            <div>
                <h2>Ustensils</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <i class="fa-solid fa-chevron-up"></i>
            <input placeholder="Sélectionner un Ustensils..." class="filter__Ustensils--input" data-np-intersection-state="visible" style="display: none;">


        </div>`;
  }
}
