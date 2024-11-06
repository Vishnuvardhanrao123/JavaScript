// Easy Questions (5 Questions)
// Product Discount
// Scenario: Imagine you work at an e-commerce company where discounts are applied to customer purchases. Your code will help automate this calculation.
// Problem: Given a total purchase amount, calculate the discount and print the final amount.
// Input: An integer totalAmount, representing the total purchase amount.
// Conditions:
// If totalAmount > 500, apply a 20% discount.
// If totalAmount is between 200 and 500, apply a 10% discount.
// If totalAmount < 200, no discount is applied.
// Expected Output: The final amount after applying the discount.
// Example:
// Input: totalAmount = 600
// Output: 480 (600 - 20% of 600)
TotalAmount=200
if(TotalAmount<0){
    console.log(`${TotalAmount} entered amount should not be less than zero`)
    return;}
TotalPurchaseAmount= 0
if(TotalAmount>500){
    discount = TotalAmount*0.20
    TotalPurchaseAmount=TotalAmount-discount
}
else if(TotalAmount < 500 && TotalAmount > 200 ){
    discount = TotalAmount*0.10
    TotalPurchaseAmount=TotalAmount-discount
}
else if(TotalAmount <= 200  ){
    discount= 0
   TotalPurchaseAmount = TotalAmount-discount
}
else{
    console.log(`enter only the value ${TotalAmount}`)
}
 console.log(`${TotalPurchaseAmount} (${TotalAmount} - 20%  of ${discount} )`)

// Temperature Alert System
// Scenario: You’re working for a smart home company developing a temperature alert system.
// Problem: Based on the temperature, print an alert message for the user.
// Input: An integer temperature, representing the current temperature in °C.
// Conditions:
// If temperature > 40, print "Extreme Heat".
// If temperature is between 20 and 40, print "Moderate".
// If temperature < 20, print "Cold".
// Expected Output: An alert message describing the temperature level.
// Example:
// Input: temperature = 42
// Output: "Extreme Heat"
var temperature = 45; 
if (temperature > 40) {
console.log("Extreme Heat");
} else if (temperature >= 20 && temperature <= 40) {
console.log("Moderate");
} else {
console.log("Cold")};

// Grades Based on Marks
// Scenario: A grading system for students that automatically assigns a grade based on marks scored.
// Problem: Given a marks value, assign a grade according to predefined cutoffs.
// Input: Integer marks.
// Conditions:
// If marks ≥ 90, print "A+"
// If marks is between 80 and 89, print "A"
// If marks is between 70 and 79, print "B"
// If marks < 70, print "C"
// Expected Output: A string representing the grade.
// Example:
// Input: marks = 85
// Output: "A"
var marks = prompt("Enter the marks scored:");
if (marks >= 90) {
console.log("A+");
} else if (marks >= 80 && marks < 90) {
console.log("A");
} else if (marks >= 70 && marks < 80) {
console.log("B");
} else {
console.log("C");
}

// Library Late Fees
// Scenario: A library management system where fines are automatically calculated for late book returns.
// Problem: Calculate the total fine based on the number of lateDays.
// Input: Integer lateDays.
// Conditions:
// If lateDays is between 1-5, the fine is $2 per day.
// If lateDays is between 6-10, the fine is $3 per day.
// If lateDays > 10, the fine is $5 per day.
// Expected Output: Total fine amount.
// Example:
// Input: lateDays = 7
// Output: 21 (7 * 3)
var lateDays = prompt("Enter the number of late days:");
var totalFine;
if (lateDays >= 1 && lateDays <= 5) {
totalFine = lateDays * 2; // $2 per day for 1-5 days
} else if (lateDays >= 6 && lateDays <= 10) {
totalFine = lateDays * 3; // $3 per day for 6-10 days
} else if (lateDays > 10) {
totalFine = lateDays * 5; // $5 per day for more than 10 days
} else {
totalFine = 0; // No fine for 0 or negative late days
}
console.log("Total fine amount: $" + totalFine); 

// Food Preference Survey
// Scenario: You’re working on a survey tool for a food service company, where users select their favorite food, and the system responds accordingly.
// Problem: Print a response based on the user’s choice.
// Input: A string favoriteFood which could be "Pizza", "Pasta", "Burger", or something else.
// Conditions:
// "Pizza" → "Pizza lover!"
// "Pasta" → "Pasta lover!"
// "Burger" → "Burger lover!"
// Any other input → "Invalid choice"
// Expected Output: A message acknowledging the user's choice.
// Example:
// Input: favoriteFood = "Pizza"
// Output: "Pizza lover!"
var favoriteFood = prompt("Enter your favorite food (Pizza, Pasta, Burger):");
favoriteFood = favoriteFood.toLowerCase();
var response;
if (favoriteFood === "pizza") {
response = "Pizza lover!";
} else if (favoriteFood === "pasta") {
response = "Pasta lover!";
} else if (favoriteFood === "burger") {
response = "Burger lover!";
} else {
response = "Invalid choice"; // Response for any other input
}
console.log(response);

// Medium Questions (5 Questions)
// Loan Eligibility Checker
// Scenario: An automated system for loan eligibility based on customer criteria at a bank.
// Problem: Based on an applicant's age, income, and criminal record, determine if they’re eligible for a loan.
// Input:
// age (integer),
// income (float),
// hasCriminalRecord (boolean)
// Conditions:
// Age between 21 and 60.
// Income > 20,000.
// No criminal record.
// Expected Output: "Eligible for Loan" or "Not Eligible".
// Example:
// Input: age = 30, income = 25000, hasCriminalRecord = false
// Output: "Eligible for Loan"
var age = parseInt(prompt("Enter your age:"));
var income =parseInt( prompt("Enter your income:"));
var hasCriminalRecord = prompt("Do you have a criminal record? (enter in case like true/false):");
hasCriminalRecord = (hasCriminalRecord.toLowerCase() === "true"); // Convert to boolean
var response;
if (age >= 21 && age <= 60 && income > 20000 && !hasCriminalRecord) {
response = "Eligible for Loan"; 
} else {
response = "Not Eligible"; 
}
console.log(response);

// Sales Target Achievement
// Scenario: A sales system where employees get bonuses based on performance against sales targets.
// Problem: Calculate the bonus based on target achievement percentage.
// Input:
// salesTarget (float percentage),
// monthlySalary (float).
// Conditions:
// If salesTarget > 120%, bonus = 20% of monthlySalary.
// If 100% ≤ salesTarget ≤ 120%, bonus = 10% of monthlySalary.
// Below 100%, no bonus.
// Expected Output: Bonus amount.
// Example:
// Input: salesTarget = 130, monthlySalary = 50000
// Output: 10000 (20% of 50,000)
var salesTarget = prompt("Enter the sales target percentage:");
var monthlySalary = prompt("Enter the monthly salary:");
salesTarget = parseFloat(salesTarget);
monthlySalary = parseFloat(monthlySalary);
var bonus;
if (salesTarget > 120) {
bonus = monthlySalary * 0.20;
} else if (salesTarget >= 100 && salesTarget <= 120) {
bonus = monthlySalary * 0.10;
} else {
bonus = 0;
}
console.log("Bonus amount: " + bonus);


// School Attendance Checker
// Scenario: A school portal that checks if students can sit for exams based on attendance.
// Problem: Calculate attendance percentage and determine eligibility.
// Input:
// totalClasses (int),
// classesAttended (int).
// Condition: If attendance ≥ 75%, print "Eligible"; else, print "Not Eligible".
// Example:
// Input: totalClasses = 40, classesAttended = 30
// Output: "Eligible" (75% attendance)
var totalClasses = prompt("Enter the total number of classes:");
var classesAttended = prompt("Enter the number of classes attended:");
// Convert input values
totalClasses = parseInt(totalClasses);
classesAttended = parseInt(classesAttended);
var attendancePercentage;
attendancePercentage = (classesAttended / totalClasses) * 100;
var response;
if (attendancePercentage >= 75) {
response = "Eligible"; // Eligible condition
} else {
response = "Not Eligible"; // Not eligible condition
}
console.log(response)

// Online Shop Loyalty Points
// Scenario: A loyalty program that awards points to users based on purchase amounts.
// Problem: Calculate points based on purchaseAmount.
// Input: purchaseAmount (float).
// Conditions:
// For purchases under $100, 1 point per $10.
// For $100 or more, 2 points per $10.
// Expected Output: Total points.
// Example:
// Input: purchaseAmount = 150
// Output: 30 points (2 points per $10)
var purchaseAmount = prompt("Enter the purchase amount in $:");
purchaseAmount = parseFloat(purchaseAmount);
var points;
if (purchaseAmount < 100) {
points = Math.floor(purchaseAmount / 10);
} else {
points = Math.floor(purchaseAmount / 10) * 2;
}
console.log(points + " points");


// Counting Occurrences of a Character
// Scenario: You’re tasked with analyzing data by counting occurrences of a specific character in text.
// Problem: Count how many times the letter 'e' appears in a given string.
// Input: A string, e.g., text = "excellence".
// Output: The count of occurrences of 'e'.
// Example:
// Input: "excellence"
// Output: 4
var text = prompt("Enter a string:");
var count = 0;
for (var i = 0; i < text.length; i++) {
if (text[i] === 'e') {
count++;
}
}
console.log("Count of 'e': " + count)


// Advanced Questions (5 Questions)
// Inventory Management for Expiry Dates
// Scenario: You’re developing an inventory system for a supermarket to check item expiration status.
// Problem: Given the current day and expiration day, determine if an item is expired.
// Input:
// currentDay (integer, representing the day of the year, 1-365),
// expiryDay (integer, representing the day of the year the item expires).
// Conditions:
// If expiryDay < currentDay, the item is expired.
// If expiryDay >= currentDay, the item is not expired.
// Expected Output: "Expired" or "Not Expired".
// Example:
// Input: currentDay = 250, expiryDay = 245
// Output: "Expired"
var currentDay = prompt("Enter the current day of the year (1-365):");
var expiryDay = prompt("Enter the expiry day of the item (1-365):");
currentDay = parseInt(currentDay);
expiryDay = parseInt(expiryDay);
var response;
if (expiryDay < currentDay) {
response = "Expired";
} else {
response = "Not Expired";
}
console.log(response)


// Even-Odd Alternating Pattern Checker
// Scenario: In manufacturing, items in an assembly line must alternate between even and odd item codes for quality checking.
// Problem: Check if an array of integers follows an alternating pattern (even-odd-even-odd).
// Input: An array of integers, e.g., [2, 3, 4, 5].
// Conditions:
// Starting from the first item, the sequence should alternate between even and odd.
// Expected Output: "Pattern followed" or "Pattern broken".
// Example:
// Input: [2, 3, 4, 5]
// Output: "Pattern followed"
var input = prompt("Enter an array of integers separated by commas:");
var items = input.split(",");
var patternFollowed = true;
for (var i = 0; i < items.length; i++) {
items[i] = parseInt(items[i]);
if (i % 2 === 0 && items[i] % 2 !== 0) {
patternFollowed = false;
break;
} else if (i % 2 !== 0 && items[i] % 2 === 0) {
patternFollowed = false;
break;
}
}
if (patternFollowed) {
console.log("Pattern followed");
} else {
console.log("Pattern broken");
}


// Bank Transaction Validator
// Scenario: You’re designing a system to check if a user has sufficient funds for a transaction.
// Problem: Determine if a user can make a withdrawal based on their balance and withdrawalAmount.
// Input:
// balance (float),
// withdrawalAmount (float).
// Conditions:
// If balance ≥ withdrawalAmount, allow the transaction.
// If balance < withdrawalAmount, reject the transaction.
// Expected Output: "Transaction Approved" or "Insufficient Funds".
// Example:
// Input: balance = 500.0, withdrawalAmount = 200.0
// Output: "Transaction Approved"
var balance = prompt("Enter your current balance:");
var withdrawalAmount = prompt("Enter the withdrawal amount:");
balance = parseFloat(balance);
withdrawalAmount = parseFloat(withdrawalAmount);
var response;
if (balance >= withdrawalAmount) {
response = "Transaction Approved";
} else {
response = "Insufficient Funds";
}
console.log(response);


// Vowel-Consonant Alternation Checker
// Scenario: In a language-processing application, you need to check if a string alternates between vowels and consonants.
// Problem: Given a string, check if it follows this vowel-consonant pattern.
// Input: A string, e.g., "abacaba".
// Conditions:
// The string should alternate between vowels and consonants.
// Vowels are "a, e, i, o, u".
// Expected Output: "Pattern followed" or "Pattern broken".
// Example:
// Input: "abacaba"
// Output: "Pattern followed"
var input = prompt("Enter a string:");
var patternFollowed = true;
var vowels = "aeiou";
for (var i = 0; i < input.length; i++) {
var isVowel = vowels.indexOf(input[i].toLowerCase()) !== -1;
if (i % 2 === 0) {
if (!isVowel) {
patternFollowed = false;
break;
}
} else {
if (isVowel) {
patternFollowed = false;
break;
}
}
}
if (patternFollowed) {
console.log("Pattern followed");
} else {
console.log("Pattern broken");
}


// Digit Sum Parity Checker
// Scenario: For a data validation algorithm, check if the sum of digits in an ID number is even or odd.
// Problem: Calculate the sum of the digits in an integer and determine if it’s even or odd.
// Input: An integer, e.g., 12345.
// Expected Output: "Sum is Even" or "Sum is Odd".
// Example:
// Input: 12345
// Output: "Sum is Odd"
var input = prompt("Enter an integer:");
var sum = 0;
for (var i = 0; i < input.length; i++) {
sum += parseInt(input[i]);
}
if (sum % 2 === 0) {
console.log("Sum is Even");
} else {
console.log("Sum is Odd");
}
