
export class Recipe{

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

    /*Création de la carte de la recette*/
    createhtmlRecipeCard(){
        return`
        <div class="recipes__cards">
        <div class="imgcards__containers"></div>
        <div class="recipescards__containers">
        <h2>${this._name}</h2>
        <p><i class="fa-regular fa-clock"></i> ${this._time} min</p>
        <p>${this.createIngrediants()}</p>
        <p>${this._description}</p>
        </div>
        </div>`
    }

    /*Création de la liste des ingrediants pour l'affichache */
    createIngrediants(){
        let html = ""
        console.log(this._ingredients)
        this._ingredients.forEach(element => {
            console.log(element)
            
            let ingredient = ""
            let quantity = ""
            let unit = ""
            if(element.unit){
                unit = element.unit
            }
            if(element.quantity){
                quantity = element.quantity
            }
            html += `${element.ingredient} : ${quantity}${unit}`
        });
        console.log(html)
        return html
    }

}