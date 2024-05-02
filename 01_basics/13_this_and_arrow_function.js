// const user = {
//     username: "Avinash"
//     price: 999
//     welcomeMessege: function() {
//         console.log(`welcome to out website`)
//     }
// }

const chai = function(){
    let username = "avinash"
    console.log(this.username);
}

chai();

const chai1 = () => {
   let username = "avisaas"
   console.log(this.username);
}