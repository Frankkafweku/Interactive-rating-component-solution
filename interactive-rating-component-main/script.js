// ratings
const rate1 = document.getElementById("rate-1")
const rate2 = document.getElementById("rate-2")
const rate3 = document.getElementById("rate-3")
const rate4 = document.getElementById("rate-4")
const rate5 = document.getElementById("rate-5")

let rateBtn = document.getElementsByClassName("num-divs")
let rated = 0;

for (let i=0; i<rateBtn.length; i++){
    rateBtn[i].addEventListener('click', ()=>{
      rated = rateBtn[i].value;
    })
}

// variable for submit button
const submitBtn = document.getElementById("submit-btn")




function clicked(){
    rate1.classList.add("button-clicked")
    rating = rate1.value
    console.log(rating);
}

let rating = 0;
rate1.addEventListener('click', clicked );