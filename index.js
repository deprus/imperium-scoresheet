let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function incrementone() {
    count += 1
    countEl.textContent = count
}

function incrementtwo() {
    count += 2
    countEl.textContent = count
}

function incrementthree() {
    count += 3
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
