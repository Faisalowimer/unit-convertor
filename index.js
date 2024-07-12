/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("cta-btn")
//console.log(convertBtn)
const inputEl = document.getElementById("input-el")
//console.log(inputEl)
const lengthEl = document.getElementById("length-el")
//console.log(lengthEl)
const volumeEl = document.getElementById("volume-el")
//console.log(volumeEl)
const massEl = document.getElementById("mass-el")
//console.log(massEl)

const meterToFeet = 3.281
const literToGallons = 0.264
const kiloToPounds = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let getFeet = baseValue * meterToFeet
    let getMeter = baseValue/meterToFeet 
    
    lengthEl.textContent = `${baseValue} meters = ${getFeet.toFixed(3)} feet | ${baseValue} feet = ${getMeter.toFixed(3)} meters`
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let getGallons = baseValue * literToGallons
    let getLiter = baseValue/literToGallons
    
    volumeEl.textContent = `${baseValue} liters = ${getGallons.toFixed(3)} gallons | ${baseValue} gallons = ${getLiter.toFixed(3)} liters`
        
})

convertBtn.addEventListener("click", function () {
    let baseValue = inputEl.value
    let getPounds = baseValue * kiloToPounds
    let getKilos = baseValue/kiloToPounds
    
    massEl.textContent = `${baseValue} kilos = ${getPounds.toFixed(3)} pounds | ${baseValue} pounds = ${getKilos.toFixed(3)} kilos`
})