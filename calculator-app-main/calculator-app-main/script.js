var keypadNumbers = document.querySelectorAll('.number-btn');
var displayNumbers = document.querySelector('.display');
var operator = document.querySelectorAll('.operator-btn');
var buttons = document.querySelectorAll('.typable');
var charArr = [];
var typableArr = [];


buttons.forEach(btn => {
    var x = btn.innerText;
    btn.addEventListener("click", function(){
        typableArr.push(x);
        displayNumbers.innerText = typableArr.join('');
        console.log(typableArr);
    })
})


document.getElementById('delete-btn').addEventListener("click", function(){
    displayNumbers.innerText = (displayNumbers.innerText).slice(0,-1);
    typableArr.pop();
    console.log(typableArr);
})

document.getElementById('reset-btn').addEventListener("click", function(){
    charArr = [];
    typableArr = [];
    displayNumbers.innerText = '';
    console.log(typableArr);
})


function calculator() {
    charArr = (displayNumbers.innerText).split("");
    var result = 0;
    if (charArr[1] == '+'){
        result = parseInt(charArr[0]) + parseInt(charArr[2]);
    }

    if (charArr[1] == '-'){
        result = parseInt(charArr[0]) - parseInt(charArr[2]);
    }

    if (charArr[1] == '*'){
        result = parseInt(charArr[0]) * parseInt(charArr[2]);
    }

    if (charArr[1] == '/'){
        result = parseInt(charArr[0]) / parseInt(charArr[2]);
    }
    return result;
}

document.getElementById('equals-btn').addEventListener('click', function() {
    displayNumbers.innerText = calculator();
})