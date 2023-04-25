function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

// const widget = document.querySelector(".widget");
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const dodyColor = document.body;

changeColor.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    dodyColor.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});
