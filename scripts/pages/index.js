
async function getRecipes() {
        const data = await fetch("./data/recipes.json") 
        .then((res)=> res.json())
        .then((data) =>{
            return data
        } )
    return data  
}

async function displayData(data) {
    const recipesSectionCards = document.querySelector(".recipes__cards--all");
    data.forEach((recipes) => {
        const recipesModel = new Recipes(recipes);
        const recipesCardDOM = recipesModel.createhtmlRecipesCards();
        recipesSectionCards.innerHTML=recipesSectionCards.innerHTML+(recipesCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const  recipes  = await getRecipes();
    displayData(recipes);
}

init();
