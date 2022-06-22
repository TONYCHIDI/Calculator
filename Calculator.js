//The url of my github pages is https://tonychidi.github.io/Calculator/

//A Basic Arithmetic Calculator Without a Frontend

//Choose the particular operation you want to perform by number
let operation = prompt("Select an operation to perform: '+','-','*','/'", "");

//Calculations to carryout depending on your choice of operation
if (operation == "+") {
    let num1 = prompt("Enter first number here: ", "");
    let num2 = prompt("Enter second number here: \n" + num1 + " +", "");
    let sum = +num1 + +num2;
    alert("The answer is " + sum + ". Congrats!");
} else if (operation == "-") {
    let nums1 = prompt("Enter first number here: ", "");
    let nums2 = prompt("Enter second number here: \n" + nums1 + " -", "");
    let subtract = +nums1 - +nums2;
    alert("The answer is " + subtract + ". Congrats!");
} else if (operation == "*") {
    let num3 = prompt("Enter first number here: ", "");
    let num4 = prompt("Enter second number here: \n" + num3 + " x", "");
    let multiple = +num3 * +num4;
    alert("The answer is " + multiple + ". Congrats!");
} else if (operation == "/") {
    let nums3 = prompt("Enter first number here: ", "");
    let nums4 = prompt("Enter second number here: \n" + nums3 + " /", "");
    let division = +nums3 / +nums4;
    alert("The answer is " + division + ". Congrats!");
} else if (operation == null || operation == "" || operation !== typeof Number) {
    alert("Invalid operator selected. Start afresh!");
}else{
    alert("operation terminated");
}

//The url of my github pages is https://tonychidi.github.io/Calculator/
