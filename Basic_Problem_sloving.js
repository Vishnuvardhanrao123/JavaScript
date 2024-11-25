// 1.Reverse a String: Input: 'hello' | Output: 'olleh'. 
var input= "hello"
reverse=""
for(i=input.length-1;i>=0;i--){
    reverse += input[i]
    
}
console.log(reverse)
// 2.Check Palindrome: Input: 'radar' | Output: True .
reverse=""
str= 'vishnu' 
for(i=str.length-1;i>=0;i--){
    reverse += str[i]
    
}
console.log(reverse == str ?
    "palindrome" : "not palindrome" )


// 3.Find Length: Input: 'hello' | Output: 5 .
str1="hello"
console.log(str1.length)
// 4.Count Vowels and Consonants: Input: 'hello' | Output: Vowels:       2, Consonants: 3 .
str="hello"
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
// // 5.Change Case: Input: 'Hello' | Output: 'hELLO' .
// input1="hello"
// output = input1[0].toUpperCase()+input1.slice(1) 
// console.log=(output)

// 6.Remove White Spaces: Input: 'hello world' | Output: 'helloworld' 
input="this is paragraph"
newstr=""
for(i=0;i<=input.length-1;i++){
    if(input[i] !== " "){
        newstr += input[i]
        }
}
console.log(newstr)
// 7.Concatenate Strings: Input: 'hello', 'world' | Output: 'helloworld'.
input3=["hello", "world"]
output= input3[0]+input3[1]
console.log(output)
// 8.Compare Two Strings: Input: 'abc', 'abc' | Output: True .
input4="abc"
input5="bca"
for(i=0;i<=input4.length-1;i++){
    for(j=0;j<=input5.length-1;j++){
       (input4[i] == input5[j]) ? console.log(true):0
          
    }
   
}
// 9.Repeat a String: Input: 'abc', 3 | Output: 'abcabcabc' .
inpu='abc'
inpu1=inpu.repeat(3)
console.log(inpu1)
// 10. Replace a Character: Input: 'hello', 'l', 'z' | Output: 'hezzo'.
data='hello'
console.log(data.replaceAll('l','z'))

