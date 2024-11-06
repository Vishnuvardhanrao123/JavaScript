////Palindrom or Not Palindrom
var str="vishnuvardhan";
let reversedstr="";
for(i= str.length-1;i>=0;i--){
   reversedstr += str[i]
}
console.log(str)
console.log(reversedstr)
console.log(reversedstr == str?
    "palindrome" : "not palindrome"
)
       //or//
//without using second let varable and for//
var str = "vishnuvardhan";
console.log(str,[...str].reverse().join(''), [...str].reverse().join('') === str ? "palindrome" : "not palindrome");

     //or//
//without using second let varable and for //
var string="vishnuvardha"
console.log(string.split('').reverse().join(''))
    if (string == string.split('').reverse().join('')) {
        console.log(string + ' is palindrome.');
    }
    else {
        console.log(string + ' is not palindrome.');
    }



//creating lowercase and uppercase to even and odd number string//
var string="vishnuvardhan"
var casestring=""
for(i=0;i<string.length;i++){

    if(i & 1){
       casestring += string[i].toLowerCase()
    }
    else{
        casestring += string[i].toUpperCase() 
    }
}
console.log(casestring)


//traingle formate using numbers//
let n=5;
for ( i = 1; i <= n; i++) {          
    let row = "";                       
    for ( j = 1; j <= i; j++) {       
        row += "*";                  
    }
    
    console.log(row);

}



//add "-" to every 3 rd nuMber place //
let input = 555555555;
let inputStr = input.toString(); // Convert number to string
let output = ""; // Initialize empty string for output

for (let i = 0; i < inputStr.length; i++) {
    output += inputStr[i]; // Add each digit to output
    if ((i + 1) % 3 === 0 && i !== inputStr.length - 1) {
        output += "-"; // Add '-' after every 3rd character except the last one
    }
}

console.log(output); // Output: "555-555-555"

//Printing value from -2 to -12//
for (let i = -2; i >= -12; i--) {
    console.log(i);
}

//Printing any table//
input=prompt("enter the table number")
for(i=1;1<=10;i++){
    // console.log(`${input} x ${i} = ${input*i}`)
}
console.log(`${input} x ${i} = ${input*i}`)


// Function to calculate factorial
n=10
if(n<0){
    console.log("enter the positive value")
}
let result = 1; 
let output = ''; 
for (let i = n; i > 0; i--) {
    result *= i;
    
     output += i; 
    if (i > 1) {
        // output += ' * ';
        output=output.concat('*')
    }
}
console.log(` ${n}: ${output} = ${result}`); 
































