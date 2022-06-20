//A Basic Arithmetic Calculator Without a Frontend
console.log("Select an operation to perform:");

//Choices of operations to perform
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

//Choose the particular operation you want to perform by number
let operation = prompt("Select an operation to do", "");

//Calculations to carryout depending on your choice of operation
if (operation == "1") {
    let num1 = prompt("Enter first number here: ", "");
    let num2 = prompt("Enter second number here: ", "");
    let sum = +num1 + +num2
    console.log("The answer is " + sum);
} else if (operation == "2") {
    let nums1 = prompt("Enter first number here: ", "")
    let nums2 = prompt("Enter second number here: ", "")
    let subtract = +nums1 - +nums2
    console.log("The answer is " + subtract);
} else if (operation == "3") {
    let num3 = prompt("Enter first number here: ", "")
    let num4 = prompt("Enter second number here: ", "")
    let multiple = +num3 * +num4
    console.log("The answer is " + multiple);
} else if (operation == "4") {
    let nums3 = prompt("Enter first number here: ", "")
    let nums4 = prompt("Enter second number here: ", "")
    let division = +nums3 / +nums4
    console.log("The answer is " + division);
} else if (operation == null || operation == "") {
    console.log("Enter a valid number");
    prompt("Select an operation to do", "");
}

