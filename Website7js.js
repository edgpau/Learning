
console.log('Hello World');



function addNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("result").innerText = "Sum: " + sum;
}

function subtractNumbers() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let sum2 = num3 - num4;
    document.getElementById("result2").innerText = "Sum: " + sum2;
}