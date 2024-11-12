// ARRAY METHOD
// AT,CONCAT,INCLUDES,INDEX OF,LAST INDEX OF,JOIN,REVERSE,SORT,FOR EACH,MAP,FILTER,FIND.


// University GPA Calculation
// Calculate GPA based on the grades of courses taken.
totalhours=0
avg=0
totalclass=+prompt("enter the number of class::")
for(i=0;i<totalclass;i++){
    classname=prompt(`enter the class name ${i+1}::`)
    points=prompt(`enter the points ${i+1}::`)
    hours=+prompt(`enter the hours ${i+1}:: `)
    totalpoints += points* hours
    totalhours += hours
    avg=totalpoints/totalhours;
   
}
if(avg>= 4 && avg<=5){
   console.log(`${avg} "A" Grade`)
}
else if(avg>=3 && avg <4){
   console.log(`${avg} "B" Grade`)
}
else if(avg>=2 && avg <3){
   console.log(`${avg} "C" Grade`)
}
else{
   console.log(`${avg} "D" Grade`)
}


// Food Court Bill Calculation
// Calculate a bill with taxes and service charge.
servicecharg=10
  totalbill= 0
  totaltax=0
  fooditems=+prompt("enter the number of items::")
  for(i=0;i<fooditems;i++){
    food=[prompt(`${i+1}.Food Name::`),prompt(`${i+1}.Food Price::`)]
    totalbill += +food[1]
}
  totalbill += servicecharg
totaltax= totalbill*0.18
  console.log(`${totaltax+totalbill} total bill `)

  // Calculate Simple Interest
// For a given principal, rate, and time, calculate the simple interest.
amount=+prompt("enter the principal amount::")
rate=+prompt("enter the inrest rate::")
time=+prompt("enter as per month::")
simpleinterest=amount*rate*time
console.log(`${simpleinterest}"simpleinterest amount"+${amount}"Principal amount" = ${simpleinterrest+amount}"total amount"`)

// Library Late Fee
// Given the number of overdue days, calculate the late fee for a library book.
numberofbooks=+prompt("enter the number::")
numberofdays=+prompt("enter tne number::")
latefee=+prompt("enter the amount::")
 var totallatefee = 
(totallatefee = numberofbooks*numberofdays*latefee)? console.log(totallatefee):"invailnumber"
// Hotel Room Rent Calculation
// Calculate room rent based on room type (Standard, Deluxe, Suite) and number of days
roomrent=0
room=prompt("enter the room type(Standard, Deluxe, Suite)::").toString
totaldays=+prompt("enter the days you stay::")
if(room = "Standard" && totaldays>0){
     roomrent = totaldays*700
     console.log(`${totaldays}*700rs = ${totaldays*700}"room rent"`)
}
else if(room = "Deluxe" && totaldays>0){
    roomrent = totaldays*1500
    console.log(`${totaldays}*1500rs = ${totaldays*1500}"room rent"`)
}
else if(room = "Suite" && totaldays>0){
    roomrent = totaldays*10000
    console.log(`${totaldays}*10000rs = ${totaldays*10000}"room rent"`)
}
else{
    console.log("invaild value")
}



