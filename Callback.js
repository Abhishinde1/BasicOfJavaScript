//---------Callback Examples-----------
 function sum(a, b) {
     console.log(a + b)
   }
  
  function operation(a, b, callback) {
     callback(a, b)
   }
  
   operation(6, 5, sum)

//---Example 2--------
// console.log('Start')

// function divide(a, b) {
//   console.log(a / b)
// }

// function operation(val1, val2, callback) {
//   callback(val1, val2)
// }

// operation(16, 4, divide)

// console.log('End')

//-------Example 3--------

// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// callback function
// function callMe() {
//     console.log('I am callback function');
// }

// passing function as an argument
// greet('Peter', callMe);

//---Example 4------

// let order = (call_production) =>{

//     console.log("Order placed. Please call production")
    
    // function is being called 
    //   call_production();
    // };
    
    // let production = () =>{
    
    // console.log("Production has started")
    
    // };
    // order(production);