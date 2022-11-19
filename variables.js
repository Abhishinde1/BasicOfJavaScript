 const b = 2;
 b = 1;
 function scope(){
  //let b = 2           We cannot define let under function it throw an error like this: ReferenceError: b is not defined
   var  b=10
     console.log("inside function it self", b)
     {
         console.log("inside block", b)
     }
 }
 scope()
 console.log("out side of the  function", b)
 
