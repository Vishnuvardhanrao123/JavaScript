// named/regular function
function push(array){
    array.push("venkat")
    newarray=array.push()
    console.log(array)
    console.log(newarray)
  }
  push(array=["vishnu",2,"rahul",456,"9010440505"])
  
  
function push(array){
    array.push("venkat")
    newarray=array.push()
    console.log(array)
    console.log(newarray)
  }
  array=["vishnu",2,"rahul",456,"9010440505"]
  push(array)
  
function pop() {
    stings=["i am vishnu","i am 19 years old","i go to college"]
    stings.pop()
    console.log(stings)
 }
 pop() 



stings=["i am vishnu","i am 19 years old","i go to college"]
function pop() {
    
    stings.pop()
    newstring=stings.pop()
    console.log(newstring)
}
 pop() 



 function pop(strings) {
    newstring=strings.pop();
    console.log(strings)
}
 arr=["i am vishnu","i am 19 years old","i go to college"]
 pop(arr);



//Anonymous function
array=["vishnu",2,"rahul",456,"9010440505"]
  let vishnu=function(array){
      array.push("venkat")
      console.log(array)
  }
  array=["vishnu",2,"rahul",456,"9010440505"]
  vishnu(array)
  
  

(function(){
      array=["vishnu",2,"rahul",456,"9010440505"]
      array.push("venkat")
      console.log(array)
  })
  ();


(function(){
    arr=[2,3,4,5,6] 
    arr.pop()
    console.log(arr)
  })();



var arr=function(x){
    x.pop()
    console.log(x)
}
vishnu=[1,2,3,4]
arr(vishnu)  



//Function Expression