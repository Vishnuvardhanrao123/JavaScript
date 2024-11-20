// *For-in loop*: Write a program using a for-in loop to print all the properties of the object
// person.
// Input: const person = { name: "Alice", age: 25, country: "USA" };
// Output: name: Alice
// age: 25
// country: USA
const person= { name: "Alice", age: 25, country: "USA" }
for(key in person){
    console.log(`${key}:${person[key]}`)
}
// 2. *For-of loop*: Given an array numbers = [10, 20, 30, 40, 50], use a for-of loop to calculate the
// sum.
// Input: const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let num of numbers) {
// sum += num;
// }
// Output: sum = 150
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
sum += num;
}
console.log(sum)
// 3. *Object.freeze()*: Create an object and freeze it. Try modifying a property and explain what
// happens.
// Input: const person = { name: "Alice", age: 25 };
// Object.freeze(person);
// person.age = 30;
// Output: The age property will remain 25, and attempting to change it will have no effect.
const details={ name: "Alice", age: 25 };
Object.freeze(details)
details.age = 40;
console.log(details)
// 4. *Object.seal()*: Use Object.seal() to prevent adding new properties. Then, try adding a
// property and explain.
// Input: const person = { name: "Alice" };
// Object.seal(person);
// person.age = 25;
// Output: The new property "age" will not be added. Sealing prevents adding new properties but
// allows modifying existing ones.
const member= { name: "Alice" };
Object.seal(member);
member.age=20
member.name= 'vishnu'
console.log(member)

// 5. *Object.keys()*: Write a function that returns all the keys of an object using Object.keys().
// Input: const person = { name: "Alice", age: 25, country: "USA" };
// Object.keys(person);
// Output: ["name", "age", "country"]
const me = { name: "Alice", age: 25, country: "USA" };
let arr=Object.keys(me)
console.log(arr)

// 6. *Object.values()*: Create an object and return an array of its values using Object.values().
// Input: const person = { name: "Alice", age: 25, country: "USA" };
// Object.values(person);
// Output: ["Alice", 25, "USA"]
const detai= { name: "Alice", age: 25, country: "USA" };
var newdetai = Object.values(detai)
console.log(newdetai)
// 7. *Object.entries()*: Use Object.entries() to convert an object to an array of key-value pairs.
// Input: const person = { name: "Alice", age: 25 };
// Object.entries(person);
// Output: [["name", "Alice"], ["age", 25]]
const str={ name: "Alice", age: 25 };
var newstr=Object.entries(str)
console.log(newstr)
// 8. *For-in loop with nested objects*: Write a for-in loop to print nested properties of an object.
// Input: const student = { name: "John", subjects: { math: 90, english: 85 } };
// Output: name: John
// subjects: [object Object]
// math: 90
// english: 85
const stu= { name: "John", subjects: { math: 90, english: 85 } };
for(keys in stu){
    console.log(`${keys}:${stu[keys]}`)
    for(keys in stu.subjects){
        console.log(`${keys}:${stu.subjects[keys]}`)
    }
    // console.log(`${keys}:${stu[keys]}`)
}
// 9. *Combining for-in with Object methods*: Iterate over an object and log both keys and values
// using Object.values() for comparison.
// Input: const student = { name: "John", age: 25, subject: "Math" };
// for (let key in student) {
// console.log(key + ": " + student[key]);
// }
// Object.values(student).forEach(value => console.log(value));
// Output: name: John
// age: 25
// subject: Math
// John
// 25
// Math
const student = { name: "John", age: 25, subject: "Math" };
for (let key in student) {
console.log(key + ": " + student[key]);
}
Object.values(student).forEach(value => console.log(value));
// 10. *Prevent Property Modification*: Create an object with a property, freeze it, and attempt to add
// or modify properties.
const per = { name: "Alice" };
Object.freeze(per);
per.name = "Bob";
per.age = 25;
console.log(per)

