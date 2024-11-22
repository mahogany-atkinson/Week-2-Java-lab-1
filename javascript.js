"use strict";
let allnumber = [2, 45, 151, 4, 52, 58]; // All numbers array
let evennumbersfilter = allnumber.filter((num) => num % 2 === 0); // Even numbers array 
console.log(allnumber, evennumbersfilter);
let allnumberul = document.getElementById("allnumbers")
allnumber.forEach(num => {
    allnumberul.innerHTML+=`<li>${num}</li>`
})
let evennumberul = document.getElementById("evennumbers")
evennumbersfilter.forEach(num => {
    evennumberul.innerHTML+=`<li>${num}</li>`
})