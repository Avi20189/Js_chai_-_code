//In javascript everything is object except function is 
//ES6

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const aston = new User("aston", "aston@gmail.com", "123")

console.log(aston.encryptPassword());
console.log(aston.changeUsername());



//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}


const tea = new User("lambo", "lanbo#gmail.com", "234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername()); 