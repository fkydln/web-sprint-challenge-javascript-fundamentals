// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const exterrnal = "I'm outside the function";

function myFunction() {
  console.log(exterrnal);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/* 
  Because nestedFunction is actually defined in myFunction. That's why it is able to reach internal variable. If I take nestedFunction outside, then we won't be able to reach the variable. It would return "internatl is not defined."

*/


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation
of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  var count = 0;

  for (let i = 0; i <= num; i++) {
    count = count + i;
    

  }
  return count;
}
 console.log(summation(5));