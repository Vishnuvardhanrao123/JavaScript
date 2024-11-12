// Call back functions
// function fun1(){
//     console.log("hello")
// }
// fun1(callback())
// function callback(){
//     console.log("vishnuvardhan")
// }
// Helper functions
// function fun1(){
//     console.log("fun1")
//     fun2()
// }
// function fun2(){
//     console.log("fun2")
//     fun1()
// }
// fun2()

// higher order functions
// function fun1(callback){
//     console.log("hello")
// }
// fun1(callback())
// introduction to pure & impure functions
//   function add(a,b){
//     console.log(a+b)
//   }
//   add(1,2)//pure function

//   var sum=0
//   function add1(a,b){
//     sum=a+b
//     console.log(sum)
//   }
//   add1(2,4) //impure function


// Bookstore Purchase Summary
// Given a list of books with prices, print the total cost and categorize based on price ranges.
function bookPurchase() {
    let num = Number(prompt("Number of books you purchased : "));
    let total = 0;
    let low = 0, mid = 0, high = 0;
    for (let i = 0; i < num; i++) {
    let bookName = prompt(`Enter the name of book ${i + 1}:`);
    let bookPrice = Number(prompt(`Enter the price of ${bookName}:`));
    total += bookPrice;
    if (bookPrice < 10) {
    low++;
    } else if (bookPrice >= 10 && bookPrice <= 20) {
    mid++;
    } else {
    high++;
    }
    }
    console.log(`the total cost is: ${total}`);
    console.log(`there are ${low}low cost books`);
    console.log(`there are ${mid}medium cost books`);
    console.log(`there are ${high}heigh cost books`);
    }
    bookPurchase()
// Movie Rating Calculator
// Collect ratings from viewers and calculate the average rating.
Ratingsum=0
totalviewers=+prompt("enter the viewers::")
for(i=0;i<totalviewers;i++){
    members=String.prompt("enter the viewer name::")
    rating=+prompt("enter the rating::")
    Ratingsum += rating
    avg = Ratingsum/totalviewers
}
console.log(`${avg} average rating of movie`)
// Personal Savings Calculator
// Based on monthly income and expenses, calculate savings and provide suggestions.
monthlyincome=+prompt("enter the monthly income::")
savings=0
expenAmo=0
numberofexp=+prompt("enter the number of expenses::")
for(i=0;i<numberofexp;i++){
    expensesname=prompt(`enter the expenses name ${i+1} ::`)
    amount=+prompt(`enter the money of expense ${i+1}::`)
    expenAmo += amount
    savings= monthlyincome-expenAmo

}
console.log(savings)


// Journey Time Estimation
// Given distance and average speed, estimate the travel time for a trip.
distance=+prompt("enter the distance in kms::");
if(distance<0){
    console.log("enter positive value")
    return
}
avgseed=+prompt("enter the avg speed in kms/hours");
if(avgseed<0){
    console.log("enter positive value")
    return
}
time=distance/avgseed;
console.log(`${time}hours time requrid to reach destination`)



// School Marksheets
// For each student in a class, input marks for subjects and calculate their total and average marks.
studentName=String.prompt("enter name of the student::")
numofsub=+prompt("enter the number of subjects::")
totalmarks=0
for(i=0;i<numofsub;i++){
      subname=prompt(`enter the subject name ${i+1}::`)
      submarks=+prompt(`enter the subject marks ${i+1}::`)
      totalmarks += submarks;
      avgmarks=totalmarks/numofsub;

}
console.log(`${totalmarks} total marks of the sutdent`)
console.log(`${avgmarks} avarage marks of the sutdent`)