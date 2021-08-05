function previousValue(){
    return document.querySelector('.calculation-value').innerText;
}

function setPreviousValue(){
    document.querySelector('.calculation-value').innerText = num;
}

function getResult() {
    return document.querySelector('.output-value').innerText;
}

function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}

