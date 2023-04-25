const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const emptyItleEl = document.querySelector("ul#ingredients");
console.log(emptyItleEl);

const newList = ingredients.map((element) => {
    const listEl = document.createElement("li");

    listEl.classList.add("item");
    listEl.textContent = element;

    return listEl;
});

emptyItleEl.append(...newList);

// const allIngredients = document.querySelector("ul#ingredients");
// // console.log(allIngredients);

// ingredients.forEach((element) => {
//     const liEl = document.createElement("li");
//     liEl.classList.add("item");
//     liEl.textContent = element;
//     allIngredients.append(liEl);
// });
