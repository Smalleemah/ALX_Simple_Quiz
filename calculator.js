function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 *num2;
}
function divide(num1,num2){
    return num2 !== 0? num1/num2:"Cannot divide by zero";
}

function getInputs() {
    const  number1 = 
    parseFloat(document.getElementById("number1").value) || 0;
    const number2 =
    parseFloat(document.getElementById("number2").value) || 0;
    return {number1, number2};
}
    function showResult(value){
        document.getElementById("calculation-result").textContent = value;
    }

//Add event listeners OUTSIDE showResult function
    document.getElementById("add").addEventListener("click", function () {
const {number1, number2 } = getInputs();
showResult(add(number1,number2));
    });

    document.getElementById("subtract").addEventListener("click", function () {
        const {number1, number2} = getInputs();
        showResult(subtract(number1,number2));
});

    document.getElementById("multiply").addEventListener("click", function () {
        const {number1, number2} = getInputs();
        showResult(multiply(number1,number2));
});

   
    document.getElementById("divide").addEventListener("click", function () {
        const {number1, number2} = getInputs();
        showResult(divide(number1,number2)); 
});