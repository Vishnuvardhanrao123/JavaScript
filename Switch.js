// Design a program that calculates discounts based on product categories (Electronics, Clothing, Grocery). Each category has specific discount rates for different products:
// Electronics: Mobile - 5%, Laptop - 10%
// Clothing: Men - 15%, Women - 20%
// Grocery: Fruits - 5%, Vegetables - 10%
// Hint: Implement nested switch cases to handle products within each category and apply the discounts accordingly. Display the discount rate for the selected product.
let Shopping_Model = prompt("enter the model::");
let Item = prompt("enter the shtoping items::");
let amount;
switch (Shopping_Model) {
    case "Electronics":
        switch (Item) {
            case "Mobile":
                amount = +prompt("enter the amount::")
                console.log(`${amount * 0.05}rs  discount amount`);
                break;
            case "Laptop":
                amount = +prompt("enter the amount::")
                console.log(`${amount * 0.10}rs discount amount`);
                break;
            default:
                console.log("invalid item ,please enter 'Mobile' or 'Laptop'")
        }
        break;
    case "Clothing":
        switch (Item) {
            case "Mens":
                amount = +prompt("enter the amount::")
                console.log(`${amount * 0.15}rs discount amount`);
                break;
            case "Womens":
                amount = +prompt("enter the amount::")
                console.log(`${amount * 0.20}rs discount amount`);
                break;
            default:
                console.log("invalid item ,please enter 'Mens' or 'Womens'")

        }
        break;
    case "Grocery":
        switch (Item) {
            case "Fruits":
                amount = +prompt("enter the amount::")
                console.log(`${amount * 0.05}rs discount amount`);
                break;
            case "Vegetables":
                amount = +prompt("enter the amount::")
                console.log(`${amount * 0.10}rs discount amount`);
                break;
            default:
                console.log("invalid item ,please enter 'Fruits' or 'Vegetables'")

        }
        break;
    default:
        console.log("Invalid Shopping type. Please choose 'Electronics', 'Clothing', or 'Grocery'.");
}


// Movie Ticket Booking System
// Problem: Create a program for booking movie tickets where a user chooses a movie and seat category. The options should be:
// Movie:
// Action: Standard Seat - 10rs, VIP Seat - 20rs
// Comedy: Standard Seat - 8rs, VIP Seat - 15rs
// Drama: Standard Seat -6rs, VIP Seat - 12rs
let movieType = prompt("enter the type of movie::")
let seatType = prompt("enter the seat type::")
let price;
switch (movieType) {
    case "Action":
        switch (seatType) {
            case "Standard":
                console.log(`${price = "10rs"}`)
                break;
            case "VIP":
                console.log(`${price = "20rs"}`)
                break;
            default:
                console.log("Invalid seat type. Please choose 'Standard' or 'VIP'.");
        }
        break;
    case "Comedy":
        switch (seatType) {
            case "Standard":
                console.log(`${price = "8rs"}`)
                break;
            case "VIP":
                console.log(`${price = "15rs"}`)
                break;
            default:
                console.log("Invalid seat type. Please choose 'Standard' or 'VIP'.");
        }
        break;
    case "Drama":
        switch (seatType) {
            case "Standard":
                console.log(`${price = "6rs"}`)
                break;
            case "VIP":
                console.log(`${price = "12rs"}`)
                break;
            default:
                console.log("Invalid seat type. Please choose 'Standard' or 'VIP'.");
        }
        break;
    default:
        console.log("Invalid movie type. Please choose 'Action', 'Comedy', or 'Drama'.");
}

// Write a travel booking system that allows a user to select a mode of transport (Flight, Train, Bus) and then choose a class or category:
// Flight: Economy, Business
// Train: Sleeper, AC Class
// Bus: Standard, Luxury
// Hint: Based on the mode of transport and class selected, display the approximate cost of travel. Use nested switches for the class/category selection within each transport mode.
let Travel_mode=prompt("enter the travel type::");
let category = prompt("enter the class category::");
let cost;
switch (Travel_mode) {
    case "Flight":
        switch (category) {
            case "Economy":
                console.log(`${cost = "4000rs"} is the flight charges`)
                break;
            case "Business":
                console.log(`${cost= "10000rs"}is the flight charges`)
                break;
            default:
                console.log("Invalid category type. Please choose 'Economy' or 'Business'.");
        }
        break;
    case "Train":
        switch (category) {
            case "Sleeper":
                console.log(`${cost = "700rs"} is the flight charges`)
                break;
            case "AC-Class":
                console.log(`${cost= "1500rs"}is the flight charges`)
                break;
            default:
                console.log("Invalid category type. Please choose 'Sleeper' or 'AC-Class'.");
        }
        break;   
    case "Bus":
        switch (category) {
            case "Standard":
                console.log(`${cost = "400rs"} is the flight charges`)
                break;
            case "Luxury":
                console.log(`${cost= "1000rs"}is the flight charges`)
                break;
            default:
                console.log("Invalid category type. Please choose 'Standard' or 'Luxury'.");
        }
        break; 
    default:
        console.log("Invalid  travel_mode. Please choose 'Flight', 'Train', or 'Bus'.");        
}
