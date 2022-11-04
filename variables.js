 let b = 2;
 b = 1;
 function scope(){
  //let b = 2           We cannot define let under function it throw an error like this: ReferenceError: b is not defined
   // b=1
     console.log("inside function it self", b)
     {
         console.log("inside block", b)
     }
 }
 scope()
 console.log("out side of the  function", b)
 

//2.Var variable declaration
var a1 = 2;
var a1 = 1;
function lscope(){
   //var b = 2       We cannot define var under function it throw an error like this: ReferenceError: b is not defined
    //var b=1
    console.log("inside function it self", a1)
    {
        console.log("inside block", a1)
    }
}
lscope()
console.log("out side of the  function", a1)
// scope()