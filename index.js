

const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
console.log(inputEl)

const lenghtEl = document.getElementById("lenght-el")
const volumeEl = document.getElementById("volume-el")
const weightEl = document.getElementById("weight-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

 



convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    
    if (isNaN(baseValue)) {
        alert("Enter a number")
    } else {
        lenghtEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter`
        volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} galon | ${baseValue} galon = ${(baseValue / literToGallon).toFixed(3)} liter`
        weightEl.textContent = `${baseValue} kilogram = ${(baseValue * kiloToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilogram`
    }




})

