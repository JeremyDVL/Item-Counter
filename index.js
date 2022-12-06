let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

console.log(countEl)

let count = 0
let total = 0

function increment() {
    count += 1;
    countEl.innerText = count
    total += 1;
    totalEl.textContent = "Running Total: " + total
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}

let name = "User"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👏"




