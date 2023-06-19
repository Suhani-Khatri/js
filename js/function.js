// greet = () => {
//     console.log("Good Morning");
// }

// greet();
// setTimeout( () => {
//     console.log("We are inside settimeout");
// }, 3000)


let obj = {
    names: ["Harry","Nishant","Nikku"],
    speak(){
        this.names.forEach((person) => {
            console.log("Hello" + person);
        })
    }
}

obj.speak();