//initializing variables to be used
var billAmount;
var tipPercent = 5;
var numberOfPeople;


//getting the value of bill
document.getElementById("bill-id").addEventListener('input', function(){
    billAmount = parseFloat(this.value, 10);
    calculateResult();
})

//getting the value of tip percentage

document.querySelectorAll(".tip-btn").forEach(btn => {
    btn.addEventListener("click", handleClick)
})

// tipPercent = parseInt(this.innerText, 10);
// btn.classList.remove('btn-active');


function handleClick(event) {
    document.querySelectorAll(".tip-btn").forEach(btn => {
        btn.classList.remove('btn-active');
        if(event.target.innerText == btn.innerText){
            btn.classList.add('btn-active');
            tipPercent = parseInt(this.innerText, 10);
        }
    })

    calculateResult();
}


document.getElementById("tip-id").addEventListener('input', function(){
    tipPercent = parseFloat(this.value, 10);
    document.querySelectorAll('.tip-btn').forEach( btn =>{
        btn.classList.remove('btn-active');
    })
    calculateResult();
})


//getting the number of people
document.getElementById("people-id").addEventListener('input', function(){
    numberOfPeople = parseInt(this.value, 10);
    calculateResult();
})


//functions to calculate tip and total amount per person
function calculateResult() {
    if (numberOfPeople >= 1) {
        tip =  (billAmount * (tipPercent/100)) / numberOfPeople;
        amountPerPerson = billAmount/ numberOfPeople + tip;
        tip = tip.toFixed(2);
        amountPerPerson = amountPerPerson.toFixed(2);
    
        document.querySelectorAll('.display2-number')[0].innerText = '$' + tip;
        document.querySelectorAll('.display2-number')[1].innerText = '$' + amountPerPerson;
    }
    
}

function reset(){
    billAmount = 0;
    numberOfPeople = 0;
    tipPercent = 0;
    document.querySelectorAll('.tip-btn')[0].click();
    document.querySelectorAll('.bill-input')[0].value = 0;
    document.querySelectorAll('.bill-input')[1].value = 0;
    document.querySelectorAll('.display2-number')[0].innerText = '$0.00';
    document.querySelectorAll('.display2-number')[1].innerText = '$0.00';
}


document.querySelector('.reset-btn').addEventListener("click", function() {
    reset();
});
// function reset() {
    
// }



// document.getElementsByClassName('.display2-number').innerHTML = calculateTip();

// var tipDisplay = calculateTip();
// var amountDisplay = calculateAmount();





// function tipPerPerson(tipAmount,numberOfPeople)