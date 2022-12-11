const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredients.textContent = el;
});