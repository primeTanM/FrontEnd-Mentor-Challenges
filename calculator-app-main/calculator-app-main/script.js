var keypadNumbers = document.querySelectorAll('.number-btn');
var displayNumbers = document.querySelector('.output-value');
var operator = document.querySelectorAll('.operator-btn');
var numberButtons = document.querySelectorAll('.number-btn');
var equalButton = document.getElementById('equals-btn');

function calculator(){
    var result;
    if (currentOperator === "+"){
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    }

    if (currentOperator === "-"){
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    }

    if (currentOperator === "*"){
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }

    if (currentOperator === "/"){
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    return result.toFixed(2);
}


numberButtons.forEach(btn => {
    
    btn.addEventListener("click", function(){
    
        if (displayNumbers.innerText === '0'){
            displayNumbers.innerText = btn.innerText;
        }

        else {
            displayNumbers.innerText = displayNumbers.innerText + btn.innerText;
        }

        
    })
})


document.querySelector('.decimal-btn').addEventListener("click", function(){

    if (displayNumbers.innerText === '0'){
        displayNumbers.innerText = this.innerText;
    }
    else {
        displayNumbers.innerText = displayNumbers.innerText + this.innerText;
    }

    
})

document.getElementById('reset-btn').addEventListener("click", function(){
    displayNumbers.innerText = '0';
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = '';
    count = 0;

})

// var firstNumber = 0;
// var currentOperator = 0;
// var secondNumber = 0;
var count = 0;
operator.forEach(btn => {

    btn.addEventListener("click", function(){  
        if (count === 0){
        firstNumber = displayNumbers.innerText;
        currentOperator = btn.innerText;
        displayNumbers.innerText = '';
        console.log(currentOperator);
        console.log(firstNumber);
        } 
        
        count = count + 1;
    })
})


equalButton.addEventListener("click", function(){
    secondNumber = displayNumbers.innerText;
    console.log(secondNumber);
    console.log(currentOperator);
    displayNumbers.innerText = calculator();
    count = 0;
    
})






// document.getElementById('delete-btn').addEventListener("click", function(){
//     displayNumbers.innerText = (displayNumbers.innerText).slice(0,-1);
//     typableArr.pop();
//     console.log(typableArr);
// })

// document.getElementById('reset-btn').addEventListener("click", function(){
//     charArr = [];
//     typableArr = [];
//     displayNumbers.innerText = '';
//     console.log(typableArr);
// })


// function calculator() {
//     charArr = (displayNumbers.innerText).split("");
//     var result = 0;
//     if (charArr[1] == '+'){
//         result = parseFloat(charArr[0]) + parseFloat(charArr[2]);
//     }

//     if (charArr[1] == '-'){
//         result = parseFloat(charArr[0]) - parseFloat(charArr[2]);
//     }

//     if (charArr[1] == '*'){
//         result = parseFloat(charArr[0]) * parseFloat(charArr[2]);
//     }

//     if (charArr[1] == '/'){
//         result = parseFloat(charArr[0]) / parseFloat(charArr[2]);
//     }
//     return result;
// }

// document.getElementById('equals-btn').addEventListener('click', function() {
//     typableArr = [];
//     displayNumbers.innerText = calculator();
//     typableArr.push(displayNumbers.innerText);
//     console.log(typableArr);
// })