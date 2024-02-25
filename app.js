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