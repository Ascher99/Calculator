const currentsNumber= document.querySelector('.currentNumber');


const previousNumber= document.querySelector('.x p');


const MathSign=document.querySelector('.operation');


const numberButtons=document.querySelectorAll('.number');


const operatorButtons= document.querySelectorAll('.operator');


const equalsButton=document.querySelector('.equals');


const clearButton= document.querySelector('.clear');


const calculatorHistory=document.querySelector('.history');


const historyBtn = document.querySelector('.history-btn');


let result = '';

function displayNumbers() {
    const clickedNumber = this.value;

    if (clickedNumber === ',' && currentsNumber.innerHTML.includes(',')) return;

    if (clickedNumber === ',' && currentsNumber.innerHTML === '') {
        currentsNumber.innerHTML = '0' + clickedNumber;
    } else {
        currentsNumber.innerHTML += clickedNumber;
    }
}


function operate () {
 if (currentsNumber.innerHTML === '' && this.textContent === '-'){
    currentsNumber.innerHTML = '-';
    return;
 }


 else if (currentsNumber.innerHTML === '') {
    return;
 }

 if(MathSign !== '') {
    showResult ();
 }
 previousNumber.innerHTML=currentsNumber.innerHTML;
 MathSign.innerHTML=this.textContent;
 currentsNumber.innerHTML='';
}

function showResult () {
if (previousNumber.innerHTML=== '' || currentsNumber.innerHTML ==='') 
return;

let a =parseFloat(currentsNumber.innerHTML);
let b =parseFloat(previousNumber.innerHTML);
let operator = MathSign.innerHTML;

switch (operator){
case '+':
    result= a+b;
    break;
case '-':
    result = b-a;
    break;
case '*':
    result= a*b;
    break;
case ':':
    result= b/a;
    break;
case '()2':
    result= b**a;
    break;

}

       console.log("Result:", result); // Dodaj ten wiersz

addToHistory();
historyBtn.classList.add('active');
currentsNumber.innerHTML=result;
previousNumber.innerHTML='';
MathSign.innerHTML = '';

}

function addToHistory() {
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML= `${currentsNumber.innerHTML} ${MathSign.innerHTML} ${previousNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem);
}

function clearHistory() {
calculatorHistory.textContent='';
if (calculatorHistory.textContent ==='') {
    historyBtn.classList.remove('active');
}

}



function clearScreen () {
result= '';
currentsNumber.innerHTML= '';
previousNumber.innerHTML= '';
MathSign.innerHTML='';



}





// nasluchiwanie

operatorButtons.forEach((button) => button.addEventListener('click',operate))

equalsButton.addEventListener('click',showResult);


clearButton.addEventListener('click',clearScreen);


numberButtons.forEach((button) => {
    button.addEventListener('click',displayNumbers)
})


historyBtn.addEventListener('click',clearHistory);
