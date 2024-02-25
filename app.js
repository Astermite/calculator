function add(n1,n2) {
    return parseInt(n1) + parseInt(n2);
}
function substract(n1,n2) {
    return n1 - n2;
}
function multiply(n1,n2) {
    return n1 * n2;
}
function divide(n1,n2) {
    if (n2 == 0) return 'CANNOT DIVIDE BY ZERO YOU FOOL!'
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

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')
for (let i=1; i < 10; i++) {
    let btn = document.createElement('button')
    btn.textContent = `${i}`
    btn.classList.add(`b${i}`)
    if (i < 10 && i > 6) first.appendChild(btn)
    else if (i < 7 && i > 3) second.appendChild(btn)
    else if (i < 4 && i > 0) third.appendChild(btn)
}

const one = document.querySelector('.b1')
const two = document.querySelector('.b2')
const three = document.querySelector('.b3')
const four = document.querySelector('.b4')
const five = document.querySelector('.b5')
const six = document.querySelector('.b6')
const seven = document.querySelector('.b7')
const eight = document.querySelector('.b8')
const nine = document.querySelector('.b9')
const zero = document.querySelector('.b0')
const visor = document.querySelector('.visor')
const clearBtn = document.querySelector('.clear')
const numbers = [one,two,three,four,five,six,seven,eight,nine,zero] 
const addOp = document.querySelector('.addOp')
const subOp = document.querySelector('.subOp')
const multOp = document.querySelector('.multOp')
const diviOp = document.querySelector('.diviOp')
const Ops = [addOp,subOp,multOp,diviOp]
const numOp = numbers.concat(Ops)
let displayValue;
const equalBtn = document.querySelector('.equal')

equalBtn.addEventListener('click',() => showResult(displayValue))
clearBtn.addEventListener('click', clear)
numbers.forEach((item) => item.addEventListener('click', () => display(item.textContent)))
Ops.forEach((item) => item.addEventListener('click', () => display(' ' + item.textContent + ' ')))
function display(input) {
    visor.textContent += input
    displayValue = visor.textContent
}
function clear() {
    visor.textContent = ''
}

function getResult(material) {
    // let hasHigherOps = /[/*]/.test(material)
    // let hasLowerOps = /[+-]/.test(material)
    let materialArr = material.split(' ')//.map((item) => item.slice(0,-1))

    while (true) {
    if (findFirstIndex(materialArr, ['/','*']) >= 0) {
        let index = findFirstIndex(materialArr, ['/','*'])
        firstNumber = operate(materialArr[index-1],materialArr[index],materialArr[index+1])
        if (firstNumber = 'CANNOT DIVIDE BY ZERO YOU FOOL!') 
        materialArr.splice(index-1,3,firstNumber)
    } else if (findFirstIndex(materialArr,['+','-']) >= 0) {
        let index = findFirstIndex(materialArr,['+','-'])
        firstNumber = operate(materialArr[index-1],materialArr[index],materialArr[index+1])
        materialArr.splice(index-1,3,firstNumber)
    } else break;
    }
    return firstNumber;
}
function showResult(material) {
    clear()
    display(getResult(material))
}
function findFirstIndex(array,toLookFor) {
    let index1 = array.indexOf(toLookFor[0])
    let index2 = array.indexOf(toLookFor[1])
    if (index1 >= 0 && index2 >= 0) return Math.min(index1,index2)
    else return Math.max(index1,index2)
}