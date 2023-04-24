const fontSizeControl = document.querySelector("input#font-size-control");
const textSize = document.querySelector("span#text");
const fontSizeText = document.querySelector("span#text-size");

// console.log(fontSizeControl.value);

fontSizeControl.addEventListener("input", () => {
    textSize.style.fontSize = fontSizeControl.value + "px";
});
