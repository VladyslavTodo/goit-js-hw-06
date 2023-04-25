const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (name) => {
    nameOutput.textContent = name.currentTarget.value;
    if (nameOutput.textContent === "") {
        nameOutput.textContent = "Anonymous";
    }
});
