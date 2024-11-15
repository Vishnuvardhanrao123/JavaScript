// 1. Employee Salary Update: You have a list of employee salaries [30000, 45000, 50000, 35000]. Increase each salary by 10% and create a new array with the updated salaries.                                                       
let arr=[30000,45000,50000,35000]
let newarr= arr.map((value)=>value+(value*0.10))
console.log(newarr)


// 2. Odd Numbers Only: Given an array of daily sales numbers [23, 45, 60, 70, 33], filter out only the odd sales numbers to analyze specific buying patterns.                                                                                           
let oddnum=[23, 45, 60, 70, 33]
let newnum= oddnum.map((value)=>(value %2 !==0)? value :0)
console.log(newnum);


// 3. Product Price Tag Update: You have a list of product names in lowercase ['soap', 'shampoo', 'toothpaste']. Capitalize each product name to display on tags.                                                                            
products=['soap', 'shampoo', 'toothpaste']
const newpro= products.map((word)=> word[0].toUpperCase()+ word.slice(1) )  
console.log(newpro)


// 4.Student Passing Scores: From an array of student scores [55, 70, 82, 47], filter out scores that are above 50 to get a list of students who passed.  
let scores=[55, 70, 82, 47]
newscores = scores.filter((value) => value = value > 50)
console.log(newscores)
// 5.Customer Names Extraction: You have an array of customer records [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}]. Extract just the names for a promotional email list.
const customers = [{ 'name': 'Alice' }, { 'name': 'Bob' }, { 'name': 'Charlie' }];
const names = customers.map(customer => customer.name);
console.log(names);

// 1. Calculate Product of All Items: For an array of order quantities [1, 3, 5, 2], calculate the product of
// all quantities to determine total inventory.
let oders= [1, 3, 5, 2]
let newoders= oders.reduce((pre , cur) => pre*cur)
console.log(newoders)
// 2. Find Words Ending with 'e': In a list of fruit names ['apple', 'orange', 'mango'], filter out fruits
// ending with the letter 'e' for display.
let fruit= ['apple', 'orange', 'mango']
let newfruit= fruit.filter((fru) => fru.endsWith("e"))
console.log(newfruit)
// 3. Create Full Name and Age String: You have records of employees [{'name': 'John', age: 25},
// {'name': 'Jane', age: 30}]. Create a new array of strings in the format 'Name - Age.'
let employe=[{'name': 'John', age: 25}, {'name': 'Jane', age: 30}]
user = {'name':'vishnu',age:20}
employe.push(user)
console.log(employe)
// 4. Find Last Even Number: From a series of ticket sales [12, 19, 24, 37, 48], find the last even
// number in the list for reporting.
let num=[12, 19, 24, 37, 48]
let newnumb = num.filter(valu =>  valu%2==0)
console.log(newnumb)
// 5. Check for 4-Letter Words: In an array of items ['desk', 'table', 'lamp'], check if any item has exactly
// 4 letters to validate the name lengt
let word=['desk', 'table', 'lamp']
let newword = word.filter(ele =>  ele.length == 4)  
console.log(newword)

// 1. Average Salary: From [45000, 52000, 61000, 72000], calculate the average salary to determine
// the company's median compensation.
let salary= [45000, 52000, 61000, 72000]
newsale=salary.reduce((pre,cur,inx,len) => sale=pre+cur,0) /salary.length
console.log(newsale)


// 2. Create Book Description: Given ['Modern JavaScript', 'Advanced CSS', 'React Basics'], combine
// these into a single sentence for a library catalog.
let state= ['Modern JavaScript', 'Advanced CSS', 'React Basics']
newstae = state.reduce((pre,cur) => pre.concat(" ",cur, " "))
console.log(newstae)

// 3. Adult Students' Names: From [{'name': 'John', age: 16}, {'name': 'Doe', age: 22}], create a list of
// names for students over 18 only.
stud = [{'name': 'John', age: 16}, {'name': 'Doe', age: 22}]
newstud=stud.filter((value) => value.age >= 18)
console.log(newstud[0].name)
// 4. Calculate Factorial of Numbers: For [1, 2, 3, 4], create a new array where each element is its
// factorial.
let numbers= [1, 2, 3, 4]
let newnumbr= numbers.map((value) => {
    let fact =1
    for(i=value;i>=2;i--){
        fact *= i;
    }
return fact
})
console.log(newnumbr)

// 5. Words with Duplicate Letters: From ['apple', 'banana', 'cherry'], find words that contain duplicate
// letters for pattern analysis
let letters=['apple', 'banana', 'cherry']
let duplicate= ""
newletters= letters.filter((value)=>{
    for(i=0;i<value.length;i++){
        let cur= value.charAt(i)
        if(i+1<value.length){
           if(value.charAt(i)===value.charAt(i+1)){
            return value
           }
          
        }
    }
})
console.log(newletters)
