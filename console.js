//Console log//
console.log("This is a simple log message.");
//Console Error//
console.error("This is an error message.");
//Console Warn//
console.warn("This is a warning message.");
//Console table//
const data = [
    { name: "John", age: 28 },
    { name: "Jane", age: 34 },
    { name: "Alice", age: 22 }
  ];
  console.table(data);
  //Console group and console groupend//
  console.group("User Information");
  console.log("Name: John");
  console.log("Age: 28");
  console.groupEnd();
  //Console time and console timeend//
  console.time("Timer");
  // Some time-consuming operation
  for(let i = 0; i < 1000000; i++) {}
  console.timeEnd("Timer");
  //Console assert//
  const condition = false;
  console.assert(condition, "The condition is false.");
  //Console count//
  console.count("Counter");
  console.count("Counter");