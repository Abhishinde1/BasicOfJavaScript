var Es6;

var Default_function_parameters;

// function add(a, b = 2){
//     return a + b; 
// }
// console.log(add(3));



var Template_Literals;
// In es6 we can use a new syntax ${parameter} inside of back-ticked string.
//  let firstname = "Abhishek";
//  let lastname = "Shinde";

// console.log(`My name is ${firstname} ${lastname}`);


var Multi_line_string;
//----Example --------

// let paragraph = `Pune district  is the most populous district in the Indian state of Maharashtra. 
//                     The district's population was 9,429,408 in the 2011 census, making it the fourth most populous district amongst India's 640 districts.[4] This district has an urban population of 58.08 percent of its total.
//                     It is one of the most industrialized districts in India.`

//  console.log(paragraph);

var spread;

  var arr1 = [0,1,2];
  var arr2 = [3,4,5];
  var arr3 = [...arr1,...arr2];
  //console.log(arr3);

 var arr4  = [...arr1, 6 ,7]
 console.log(arr4);

 var DestructuringAssignment

 /* destructuring assignment  expression that makes it possible to unpack values from arrays,
  or properties from objects, into distinct variables*/

  let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);


var ES7features

/*includes  :-  function is used to determine whether an array contains a specified value. If it does, it returns true.
                Otherwise, it returns false.*/
//  let arr = ['react', 'angular', 'vue'];
 
//  if (arr.includes('reacttt'))
//  {
//      console.log('true');
 //}
 //else {
   //  console.log("false")
 //}


/*Exponentiation operator :- The exponentiation operator ( ** ) returns the result of raising the first operand to the power of the second operand.*/

//  let multiply = (2 ** 3);
//  console.log(multiply);

// Exponentiation assignment :- operator (**=) raises the value of a variable to the power of the right operand.
// let x = 5;
// x **= 2;






