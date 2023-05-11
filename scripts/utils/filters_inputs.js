function getSearchIngredients() {

    const filterRender = document.querySelectorAll('.filter__ingredients--list li');
    const cards = document.querySelectorAll('.filter__ingredients--items');
    const searchQuery = document.querySelectorAll('.filter__ingredients--input').value;
  
    cards.forEach((card) => {
      if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
    return (filterRender);
  }
  

  function inputIngredient() {
    const searchInputIngredient = document.querySelectorAll('.filter__ingredients--input');
    searchInputIngredient.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(getSearchIngredients, typeInterval);
    });
  }