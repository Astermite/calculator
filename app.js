function add(n1,n2) {
    
    return convertToNumber(n1) + convertToNumber(n2);
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

function convertToNumber(input) {
    if (input.includes('.')) {
        return parseFloat(input);
    } else {
        return parseInt(input);
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
    btn.classList.add('num')
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
const addOp = document.querySelector('.add')
const subOp = document.querySelector('.sub')
const multOp = document.querySelector('.mult')
const diviOp = document.querySelector('.divi')
const Ops = [addOp,subOp,multOp,diviOp]
const numOp = numbers.concat(Ops)
let displayValue;
const equalBtn = document.querySelector('.equal')
const floatBtn = document.querySelector('.float')
const backBtn = document.querySelector('.backspace')

equalBtn.addEventListener('click',() => showResult(displayValue))
clearBtn.addEventListener('click', clear)
numbers.forEach((item) => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('click', () => display(item.textContent))
    item.addEventListener('keydown', (event) => {
        if (event.key === item.textContent) display(item.textContent)
    })
})
Ops.forEach((item) => item.addEventListener('click', () => {display(' ' + item.textContent + ' '); enableFloat()}))
backBtn.addEventListener('click', () => back())
equalBtn.addEventListener('keydown', (event) => {if (event.key === 'Enter') showResult(displayValue)})


function back() {
    displayArray = Array.from(visor.textContent)
    displayArray.pop()
    visor.textContent = displayArray.join('')
}
function enableFloat() {
    floatBtn.addEventListener('click',() => {
    display('.')
}, { once:true })}
enableFloat()

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
    if (firstNumber !== Math.floor(firstNumber)) firstNumber = Math.ceil(value * 100) / 100
    return firstNumber;
}
function showResult(material) {
    clear()
    display(getResult(material))
    enableFloat()
}
function findFirstIndex(array,toLookFor) {
    let index1 = array.indexOf(toLookFor[0])
    let index2 = array.indexOf(toLookFor[1])
    if (index1 >= 0 && index2 >= 0) return Math.min(index1,index2)
    else return Math.max(index1,index2)
}