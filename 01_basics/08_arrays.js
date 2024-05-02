//Array copy operations creates shallow copies
//shallow copy - It is a copy whose properties shaare the same refrences. Basically changes will be reflected at both plaaces


const arr = new Array(1,2,3,4); //Declaring an array


//Array Methods
arr.push(6) // push the value at the last of array

arr.pop() // removes the last element of an array

arr.unshift(9) // Add values at the starting point of the array

arr.shift() //Removes the first value of an array

console.log(arr.includes(2)); // will give boolean output

console.log(arr.indexOf(2)); // will print index of array

const newArr = arr.join() // it will convert the array into string but values will be same 

const arr1 = arr.slice(1,3); //It will print the 1st and 2nd element of the array. it changes values in copy of array
console.log(arr1);
console.log(arr);

const arr2 = arr.splice(1,3); // It will print the 1st 2nd 3rd element of the array. It does changes in original array
console.log(arr2);


console.log(arr);