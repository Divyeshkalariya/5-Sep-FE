import React from "react";

function add(){
    const a = parseFloat( prompt("Enter value of A : "));
    const b = parseFloat( prompt("Enter value of B : "));
    const c = a+b;
    alert('Addition of numbers : ' + c);
}
function sub(){
    const a = parseFloat( prompt("Enter value of A : "));
    const b = parseFloat( prompt("Enter value of B : "));
    const c = a - b;
    alert('Substraction of numbers : ' + c);
}
function mul(){
    const a = parseFloat( prompt("Enter value of A : "));
    const b = parseFloat( prompt("Enter value of B : "));
    const c = a * b;
    alert('Multiplication of numbers : ' + c);
}
function divi(){
    const a = parseFloat( prompt("Enter value of A : "));
    const b = parseFloat( prompt("Enter value of B : "));
    const c = a / b;
    alert('Divison of numbers : ' + c);
}
function mod(){
    const a = parseFloat( prompt("Enter value of A : "));
    const b = parseFloat( prompt("Enter value of A : "));
    const c = a % b;
    alert('Modules of numbers : ' + c);
}

export {add,sub,mul,divi,mod}