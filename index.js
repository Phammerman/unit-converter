/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputNumber = document.getElementById("input-number")



convertBtn.addEventListener("click", function(){
    console.log(inputNumber.value + " kg = " + inputNumber.value * 2.204 + " pound") 
})