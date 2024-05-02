const cars = ["ferrari", "lamborghini", "aston martin"];
const luxcars = ["rolls", "bentley", "gwagon"];

//cars.push(luxcars); // This will not merge but it will create a second in the main array.

//console.log(cars);

const allCars = cars.concat(luxcars);// This method will merge properly both arrrays and print into single one

console.log(allCars);

const allCarsq = [...cars, ...luxcars]; // This is best way to merge two arrays.

console.log(allCarsq);

const another_array = [1,2,3,4,5,6,6[345,634],[453,[654]]];

console.log(another_array.flat(Infinity));

console.log(Array.isArray("Avinash"));

console.log(Array.from("Avinash"));//It will make array from the given string

console.log(Array.from({name: "Avinash"}))  //Interesting


let a1 = 23;
let a2 = 345;
let a3 = 3435;


console.log(Array.of(a1,a2,a3)); //This is an array method to create an array with elements

