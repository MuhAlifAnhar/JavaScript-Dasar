const value = document.getElementById("value");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");

let counter = 0;

decrement.addEventListener("click", () => {
    counter--;
    value.textContent = counter;
});

increment.addEventListener("click", () => {
    counter++;
    value.textContent = counter;
});