// TASK:-
// 1.count the vowels and constants in string
  str="karunakar"
  vowelcount= 0
  constant=0
    for(i=0;i<=str.length-1;i++){
       if(str.charAt(i) == "a"|| str.charAt(i) == "e"||str.charAt(i) == "i"||str.charAt(i) == "o"||str.charAt(i) == "u"){
        vowelcount += 1;}
    else{
        constant += 1
    }

  }
  console.log(vowelcount)
  console.log(constant)

   
// 2.Wap to to calculate the sum of all multiples of 3between 1 to 30.
  tableinput=3
  sum = 0
  for(i=1;i<=30;i++){
    sum += tableinput*i ;
    console.log(`${tableinput}x${i}=${tableinput*i}`)
   
  }
  console.log(sum)
 
// 3.check whether given is a armstrong number.
number=155
sum= 0
tem= number
while(tem>0){
    remainder= tem%10
    sum+= remainder * remainder*remainder
    tem= tem/10
}
if(sum == number){
    console.log(`${sum == number} it is armstrong number`)
}
else{
    console.log(`${sum !== number} it is not a armstrong number`)
}



// 4.wap using a for loop to find the maximum number in an array of integers.
const array = [-1,101,3,100, 99, 2, 99];
var m = array[0];
  for (i=1;i<array.length;i++) {
    if (array[i] > m) {
      m = array[i];
    }
  }
 console.log(m);

// 5.wap to calculate the mean or average of the given array of integers.
input=[3,2,6,1,4,8,2,4,3]
sumof=0
for(i=0;i<=input.length-1;i++){
    sumof += input[i]
    mean = sumof/input.length
}
console.log(mean)