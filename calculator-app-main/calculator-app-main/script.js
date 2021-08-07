var keypadNumbers = document.querySelectorAll('.number-btn');
var displayNumbers = document.querySelector('.output-value');
var previewNumbers = document.querySelector('.calculation-value');
var operator = document.querySelectorAll('.operator-btn');
var numberButtons = document.querySelectorAll('.number-btn');
var equalButton = document.getElementById('equals-btn');
var deleteButton = document.getElementById('delete-btn');
var previewArr = [];

function calculator(first, second, op){
    var result;
    if (op === "+"){
        result = parseFloat(first) + parseFloat(second);
    }

    if (op === "-"){
        result = parseFloat(first) - parseFloat(second);
    }

    if (op === "*"){
        result = parseFloat(first) * parseFloat(second);
    }

    if (op === "/"){
        result = parseFloat(first) / parseFloat(second);
    }

    return result;
}


numberButtons.forEach(btn => {
    
    btn.addEventListener("click", function(){
    
        if (displayNumbers.innerText === '0'){
            displayNumbers.innerText = btn.innerText;
        }

        else {
            displayNumbers.innerText = displayNumbers.innerText + btn.innerText;
        }

        previewArr.push(btn.innerText);

        previewNumbers.innerText = previewArr.join('');
        console.log(previewArr);
        
    })
})


document.querySelector('.decimal-btn').addEventListener("click", function(){

    if (displayNumbers.innerText === '0'){
        displayNumbers.innerText = this.innerText;
    }
    else {
        displayNumbers.innerText = displayNumbers.innerText + this.innerText;
    }
    previewArr.push('.');

    previewNumbers.innerText = previewArr.join('');

    
})


deleteButton.addEventListener("click", function(){
    if (delCount >= 1){
        displayNumbers.innerText = 0;
    }
    else{
        displayNumbers.innerText = (displayNumbers.innerText).slice(0,-1);

    }
    console.log(delCount);
    previewArr = [];
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
        delCount = 0;

        previewArr.push(btn.innerText);

        previewNumbers.innerText = previewArr.join('');
    })
})

var delCount = 0;
var equalCount = 0;
equalButton.addEventListener("click", function(){
    
    if (equalCount === 0) {
        secondNumberForMultipleEqual = displayNumbers.innerText;
        secondNumber = displayNumbers.innerText;
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(currentOperator);
        displayNumbers.innerText = calculator(firstNumber, secondNumber, currentOperator);
        count = 0;
        
    }
    else {
        firstNumberForMultipleEqual = displayNumbers.innerText;
        displayNumbers.innerText = calculator(firstNumberForMultipleEqual, secondNumberForMultipleEqual, currentOperator);
        console.log(previewArr);
    }
    
    previewArr = [];
    previewArr.push(displayNumbers.innerText);
    previewNumbers.innerText = previewArr.join('');
    console.log(previewArr);
    
    delCount += 1;
    equalCount += 1;
    
})


document.getElementById('reset-btn').addEventListener("click", function(){
    displayNumbers.innerText = '0';
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = '';
    count = 0;
    delCount = 0;
    equalCount = 0; 
    previewArr = [];
    previewNumbers.innerText = '';

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