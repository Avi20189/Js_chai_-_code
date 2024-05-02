//Objects can be created in two ways. 1st one is as a literal and second one is like constructor

//singleton(using Object.create)

//Object literals

const sym1 = Symbol("mysim")

let obj = {
    name: "avi",
    "full name": "full bakchodi",
    [sym1]: "syjsd", // This is the correct way to represent a symbol. If we will not use square bracket then tyoe of symbol will be string
    age: 32,
    sex: "male",
    isloggedIn: false,
    email: "helloSexo@gmail.com"
}

//console.log(obj.name);          //accessing object through . notation
//console.log(obj["full name"]); //accessing object with bracket notation

//Object.freeze(obj); //This method is used to freeze object and user now can not change the value of the object after applying it.

//We are using object.assign method to merge objects into one object

const obj1 = {1: "a", 2: "b"}

const obj2 = {3:"c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2);

//console.log(obj3);

//But we will use spread operator in production or in our projects

//console.log(Object.keys(obj))  //This is Objects. keys method it can extract all keys and return an array 

//console.log(Object.values(obj)) // We can extract all values from object. We have to pass the object as a parameter

//console.log(Object.entries(obj)) // It will print all key value pairs

//console.log(obj.hasOwnProperty('isloggedIn')) // We can check if any property is available or not by using .hasOwnProperty and passing parameter in ''

//Destructuing Objects

const course = {
    courseName: 'jsinhindi',
    coursePrice: '433',
    courseInstructor: 'avi'
}

const {courseInstructor: instructor} = course // This is called object destructuring.
// We extract multiple properties from object and assign them to variables in a single and concise syntax

console.log(instructor);



