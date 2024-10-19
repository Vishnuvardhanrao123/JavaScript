
//types of varables and declarations//
var redeclration 
var a=10;
var a=20;
console.log(a)//output:20//
var a=2;
let a=50;
console.log(a)//SyntaxError: Identifier 'a' has already been declared//
var a=5;
const a=70;
console.log(a)//SyntaxError: Identifier 'a' has already been declared//

//var reassignment//
var b=30;
b=35.55;
console.log(b)//output:35.55//
let c=20;
c=34.55;
console.log(c)//output:34.55//
const d=40;
d=33.55;
console.log(d)//Uncaught TypeError TypeError: Assignment to constant variable.//




//Hostings//
console.log(a)//undefined//
var a = 10;
var q
console.log(q)//undefined//
q = 1;
 b;
console.log(b)//Uncaught ReferenceError ReferenceError: b is not defined//

console.log(c)//uncaught ReferenceError ReferenceError: Cannot access 'c' before initialization//
const c = 10;

const n;
console.log(n)//syntaxError: Missing initializer in const declaration//






//authematic functions//
var a=23;
var b=25;
var ratio=(a*b);
console.log(ratio)//multiplication//

let d=22;
f=10;
console.log(d+f)//addition

const e=22.5;
const g=10.65;
console.log(e/g)//divide//
console.log(e-g)//subtraction//
