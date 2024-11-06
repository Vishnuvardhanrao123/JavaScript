// 1. Check whether a given number is  a perfect number Or not?
n=25;
if (!Number.isInteger(n) || n <= 0) {
		console.log("Please provide a valid positive integer.");
		return false;
}
let sum = 0;
for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}
const isPerfect = sum === n;
if (isPerfect) {
		console.log(`${n} is a perfect number.`);
	} else {
		console.log(`${n} is not a perfect number.`);
	}

	




// 2. Check whether given number is a prime number Or not
number= 7;
primenumber=0;
i=2;
while(i<number){
    if(number%i == 0){
        primenumber+=1;
        break;
    }
    i++;
}
if(primenumber==0){
    console.log("prime")
}
else{
    console.log("not a prime")
}
// 3. Print a pattern in this way
//       A
//       AB
//       ABC
//       ABCD
//       ABCDE
 n=5;
 for(i=0;i<=n-1;i++){
    sum= ""
    for(j=0;j<=i;j++){
       sum += String.fromCharCode(j+65);
    }
    console.log(sum)
 }