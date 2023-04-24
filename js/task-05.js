const NameInput = document.querySelector("input#name-input");
const NameOutput = document.querySelector("span#name-output");

NameInput.addEventListener("input", (name) => {
    NameOutput.textContent = name.currentTarget.value;
    if (NameOutput.textContent === "") {
        NameOutput.textContent = "Anonymous";
    }
});
