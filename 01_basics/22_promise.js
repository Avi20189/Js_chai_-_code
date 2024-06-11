//What is promise in Javascript?

// const promise1 = new Promise(function(resolve, reject) {
    //Do an asynce task
    //DB calls, cryptograpgy, network

//     setTimeout(function(){
//         console.log('promise created')
//         resolve();
//     }, 1000)
    
// })

// promise1.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Async task 2 consumend')
// })

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Avi20189", email: "avinashsinghranawat6@gmail.com"})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })

// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username: "avinash", password: "srikrishna"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promise4
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error) {
//     console.log(error);
// })
// .finally(() => {
//     console.log('Promise is either fullfilled or rejected')
// })

// const promise5 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = false
//         if(!error) {
//             resolve({username: "trade", password: "krishnaye vasudevaye harye parmatmane prantah kleshnashay govindaye namo namah"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// async function consumePromise5(){
//    const response =  await promise5
//    console.log(response);
// }

// consumePromise5()

//getAllUsers

fetch('https://api.github.com/users/avi20189')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log((data));
})