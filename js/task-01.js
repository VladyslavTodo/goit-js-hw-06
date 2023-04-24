const allCategories = document.querySelectorAll("ul#categories .item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((element) => {
    // console.log(element);
    console.log(
        `Category: ${
            element.querySelector("ul#categories .item h2").textContent
        }`
    );
    console.log(
        `Elements: ${
            element.querySelectorAll("ul#categories .item ul li").length
        }`
    );
});
// console.log(allCategories);
