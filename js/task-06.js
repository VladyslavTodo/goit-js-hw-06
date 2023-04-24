const trySymbols = document.querySelector("#validation-input");

// console.log(validationtrySymbols !== totalLenght);

trySymbols.addEventListener("blur", () => {
    const validationSymbols = trySymbols.value.length;
    const lenghtSymbols = Number(trySymbols.getAttribute("data-length"));

    if (validationSymbols === lenghtSymbols) {
        trySymbols.classList.add("valid");
        trySymbols.classList.remove("invalid");
    } else {
        trySymbols.classList.add("invalid");
        trySymbols.classList.remove("valid");
    }
});
