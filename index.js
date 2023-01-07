/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputNumber = document.getElementById("input-number")
const convertContainerOne = document.getElementById("convert-container-one")
const convertContainerTwo = document.getElementById("convert-container-two")
const convertContainerThree = document.getElementById("convert-container-three")
const convertElOne = document.getElementById("convert-el-one")

const convertTable = {
    convertToFeet: 3.281,
    convertToGallon: 0.264,
    convertToPound: 2.204
}
 



convertBtn.addEventListener("click", function(){
    const inputValue = inputNumber.value
    convertValue(inputValue)
    console.log(convertedValues)
})

function convertValue(inpVal) {
    convertedValues = [
        inpVal * convertTable.convertToFeet,
        inpVal * convertTable.convertToGallon,
        inpVal * convertTable.convertToPound,
    ]
    
    convertElOne.textContent = `${inpval} meter = ${convertedValues[0]}`
    
}

convertValue(20)

/*

LOOK at this and make it easy

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
})

*/