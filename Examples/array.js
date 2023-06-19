/*let myNameArray = ["suhani", "disha", 10]
console.log(myNameArray)


// object Example
let dog = { name: "Spot", breed: "Dalmatian" };
console.log(dog.name);

let myNumber = "500"; 
console.log(typeof myNumber);

//const example
const bird = { species: "Kestrel" };
console.log(bird.species);

const lotsOfDecimal = 1.0993887963276;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

const string = "The revolution will not be televised.";
console.log(string);
const badString = string;
console.log(badString);*/

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"


// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);

// const number1 = 123
// const string1 = number1 . toString();
// console.log(typeof(string1))

// const browserType = "mozilla";

// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// const browserType = "mozilla";

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// const browserType = "mozilla";
// console.log(browserType.slice(1, 4)); // "ozi"

// const random = ["tree", 795, [0, 1, 2]];
// console.log(random[1])
// console.log(random[2][2]);

// const cities = ["Indore", "Ahmedabad"];
// cities.push("vadodara")
// console.log(cities)


// const cities = ["Manchester", "Liverpool"];
// const newLength = cities.push("Bristol");
// console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
// console.log(newLength); // 3

// const cities = ["Manchester", "Liverpool"];
// cities.unshift("Edinburgh");
// console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

// const cities = ["Manchester", "Liverpool"];
// cities.shift();
// console.log(cities); // [ "Liverpool" ]


// splice method
// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// const index = cities.indexOf("Liverpool")
// if (index !== -1) {
//     cities.splice(index, 1);
//   }
//   console.log(cities);


//for accesing every elements of array
// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// for (const city of cities){
//     console.log(city)
// }

// function double(number){
//     return number * 2;
// }


/* using filter() */
// function isLong(city){
//     return city.length > 8;
// }

// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
// const longer = cities.filter(isLong);
// console.log(longer);


// let age  = 20;
// if(age > 18){
//     console.log("Adult")
// }else{
//     console.log("Not Adult")
// }

// let shoppingDone = false;
// let childsAllowance;
// if (shoppingDone === true) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }
// console.log(childsAllowance)

/*  switch case  */
// function setWeather() {
//     const  choice = "rainy"

//     switch(choice){
//         case "sunny":
//         console.log("Its Sunny");
//         case "rainy":
//         console.log("Its Rainy")
//     }
// }

// console.log(setWeather());

/* map  */
// function toUpper(string){
//     return string.toUpperCase();
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const upperCats = cats.map(toUpper)
// console.log(upperCats);

/*filter */
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter((cat) => cat.startsWith("L"));
// console.log(filtered);

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);

const myNumber = Math.random();
console.log(myNumber)
