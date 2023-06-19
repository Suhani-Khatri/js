/*const myHeading =document.querySelector("h1");
myHeading.textContent = "Hello World!"

let myVariable;
myVariable = "suhani";


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

/*   to call a function
    multiply(10,20):
     will return
     200 as ans */

    //  document.querySelector("h1").addEventListener("click", function () {
    //     alert("Ouch! Stop poking me!");
    //   });



  // const promise = new Promise(function(resolve, reject){
  //   alert("Hello");
  //   resolve(true);
  // })

  // console.log("Hello One");
  // setTimeout(function(){
  //   console.log("Hello in two seconds")
  // }, 2000)

  // console.log("Hello Three")

  // console.log(promise);



  function getResponse(name, boolean){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(boolean === true){
          resolve("hello" + " " + name)
        }else{
          reject("Error from API")
        }
      }, 3000)

    }
  )}

  console.log(getResponse("Suhani", true)
  .then((data) =>{
     console.log(data)
    })
  .catch((error => {console.log(error);
  })
  ));



