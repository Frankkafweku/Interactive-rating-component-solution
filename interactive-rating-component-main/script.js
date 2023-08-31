// ratings
const rate1 = document.getElementById("rate-1")
const rate2 = document.getElementById("rate-2")
const rate3 = document.getElementById("rate-3")
const rate4 = document.getElementById("rate-4")
const rate5 = document.getElementById("rate-5")


// variable for submit button
const submitBtn = document.getElementById("submit-btn")

// varible for the span containing how the user has rated.

let span = document.getElementById("span")

// variable for the error message
const errorMsg = document.getElementById("error")


let rateBtn = document.getElementsByClassName("num-divs")
let rated = 0;

for (let i=0; i<rateBtn.length; i++){
    rateBtn[i].addEventListener('click', ()=>{
      rated = rateBtn[i].value;
      rateBtn[i].classList.add("button-clicked");
      span.innerHTML=rated
      
    })
}




function clicked(){
    
    if(rated > 0){
        window.location.href="succsess.html"
        
    } else{
        
        errorMsg.innerText = "Please select a rating!"
        
        
    }
    
    
   
}

submitBtn.addEventListener('click', clicked );