// Primitive Types//


//number  data type//
a= 20;
b= 32.55;
console.log(a,b)

//string data type//
let name = "Alice";
let greeting = 'Hello, world!';
console.log(name)
console.log(greeting)

//boolean data type//
let isLoggedIn = true;
let isCompleted = false;
console.log(isLoggedIn)
//undefined data type//
let user;
console.log(user);
//null data type//
 let vardhan = null
 console.log(typeof(vardhan))


 //Non Primitive Type//
 
//Array datatype//
const array2=[1,2,3,4,5,6,7, 8,9,10];
array2[5]=90.66
console.log(array2)

const vishnu=["male",22,"82kgs","+919440023128"];
c=Number(vishnu[3])
vishnu[3]=c;
console.log(vishnu)

//objective data type//

var objective= {
    Name:{
        K:"Vishnu",
        B:"rahul",
        v:"karthi"
    },
   
    branch:"ece",
    college:"matrusri engineering college",
    person:{
        mobile:"9010440055",
        houseno:"4-4-292/9",
        degree:{
            ece:"true",
            eee:"flase"
        }

    }

}
console.log(objective.person.degree.ece)
    

