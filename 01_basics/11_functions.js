function add(num1, num2){

    return num1+num2;

}
const result = add(4,5);

console.log("Result:", result);

function loginUserName(username){
    if(!username){
        console.log("enter a valid username");
    }

    return `${username} is logged in`
}

console.log(loginUserName("Aviansh"));

//Write a function in which it adds the user input into and array and return it

function shoppingCart(...num1){

    return num1;

}

console.log(shoppingCart(13,342,532,5322,3521,324321));

//Write a function and pass object in a function

const user= {
    username: "Aston",
    price : 32145353
}

function handleObject(anyObject){
    console.log (`username is ${anyObject.username} and it's price is ${anyObject.price}`)
}

handleObject({
    username: "avhi",
    price: 2345123
});

// Create an array and pass it to a function and print it's value 

const arr = [423,2345,532,532,54,5432];

function printArr(arr){
    return arr[1];
}


console.log(printArr(arr));
