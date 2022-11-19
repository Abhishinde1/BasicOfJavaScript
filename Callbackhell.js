let production = () =>{

    setTimeout(()=>{
      console.log("production has started")
      setTimeout(()=>{
        console.log("The fruit has been chopped")
        setTimeout(()=>{
            console.log("start the machine")
                  setTimeout(()=>{              
                  console.log("serve Ice cream")
                },2000)
              },3000)
         },2000)
    },0000)
  
  };
  production();