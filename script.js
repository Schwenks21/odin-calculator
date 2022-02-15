const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear');
const negativeButton = document.querySelector('#negative');
const percentageButton = document.querySelector('#percentage');
let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operatorName = "";

function addNumbers (x, y) {
    return x + y;
}

function subtractNumbers (x, y) {
    return x - y;
}

function multiplyNumbers (x, y) {
    return x * y;
}

function divideNumbers (x, y) {
    return x/y;
}

function operate (operator, x, y) {
    operator = operatorName;
    x = firstNumber;
    y = Number(displayValue);
    switch (operator) {
        case "add":
            displayValue = addNumbers(x, y);
            display.textContent = displayValue;
            break;
        case "subtract":
            displayValue = subtractNumbers(x, y);
            display.textContent = displayValue;
            break;
        case "multiply":
            displayValue = multiplyNumbers(x, y);
            display.textContent = displayValue;
            break;
        case "divide":
            displayValue = divideNumbers(x, y);
            display.textContent = displayValue;
            break;
    }
}
//display number button when clicked

numberButtons.forEach(button => {
    button.addEventListener('click', populateDisplay)
});

//if input is 0, make display equal to number button clicked.  If input is
//already a number, then add that number into a string"
function populateDisplay() {
    if (!displayValue) {
        displayValue = this.textContent;
    } else {
        displayValue += this.textContent;
    }
    display.textContent = displayValue;
}

//when an operator button is clicked, store the number, clear the input, and 
//store the operator
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        firstNumber = Number(displayValue);
        operatorName = button.id;
        displayValue = "";
    });
});

//equal button will operate with given operator and value
//firstNumber, if not empty, and current input value
equalsButton.addEventListener('click', operate);

//clear button when clicked will clear display and input values
clearButton.addEventListener('click', () => {
    display.innerText = 0;
    displayValue = "";
    firstNumber = "";
    operatorName = "";
})

negativeButton.addEventListener('click', () => {
    displayValue = displayValue*-1;
    display.innerText = displayValue;
})

percentageButton.addEventListener('click', () => {
    displayValue = displayValue/100;
    display.innerText = displayValue;
})