let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//console.log(countEl)
let count = 0
console.log(saveEl)

function increment() {

    count = count + 1 //count += 1 same thing
    countEl.innerText = count
    //console.log(count)
}
function save() {
    let countStr = count + " - "

    saveEl.innerHTML += countStr
    countEl.innertext = 0
    count = 0

    //console.log(count)

}
function reset() {
    countEl.reset
    saveEl.reset
}
