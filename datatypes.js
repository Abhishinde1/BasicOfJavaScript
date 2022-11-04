// Primitive DATATYPES//
/* nn bb ss u 
1.nn (null , number)
2.bb (boolean, Bigint)
3.ss (string , Symbol)
4.u (Undefined)*/

let a = null;
let b = 544;
let c = true;
let d = BigInt("554");
let e = "Abhi";
let f = Symbol("I am nice Symbol");
let g;  //It was a Undefined

console.log(a , b , c , d , e , f , g)

//how to find the type of DataType
console.log(typeof e)




/*Non primitive Datatype which is = (objects) in js
1. By using Objects we can create key value pair
2. we can create dictonary , we can mapping of students marks
3, we can create item price mapping*/

const item = {
    "Abhi" : true,
    "Yash" : false,
    "Love" : 47,
    "Abhishek" : undefined
}
console.log(item["Abhishek"]);