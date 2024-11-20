// Monthly Budget Planner
// Given monthly income and a list of expenses, calculate the remaining balance at the end of the month.
income=+prompt("enter the monthly income::");
expenses=+prompt("enter the number of expenses::")
totalexpensecost =0
balance=0
for(i=1;i<=expenses;i++){
    items=prompt(`enter the item ${i} name::`).toString
    cost=+prompt(`enter the cost of the item ${i}`)
    totalexpensecost += cost
    balance=income-totalexpensecost

}
console.log(balance)
// Taxi Fare Calculator
// Calculate fare based on distance, with base fare for the first 2 km and an incremental charge per additional km.
distance=+prompt("enter the total distance traveled::")
i=2;
farecost=15
totaltax=0
cost=10
while(i<=distance){
  totaltax +=cost
  i++ 
  ++cost
 

}
console.log(`${farecost+totaltax}`)
// University Attendance Tracker
// Given a list of student attendances, check if they meet the minimum 75% attendance requirement.
totalstudents=+prompt("enter the number of students::")
Elgable=0
for(i=1;i<=totalstudents;i++){
   StudentName=prompt(`enter Name ${i} ::`).toString
   AttendancePre=prompt(`enter the attendence in % ::`)
   if(AttendancePre>= 75){
    Elgable += 1
    console.log("requirement meet")
   }
   else{
    console.log("not meet the requirement")
   }
}
console.log(Elgable)
// Speeding Ticket Check
// Given a vehicle's speed and the speed limit, determine if a speeding ticket should be issued (5 mph buffer allowed).
function checkSpeedingTicket(speed, speedLimit) {
    const allowedBuffer = 5;
    if (speed > speedLimit + allowedBuffer) {
      return "Ticket Issued"; 
    } else {
      return "No Ticket"; 
    }
  }
console.log(checkSpeedingTicket(75, 65));  
console.log(checkSpeedingTicket(70, 65)); 
  
// Currency Converter
// Convert a given amount from one currency to another based on an exchange rate.
function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
  }
const amountInUSD = 100;  
const exchangeRateToEUR = 0.85; 
console.log(convertCurrency(amountInUSD, exchangeRateToEUR));  
  