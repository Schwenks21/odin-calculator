const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear');
const negativeButton = document.querySelector('#negative');
const percentageButton = document.querySelector('#percentage');
const decimalButton = document.querySelector('#decimal');
const backspaceButton = document.querySelector('#backspace')
let displayValue = "";
let currentNumber = "";
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
    //confirm both variables are still numbers to prevent errors
    x = Number(currentNumber);
    y = Number(displayValue);
    switch (operator) {
        case "add":
            display.textContent = addNumbers(x,y);
            break;
        case "subtract":
            display.textContent = subtractNumbers(x,y);
            break;
        case "multiply":
            display.textContent = multiplyNumbers(x,y);
            break;
        case "divide":
            display.textContent = divideNumbers(x,y);
            break;
    }
    //set currentNumber value to calculated value and clear operatorName and
    //displayValue for next user inputs
    currentNumber = display.textContent;
    operatorName = "";
    displayValue = "";
    console.log('currentNumber: ' + currentNumber);
    console.log('displayValue: ' + displayValue);
    console.log('operatorName: ' + operatorName);
}

//display number button when clicked
numberButtons.forEach(button => {
    button.addEventListener('click', populateDisplay)
});

//if displayValue is empty then displayValue equals the value of number button
//pressed.  If not empty then add numbers to string.
function populateDisplay() {
    if (!displayValue) {
        displayValue = this.textContent;
    } else {
        displayValue += this.textContent;
    }
    display.textContent = displayValue;
    console.log('currentNumber: ' + currentNumber);
    console.log('displayValue: ' + displayValue);
    console.log('operatorName: ' + operatorName);
}

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        //if a number and operator are already stored, then operate calculation
        if(currentNumber && operatorName) {
            operate();
        } else if (!operatorName && currentNumber && displayValue) {
            currentNumber = displayValue;
            displayValue = '';
        //if currentNumber already exists from previous calculation, then simply
        //reset displayValue for next calculation
        } else if (currentNumber) {
            displayValue = "";
        //if no values are stored simply store displayValue in currentNumber and 
        //reset displayValue
        } else {
            currentNumber = Number(displayValue)
            displayValue = "";
        };
        operatorName = button.id;
    });
});

//equal button will operate with given operator and value
//currentNumber, if not empty, and current input value
equalsButton.addEventListener('click', () => {
    operate();
});

//clear button when clicked will clear display and input values
clearButton.addEventListener('click', () => {
    display.innerText = 0;
    displayValue = "";
    currentNumber = "";
    operatorName = "";
})

negativeButton.addEventListener('click', () => {
    if (displayValue) {
        displayValue = Number(displayValue)*-1;
        display.innerText = displayValue;
    } else {
        currentNumber = Number(currentNumber)*-1;
        display.innerText = currentNumber;
    }
})

percentageButton.addEventListener('click', () => {
    if (displayValue) {
        displayValue = Number(displayValue)/100;
        display.innerText = displayValue;
    } else {
        currentNumber = Number(currentNumber)/100;
        display.innerText = currentNumber;
    }
})

//Decimal button function only allows user to input decimal if one
//doesn't already exist
decimalButton.addEventListener('click', () => {
    if (displayValue.toString().indexOf('.') === -1) {
        if (!displayValue) {
            displayValue = ".";
        } else {
            displayValue += ".";
        }
        display.textContent = displayValue;
    }
})

//add backspace button
backspaceButton.addEventListener('click', () => {
    if(displayValue) {
        displayValue = displayValue.toString().slice(0,-1);
        display.innerText = displayValue;
    } else {
        currentNumber = currentNumber.toString().slice(0,-1);
        display.innerText = currentNumber;
    }
})

//add keyboard support