let myName = "Avinash";

console.log(myName.length); 
//trueLength------>It is property to remove spaces and other thing and it will print only Name.


let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
       console.log(`Spidy power is ${this.spiderman}`)
    }
}