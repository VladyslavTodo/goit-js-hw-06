function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

// const widget = document.querySelector(".widget");
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const dodyColor = document.querySelector("body");

changeColor.addEventListener("click", () => {
    dodyColor.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
});
