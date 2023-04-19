export class FilterInterface{

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

    filterIngredients(){
        return`
        <div>
            <div>
                <h2>Ingredients</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <i class="fa-solid fa-chevron-up"></i>
            <input placeholder="Sélectionner un ingredients..." class="filter__ingredients--input" data-np-intersection-state="visible" style="display: none;">

        </div>`
    }
    filterAppareils(){
        return`
        <div>
            <div>
                <h2>Appareils</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <i class="fa-solid fa-chevron-up"></i>
            <input placeholder="Sélectionner un Appareils..." class="filter__Appareils--input" data-np-intersection-state="visible" style="display: none;">

        </div>`
    }
    filterUstensils(){
        return`
        <div>
            <div>
                <h2>Ustensils</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <i class="fa-solid fa-chevron-up"></i>
            <input placeholder="Sélectionner un Ustensils..." class="filter__Ustensils--input" data-np-intersection-state="visible" style="display: none;">

        </div>`
    }
}

/*deuxième avec boucle for*/