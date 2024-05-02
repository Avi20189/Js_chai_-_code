//We will learn about function scope and global scope and concepts like closure

// var c = 300;

// if(true) {
//     let a = 34;
//     const b = 432;
//     var c = 40;
// }

// console.log(c);


//In the above example we declared c with 300 but when redeclaared to 40. It's value changed to 40.
//But after using let and knowing the importance of function scope it will use different value at different scope.

let c = 322;

if(true) {
    let a =32;
    const b = 23;
    let c = 33;
    console.log(c);
}

console.log(c);

//Hoisting 3example
addTwo(5)

const addTwo = function(num){
    return num+2
}