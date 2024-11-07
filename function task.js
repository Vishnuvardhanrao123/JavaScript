// Scenario 1: Show a Simple Message in the Console
// You are working on a project where you need to display a simple message to the user, such as welcoming them to the website.
// Task Details:
// 1. Create a function called showMessage.
// 2. Inside the function, display the message “Hello, welcome to the website!” in the console using console.log.
// 3. Call the function to show the message when the program runs.
function showMessage(){
    console.log("Hello, welcome to the website!")
}
showMessage()

// Scenario 2: Count from 1 to 10s
// You need to display numbers from 1 to 10 in a list format. This could be part of a page where you show steps for a task.
// Task Details:
// 1. Create a function countToTen.
// 2. Inside the function, use a loop to print the numbers from 1 to 10 using console.log.
// 3. Call the function to see the result.
function countToTen(){
    for(i=1;i<=10;i++){
        console.log(i)
    }
}
countToTen()


// Scenario 3: Display Multiplication Table for Number 2
// You are tasked with displaying the multiplication table for the number 2.
// Task Details:
// 1.Write a function multiplicationTable.
// 2.The function should print the multiplication table for 2 from 1 to 10, like “2 x 1 = 2”, “2 x 2 = 4”, etc.
// 3.Use a loop inside the function to generate and display the table.
// 4.Call the function to see the multiplication table.
function multiplicationTable(n){
    for(i=1;i<=10;i++){
        console.log(`${n}X${i}=${n*i}`)
    }
}
multiplicationTable(2)

// Scenario 4: Display Odd Numbers from 1 to 10
// You need to show all the odd numbers between 1 and 10.
// Task Details:
// 1.Create a function showOddNumbers.
// 2.Inside the function, use a loop to display the odd numbers between 1 and 10.
// 3.Use console.log to print the numbers.
// 4.Call the function to show the result.
function showOddNumbers(){
  for(i=1;i<=10;i++){
    if(i%2==1){
        console.log(`${i} odd number`)
    }
  }
}
showOddNumbers()


// Scenario 5: Count Down from 5 to 1
// You are tasked with counting down from 5 to 1 and displaying each number.
// Task Details:
// 1.Create a function countDown.
// 2.Inside the function, use a loop to print numbers from 5 to 1.
// 3.Use console.log to display the countdown.
// 4.Call the function to see the countdown in action.
function countDown(){
    i=5;
    while(i>=1){
        console.log(i)
        i-- 
    }
}
countDown()

// Scenario 6: Print a Greeting for the User
// You need to greet users when they visit your site, but the message remains the same for every visitor.
// Task Details:
// 1. Create a function greetUser.
// 2. Inside the function, print a simple greeting message like “Good day, user!” using console.log.
// 3. Call the function to display the greeting.
function greetUser(){
    console.log("“Good day, user!”")
}
greetUser()

// Scenario 7: List Even Numbers from 1 to 10
// You are building a section of a program that needs to display even numbers between 1 and 10.
// Task Details:
// 1.Write a function showEvenNumbers.
// 2.Inside the function, loop through numbers from 1 to 10.
// 3.Print only the even numbers to the console using console.log.
// 4.Call the function to show the even numbers.
function showEvenNumbers(){
    for(i=1;i<=10;i++){
      if(i%2==0){
          console.log(`${i} Even number`)
      }
    }
  }
  showEvenNumbers()


//   Scenario 8: Display a Farewell Message
//   When a user leaves your site, you need to show a farewell message in the console.
//   Task Details:
//   1. Create a function farewellMessage.
//   2. Inside the function, display a message like “Thank you for visiting, goodbye!” using console.log.
//   3. Call the function to display the message.
function farewellMessage(){
    console.log("Thank you for visiting, goodbye!")
}
farewellMessage()


// Scenario 9: Display Squares of Numbers from 1 to 5
// You want to show the squares of the numbers between 1 and 5.
// Task Details:
// 1.Create a function showSquares.
// 2.Inside the function, loop through numbers from 1 to 5.
// 3.Print the square of each number using console.log.
// 4.Call the function to display the squares.
function showSquares(){
    for(i=1;i<=5;i++){
        console.log(`${i**2}`)
    }
}
showSquares()


// Scenario 10: Show a Welcome Message Three Times
// You need to repeatedly welcome users by printing the same message multiple times.
// Task Details:
// 1.Write a function repeatWelcome.
// 2.Inside the function, use a loop to display the message “Welcome!” three times.
// 3.Use console.log to print the message.
// 4.Call the function to repeat the welcome message.
function repeatWelcome(){
    console.log("Welcome!")
}
repeatWelcome()
repeatWelcome()
repeatWelcome()

  
  