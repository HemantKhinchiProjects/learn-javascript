// Import stylesheets
import './style.css';
//import external fils
import { funExample } from './functions/function.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//-----------------------Important-------------------------------------//
//Function Statment or //Function Declartion
function a() {
  console.log('a called');
}
//Function Expression
var b = function () {
  console.log('B is called');
};
b(); //argument
//Anonimous Function (without a  name, does not have own identty, it will when used then function used value as like before B)

// function (){

// }

//Name Function Expression
var b = function xyz() {
  console.log('B is called');
};
//Defination between Parameters & Argument ?
var d = function (param1, param2) {
  console.log('d is called');
};
d(1, 2); //argument
//First Class Function or first class citizon
//passing another function in-side a function as an argument or simple function called first finction return the function

var f = function xyz(param1, param2) {
  console.log('F is called');
};
f(function () {}); //first function
//Defination between Parameters & Argument ?
var f = function (param1, param2) {
  console.log('d is called');
};
d(1, 2); //argument

//Arrow Function
// what is diffrance between function Statment and function declartion?
// ans: the main diffrance is hoisting
