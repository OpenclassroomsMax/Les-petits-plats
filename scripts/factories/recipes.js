class Recipes{

    constructor(data){
        this._id = data.id
        this._name = data.name
        this._servings = data.servings
        this._ingredients = data.ingredients
        this._time = data.time
        this._description = data.description
        this._appliance = data.appliance
        this._ustensils = data.ustensils
    }

    createhtmlRecipesCards(){
        return`
        <div class="recipes__cards">
        <div class="imgcards__containers"></div>
        <div class="recipescards__containers">
        <h2>${this._name}</h2>
        <p><i class="fa-regular fa-clock"></i> ${this._time} min</p>
        <p>${this._ingredients}</p>
        <p>${this._description}</p>
        </div>
        </div>`
    }

}