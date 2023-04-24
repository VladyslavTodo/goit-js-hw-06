const addOneNumber = document.querySelector('[data-action="increment"]');
const removeOneNumber = document.querySelector('[data-action="decrement"]');
const numberValue = document.querySelector("#value");
let counterValue = 0;

// console.log(addOneNumber);
// console.log(removeOneNumber);
// console.log(counterValue);

addOneNumber.addEventListener("click", () => {
    counterValue += 1;
    numberValue.innerText = counterValue;
    // console.log(counterValue);
});

removeOneNumber.addEventListener("click", () => {
    counterValue -= 1;
    numberValue.innerText = counterValue;
    // console.log(counterValue);
});
