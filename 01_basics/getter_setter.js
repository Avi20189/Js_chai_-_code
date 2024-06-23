class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    } 
    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password = value
    }
}

const hitesh = new User("aavinash.ai", "1234")
console.log(hitesh.password);