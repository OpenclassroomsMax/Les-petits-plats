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
        <div class="filter__ingredients--bloc">
            <h2 class="filter__ingredients--title text__Lato" style="display: flex;">Ingredients</h2>
            <i class="fa-solid fa-chevron-down filter__ingredients--chevronDown" style="display: flex;"></i>
            <i class="fa-solid fa-chevron-up filter__ingredients--chevronUp" style="display: none;"></i>
            <input placeholder="Sélectionner un ingredients..." class="filter__ingredients--input" data-np-intersection-state="visible" style="display: none;">
            <ul class="filter__ingredients--list" style="display: none;"></ul>
        </div>`
    }
    filterIngredientsEvent(){
        const BlocIngredients = document.querySelector('.filter__ingredients--bloc');
        const titleIngredients = document.querySelector('.filter__ingredients--title');
        const chevronDownIngredients = document.querySelector('.filter__ingredients--chevronDown');
        const chevronUpIngredients = document.querySelector('.filter__ingredients--chevronUp');
        const inputIngredients = document.querySelector('.filter__ingredients--input');
        const listIngredients = document.querySelector('.filter__ingredients--list');

        chevronDownIngredients.addEventListener('click', (e) => {
            if (e.target.className === 'fa-solid fa-chevron-down filter__ingredients--chevronDown') {
                BlocIngredients.classList.remove('filter__ingredients--bloc');
                BlocIngredients.classList.add('filter__ingredients--view');
                titleIngredients.style.display = 'none';
                chevronDownIngredients.style.display = 'none';
                inputIngredients.style.display = 'flex';
                chevronUpIngredients.style.display = 'flex';
                listIngredients.style.display = 'flex';
                inputIngredients.focus();
              
            }
            
        });
        chevronUpIngredients.addEventListener('click', (e) => {
            if (e.target.className === 'fa-solid fa-chevron-up filter__ingredients--chevronUp') {
                BlocIngredients.classList.remove('filter__ingredients--view');
                BlocIngredients.classList.add('filter__ingredients--bloc');
                titleIngredients.style.display = 'flex';
                inputIngredients.style.display = 'none';
                chevronDownIngredients.style.display = 'flex';
                chevronUpIngredients.style.display = 'none';
                Bloc.style.width = '170px';
                listIngredients.style.display = 'none';
        
            }
          });
        return (BlocIngredients)
    }
    filterAppareils(){
        return`
        <div class="filter__appliances--bloc">
            <h2 class="filter__appliances--title text__Lato" style="display: flex;">Appareils</h2>
            <i class="fa-solid fa-chevron-down filter__appliances--chevronDown" style="display: flex;"></i>
            <i class="fa-solid fa-chevron-up filter__appliances--chevronUp" style="display: none;"></i>
            <input placeholder="Sélectionner un appareils..." class="filter__appliances--input" data-np-intersection-state="visible" style="display: none;">
            <ul class="filter__appliances--list" style="display: none;"></ul>
        </div>`
    }
    filterAppliancesEvent(){
        const BlocAppliances = document.querySelector('.filter__appliances--bloc');
        const titleAppliances = document.querySelector('.filter__appliances--title');
        const chevronDownAppliances = document.querySelector('.filter__appliances--chevronDown');
        const chevronUpAppliances = document.querySelector('.filter__appliances--chevronUp');
        const inputAppliances = document.querySelector('.filter__appliances--input');
        const listAppliances = document.querySelector('.filter__appliances--list');

        chevronDownAppliances.addEventListener('click', (e) => {
            if (e.target.className === 'fa-solid fa-chevron-down filter__appliances--chevronDown') {
                BlocAppliances.classList.remove('filter__appliances--bloc');
                BlocAppliances.classList.add('filter__appliances--view');
                titleAppliances.style.display = 'none';
                chevronDownAppliances.style.display = 'none';
                inputAppliances.style.display = 'flex';
                chevronUpAppliances.style.display = 'flex';
                listAppliances.style.display = 'flex';
                inputAppliances.focus();
              
            }
            
        });
        chevronUpAppliances.addEventListener('click', (e) => {
            if (e.target.className === 'fa-solid fa-chevron-up filter__appliances--chevronUp') {
                BlocAppliances.classList.remove('filter__appliances--view');
                BlocAppliances.classList.add('filter__appliances--bloc');
                titleAppliances.style.display = 'flex';
                inputAppliances.style.display = 'none';
                chevronDownAppliances.style.display = 'flex';
                chevronUpAppliances.style.display = 'none';
                Bloc.style.width = '170px';
                listAppliances.style.display = 'none';
        
            }
          });
          return (BlocAppliances)
    }
    filterUstensils(){
        return`
        <div class="filter__ustensils--bloc">
            <h2 class="filter__ustensils--title text__Lato" style="display: flex;">Ustensiles</h2>
            <i class="fa-solid fa-chevron-down filter__ustensils--chevronDown" style="display: flex;"></i>
            <i class="fa-solid fa-chevron-up filter__ustensils--chevronUp" style="display: none;"></i>
            <input placeholder="Sélectionner un ustensils..." class="filter__ustensils--input" data-np-intersection-state="visible" style="display: none;">
            <ul class="filter__ustensils--list" style="display: none;"></ul>
        </div>`
    }
    filterUstensilsEvent(){
        const BlocUstensils = document.querySelector('.filter__ustensils--bloc');
        const titleUstensils = document.querySelector('.filter__ustensils--title');
        const chevronDownUstensils = document.querySelector('.filter__ustensils--chevronDown');
        const chevronUpUstensils = document.querySelector('.filter__ustensils--chevronUp');
        const inputUstensils = document.querySelector('.filter__ustensils--input');
        const listUstensils = document.querySelector('.filter__ustensils--list');

        chevronDownUstensils.addEventListener('click', (e) => {
            if (e.target.className === 'fa-solid fa-chevron-down filter__ustensils--chevronDown') {
                BlocUstensils.classList.remove('filter__ustensils--bloc');
                BlocUstensils.classList.add('filter__ustensils--view');
                titleUstensils.style.display = 'none';
                chevronDownUstensils.style.display = 'none';
                inputUstensils.style.display = 'flex';
                chevronUpUstensils.style.display = 'flex';
                listUstensils.style.display = 'flex';
                inputUstensils.focus();
              
            }
            
        });
        chevronUpUstensils.addEventListener('click', (e) => {
            if (e.target.className === 'fa-solid fa-chevron-up filter__ustensils--chevronUp') {
                BlocUstensils.classList.remove('filter__ustensils--view');
                BlocUstensils.classList.add('filter__ustensils--bloc');
                titleUstensils.style.display = 'flex';
                inputUstensils.style.display = 'none';
                chevronDownUstensils.style.display = 'flex';
                chevronUpUstensils.style.display = 'none';
                Bloc.style.width = '170px';
                listUstensils.style.display = 'none';
        
            }
          });
          return (BlocUstensils)
    }

}
