const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const emptyItleEl = document.querySelector("ul#ingredients");
// console.log(emptyItleEl);

// function createListEl(list) {
//     const newList = list.map((element) => {
//         const listEl = document.createElement("li");

//         listEl.classList.add("item");
//         listEl.textContent = element;

//         return listEl;
//     });

//     return newList;
// }

// console.log(createListEl(ingredients));

// emptyItleEl.append(...createListEl(ingredients));


const allIngredients = document.querySelector("ul#ingredients");
// console.log(allIngredients);

ingredients.forEach((element) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = element;
    allIngredients.append(liEl);
});