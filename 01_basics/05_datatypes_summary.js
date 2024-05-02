// primitive

// 7 types : string, number , boolean, Null, undefined, symbol, BigInt

//Refrence  (Non Primitive)

//Array , Objects, Functions

// const outSideTemp = null
// let userEmail

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 546328749453196789536907n;

// console.log(typeof bigNumber);



//Array , Objects, Functions

// const boys = ["aman", "ayush", "avinash"];

// let myObj = {
//     name: "Avinash",
//     sex: "male"
// }

// const myFunction = function(){
//     console.log("lhello");
// }

// myFunction();

/*               STACK AND HEAP MEMORY IN JAVASCRIPT             */

//        stack(Primitive datatypes)  Heap(Non - Primitive)


//whenever we change anything into primitive datatypes that changes occur into copy variable.Symbol
//whenever we change anything into non - primitive datatype that changes into original place.
//because it does not create a copy it only givews refrence to that variable

//Stack implementation
// let myName = "Avinash";

// let mynewName = myName;

// mynewName = "fucker";

// console.log(myName);
// console.log(mynewName)

//heap implementation

// let obj = {
//     name: "Avinash",
//     sex: "make"
// }

// let secobj = obj;

// obj.name = "loser";

// console.log(secobj.name);
// console.log(obj.name);
