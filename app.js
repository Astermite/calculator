function add(n1,n2) {
    return n1 + n2;
}
function substract(n1,n2) {
    return n1 - n2;
}
function multiply(n1,n2) {
    return n1 * n2;
}
function divide(n1,n2) {
    return n1/n2;
}
let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber,operator,secondNumber) {
    switch (operator) {
        case('+'):
            return add(firstNumber,secondNumber);
        case('-'):
            return substract(firstNumber,secondNumber);
        
        case('*'):
            return multiply(firstNumber,secondNumber);
        
        case('/'):
            return divide(firstNumber,secondNumber);
    }
}

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
for (let i=1; i < 10; i++) {
    let btn = document.createElement('button')
    btn.textContent = `${i}`
    if (i < 10 && i > 6) one.appendChild(btn)
    else if (i < 7 && i > 3) two.appendChild(btn)
    else if (i < 4 && i > 0) three.appendChild(btn)
}
