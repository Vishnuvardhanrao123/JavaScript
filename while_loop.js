//addtion of factorial of number using math.floor //
num=1234
sum=0
while(num>0){
    quo=num%10;
    sum += quo;
    num=Math.floor(num/10);
}
console.log(sum)

//addition of number using for loop//
num=String(1234)
sum = 0
for(i=0;i<num.length;i++){
    // console.log(num[i])
    sum +=parseInt (num[i])
}
console.log(sum)


//Multiplication of factorial with out math.floor//
num=1234
product=1
while(num>1){
   quo=num % 10   
   product *= quo  
   num=num/10
}
console.log(product)

//multiplication of number factorial using math.floor//
num=1234
product=1
while(num>0){
   quo=num % 10  
   product *= quo 
   num=Math.floor(num/10)
}
console.log(product)

//1.multiplication of number factorial using for loop//
num=1234
product=1
for(i=0;i<num;num=Math.floor(num/10)){
    quo=num%10
    product *= quo
}
console.log(product)

//2.multiplication of number factorial using for loop//
num=String(1234)
sum = 1
for(i=0;i<num.length;i++){
    // console.log(num[i])
    sum *=parseInt (num[i])
}
console.log(sum)


//add "-" to evey 3rd number//
let input = 555555555;
let inputStr = input.toString(); // Convert number to string
let output = ""; // Initialize empty string for output
let i = 0;

while (i < inputStr.length) {
    output += inputStr[i]; // Add each digit to output
    if ((i + 1) % 3 === 0 && i !== inputStr.length - 1) {
        output += "-"; // Add '-' after every 3rd character except the last one
    }
    i++; // Increment the counter
}

start=20;
sum=0;
i=1;
while(i <=start){
    console.log(i)
    sum = sum + i
    i++
}
console.log(sum)


let sum = 0;
for (let i = 1; i <= 20; i++) {
   if (i % 2 === 0) {
        sum += i; 
    }
}
console.log( sum);

let sum=0;
i=1
while(i<=20){
    if(i%2===0){
        sum += i; 
    }
    i++
}
console.log( sum);

