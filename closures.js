//------Example 1--------
//Outer function
// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     var num = 1;
//     function checkNumber() { 
//       console.log(num);
//     }
//     num++;
//     return checkNumber;
//   }
  
//   var number = numberGenerator();
//   number();


  //----Example 2 -------

   const outerFun=(a)=>{
     let b=10;
     const innerFun=()=>{
         let sum=a+b;

       console.log("the sum of two number "+sum);
   }
   return innerFun;
}
// // outerFun(5);
let store=outerFun(10);
 console.log(store);
store();

//------Example 3------
//outer function
// function x(){
//     var  a1= 1;
//     //inner function
//     function y(){
//         console.log(++a1);
//     }
//     return y();
// }
// x();