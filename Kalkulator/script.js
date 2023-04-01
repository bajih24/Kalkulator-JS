//button
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        inputNumber (e.target.value)
        updateScreen(currentNumber)
    })
})

//screen
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value =number
}

let prevNumber ='';
let calculationOperator ='';
let currentNumber ='';

//Membuat Function Number
const inputNumber = (number) => {
    if (currentNumber === '0'){
    currentNumber = number;
 }else {
    currentNumber += number;
 }
}

//Operator
 const operators = document.querySelectorAll(".operator")
    operators.forEach((operator) =>{
    operator.addEventListener("click", (e) =>{
        inputOperator(e.target.value);
    })
 })

 //Function Operator
 const inputOperator = (operator) => {
    if (calculationOperator === ''){
    prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber ='0'
 }

 //Equal / Sama Dengan
 const equalSign =document.querySelector('.equal-sign')
    equalSign.addEventListener('click', ()=>{
     calculate ();
     updateScreen (currentNumber)
})

//Function Calculate
const calculate = () => {
    let result =''
    switch(calculationOperator){
      case "+":
        result = parseFloat (prevNumber )+ parseFloat  (currentNumber)
        break
      case "-":
        result = parseFloat  (prevNumber) - parseFloat  (currentNumber)
        break
      case "*":
        result = parseFloat  (prevNumber) * parseFloat (currentNumber)
        break
      case "/":
        result = parseFloat  (prevNumber) / parseFloat (currentNumber)
        break
      default :
        break
    }
    currentNumber = result
    calculationOperator =''
}  

//Button AC
const clearBtn =document.querySelector('.all-clear')
clearBtn.addEventListener('click', ()=>{
    clearAll ();
    updateScreen(currentNumber);
})

//Function AC
const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber ='0'
}

//Button Decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (e)=>{
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})

//Function Decimal
const inputDecimal =(dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

// Button Percent
const percent = document.querySelector('.percentage');
    percent.addEventListener('click', (e) => {
    calculatePercentage(e.target.value);
    updateScreen(currentNumber);
});

// Function Percent
const calculatePercentage = () => {
    if (currentNumber.includes('.')) {
    return;
    }
    const percentage = (parseFloat(currentNumber) / 100).toString();
    currentNumber = percentage;
};