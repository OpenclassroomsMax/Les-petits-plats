export function getSearchIngredients() {

  const filterRender = document.querySelectorAll('.filter__ingredients--list li');
  const cards = document.querySelectorAll('.filter__ingredients--items');
  const searchQuery = document.querySelectorAll('.filter__ingredients--input');
  console.log(searchQuery.length);
  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes()) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
    

  });
  return (filterRender);
  console.log(inputIngredientBar);
}


export function inputIngredient() {
  const searchInputIngredient = document.querySelectorAll('.filter__ingredients--input');
  let typingTimer;
  const typeInterval = 100;
  searchInputIngredient[0].addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}