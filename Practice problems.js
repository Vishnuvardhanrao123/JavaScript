// Employee Shift Check
// Given an employee's work hours, print "Night Shift" if they work between 10 PM and 6 AM; otherwise, print "Day Shift."
let start = Number(prompt("enter the start time:"));
let ampm = prompt("is the start time am or pm:").toLowerCase();
let end = Number(prompt("enter the end time:"));
if (start >= 10 && ampm == "pm" && end <= 6) {
 console.log(`Night shift`);
}
else {
 console.log(`day shift`);
}


// Temperature Advisory
// Given the temperature in Celsius, provide weather advice: "Cold" for under 10°C, "Moderate" for 10-25°C, and "Hot" for above 25°C.
temperature=+prompt("enter the temperature in celsius::")
if(temperature<10){
    console.log("cold")
}
else if(temperature>=10 && temperature<=25){
    console.log("Moderate")
}
else if(temperature>25){
    console.log("Hot")
}
else{
    console.log("enter the correct value in numbers ")
}


// Discount Calculator
// A store offers discounts: 10% if the bill is above $100, and 20% if it's above $200. Calculate the discount based on the input bill amount.
amount=+prompt("enter the temperature in celsius::")
if(amount<0){
    console.log("enter the number above zero")
}
if(amount>100){
    console.log(`${amount*.10} total discount amount`)
}
else if(amount>=200){
    console.log(`${amount*.20} total discount amount`)
}
else{
    console.log("enter Valid number")
}


// Elevator Capacity Check
// An elevator has a maximum capacity of 500 kg. Given the weight of items entered, check if the elevator is overloaded.
let people = Number(prompt("enter total number of people:"));
let arr = [];
for (let i = 0; i < people; i++) {
 arr[i] = Number(prompt(`enter the weight of person ${i + 1}:`));
}
let sum = 0;
for (let j = 0; j < arr.length; j++) {
 sum += arr[j];
}
if (sum > 500) {
 console.log(`the elevator is overloded`);
}
else {
 console.log(`the elevator is not overloaded`);


// E-commerce Order Validity
// If a customer orders less than 5 items, print "Invalid order." If 5-10 items, print "Standard order," and for more than 10, print "Bulk order."
let order = Number(prompt("enter number of orders:"));
if (order < 5) {
 console.log(`invalid order`);
}
else if (order >= 5 && order <= 10) {
 console.log(`standard order`);
}
else if (order > 10) {
 console.log(`bulk order`);
}
else{
    console.log("enter the valid number")
}
      

// Account Balance Status
// Given a bank balance, display "Low Balance" for less than $100, "Healthy" for $100-500, and "High Balance" for over $500.
function BankBalance(BankBalance){
    if (BankBalance < 100) {
        console.log(`Low Balance`);
       }
       else if (BankBalance >= 100 && BankBalance <= 500) {
        console.log(`Healthy`);
       }
       else if ( BankBalance> 500) {
        console.log(`High Balance`);
       }
       else{
           console.log("enter the valid number")
       }
BankBalance(prompt(`enter the amount:`))
// Flight Price Calculator
// Calculate ticket cost with discounts: 5% if booked over 30 days in advance, 10% for business class, and 15% for premium members.
var FlightPrice= function (amount){
    Seattype=""
    if(Seattype=normal  ){
        Discount=amount*0.05
        amount -= Discount
        console.log(`${amount} total amount`)
     }
    else if(Seattype=businessClass){
        Discount=amount*0.10
        amount -= Discount
        console.log(`${amount} total amount`)
    }
    else if(Seattype=Premiummembers){
        Discount=amount*0.15
        amount -= Discount
        console.log(`${amount} total amount`)
    }
    else{
        console.log("enter the valid Seattype")
    }

}
FlightPrice(prompt("enter the amount"))

// Voting Eligibility
// Given a person’s age, check if they are eligible to vote (18+).
(function (){
var personage=prompt("enter the a vaild number::")
if(personage>18){
    console.log("eligible to vote")
}
else{
    console.log(" he/She is not eligible to vote") 
}
})
()
// Shopping Bill Calculation
// Add up items from a shopping list and print the total bill.
// items=String.prompt("enter the item name")
//    for(i=1;i<=items;i++){
//     console.log(`Enter the items ::${items} `)
//     return i=3;

//    }
   





// Traffic Light Simulation
// Given the current light color (Red, Yellow, Green), print the appropriate action (Stop, Slow Down, Go).
colour=prompt("enter the colour::")
if(colour="red"){
    console.log("stop")
}
else if(colour="yellow"){
    console.log("slow Down")
}
else if(colour="green"){
    console.log("Go")
}
else{
    console.log("enter the valid colour example:red,yellow,green")
}


// Electricity Bill Calculation
// Calculate an electricity bill based on usage: $0.10 per kWh for up to 100 kWh, $0.15 for 101-200 kWh, and $0.20 for above 200 kWh.
CurrentUnits=+prompt("enter the CurrentUnits in Kwh::")
if(CurrentUnits<= 100 ){
    console.log(`${CurrentUnits*0.10}$ Total electricity Bill`)
}
else if(CurrentUnits>101 && CurrentUnits<=200){
    console.log(`${CurrentUnits*0.15}$ Total electricity Bill`)
}
else if(CurrentUnits>200){
    console.log(`${CurrentUnits*0.20}$ Total electricity Bill`)
}
else{
    console.log("enter the correct value in numbers ")
}


// Calculate Weekly Wages
// Calculate an employee's weekly wage based on their hours. Pay overtime (1.5x) for hours above 40.

var hours=+prompt("enter the  hours base on weekly wages:: ")
var hourssalarey=+prompt("enter the money as per hour::")
if(hours> 40){
    var overtime=1.5
    total=hours*overtime
    console.log(`${hours}*${overtime}*${hourssalarey}=${total*hourssalarey} weekly wages amount`)
}
else if(hours< 40){
     overtime=1
    total=hours*overtime
    console.log(`${hours}*${overtime}*${hourssalarey}=${total*hourssalarey} weekly wages amount`)
}
else{
    console.log("enter the valid number")
}
// Student Grades Calculation
// Given a student's marks in three subjects, calculate the average and display their grade (A, B, C).
function studentsubjects(sub1,sub2,sub3){
    totalmarks = sub1 + sub2 + sub3 ;
    console.log(totalmarks)
    avg=totalmarks/3 
    console.log(avg)
    if(avg>=75 && avg<=100){
        console.log("A Grade")
    }
    else if(avg>60 && avg<75){
        console.log("B Grade")
    }
    else{
       console.log("C Grade")
    }

}
studentsubjects(+prompt("enter the marks"),+prompt("enter the marks"),+prompt("enter the marks"))


// Warehouse Stock Update
// Given the stock for a product, check if it’s "Out of Stock" (0 units), "Low Stock" (<10 units), or "In Stock."
function checkStock(units) {
    if (units === 0) return "Out of Stock";
    else if (units < 10) return "Low Stock";
    else return "In Stock";
}
console.log(checkStock(0));  // "Out of Stock"
console.log(checkStock(5));  // "Low Stock"
console.log(checkStock(20)); // "In Stock"


// Game Score Tracker
// A player earns points. Track their total score and notify them when they reach milestones (100, 500, 1000 points).
function trackScore(score) {
    if (score >= 1000) console.log("Milestone reached: 1000 points!");
    else if (score >= 500) console.log("Milestone reached: 500 points!");
    else if (score >= 100) console.log("Milestone reached: 100 points!");
}
trackScore(600);  

// Calculate Train Fare
// Given distance and class of travel (Economy, Business), calculate the train fare with different rates per km.
function calculateFare(distance, travelClass) {
    const rates = { Economy: 0.5, Business: 1.0 };
    return distance * (rates[travelClass] || rates.Economy);
}
console.log(calculateFare(100, "Economy")); 
console.log(calculateFare(100, "Business")); 

// Loan Eligibility Check
// Given a person’s monthly income and credit score, check if they qualify for a loan.
function checkLoanEligibility(income, creditScore) {
    if (income >= 3000 && creditScore >= 600) return "Eligible for loan";
    else return "Not eligible for loan";
}
console.log(checkLoanEligibility(4000, 650)); 
console.log(checkLoanEligibility(2500, 700)); 

// Movie Ticket Price Calculation
// Calculate the price of a movie ticket with discounts: 10% for students and 20% for seniors.
function calculateTicketPrice(basePrice, isStudent, isSenior) {
    let discount = 0;
    if (isStudent) discount = 0.1;
    else if (isSenior) discount = 0.2;

    return basePrice * (1 - discount);
}
console.log(calculateTicketPrice(10, true, false));  
console.log(calculateTicketPrice(10, false, true)); 

// Game Level Up
// A player gains experience points. Notify them when they have enough points to level up (1000 points).
function checkLevelUp(expPoints) {
    if (expPoints >= 1000) {
        console.log("Congratulations! You leveled up!");
    } else {
        console.log("Keep going! You need more experience to level up.");
    }
}
checkLevelUp(1200);
checkLevelUp(800);  

// Fuel Cost Estimation
// Given the distance to be traveled and vehicle fuel efficiency, calculate the total fuel cost at a rate per liter.
function calculateFuelCost(distance, fuelEfficiency, ratePerLiter) {
    const litersNeeded = distance / fuelEfficiency;
    return litersNeeded * ratePerLiter;
}
console.log(calculateFuelCost(200, 15, 1.2)); 

// Classroom Seating Arrangement
// Given the number of students and seats per row, calculate how many rows are needed.
function calculateRows(students, seatsPerRow) {
    return Math.ceil(students / seatsPerRow);
}
console.log(calculateRows(30, 5));
console.log(calculateRows(22, 4)); 

// Tax Calculation
// Calculate tax based on income: 10% for under $50,000, 20% for $50,000-100,000, and 30% above $100,000.
function calculateTax(income) {
    let taxRate = 0;
    if (income < 50000) taxRate = 0.1;
    else if (income <= 100000) taxRate = 0.2;
    else taxRate = 0.3;

    return income * taxRate;
}
console.log(calculateTax(45000)); 
console.log(calculateTax(75000));  
console.log(calculateTax(150000));

// Employee Bonus Calculation
// Calculate a bonus based on years of service: 5% for 5-10 years, 10% for 10-20 years, and 15% for over 20 years.
function calculateBonus(yearsOfService, salary) {
    let bonusRate = 0;
    if (yearsOfService >= 20) bonusRate = 0.15;
    else if (yearsOfService >= 10) bonusRate = 0.1;
    else if (yearsOfService >= 5) bonusRate = 0.05;

    return salary * bonusRate;
}
console.log(calculateBonus(8, 50000)); 
console.log(calculateBonus(15, 50000)); 
console.log(calculateBonus(25, 50000));

// Fuel Efficiency Check
// Given fuel used and distance, calculate and print fuel efficiency (km/l).
function calculateFuelEfficiency(distance, fuelUsed) {
    return distance / fuelUsed;
}
console.log(calculateFuelEfficiency(500, 25)); 

// Internet Usage Alert
// Alert a user when they reach 80% and 100% of their monthly data limit.
function checkInternetUsage(usedData, dataLimit) {
    const usagePercentage = (usedData / dataLimit) * 100;
    if (usagePercentage >= 100) console.log("You have reached 100% of your data limit!");
    else if (usagePercentage >= 80) console.log("Warning: You have used 80% of your data limit.");
}
checkInternetUsage(80, 100); 
checkInternetUsage(100, 100); 


