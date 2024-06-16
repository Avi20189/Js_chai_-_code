function setUsername(username){
    //complex DB calls 
    this.username = username;
    console.log('called')

}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const Avi = new createUser("Avinash", "Avinash@google.com", "googly")
console.log(Avi)
//What is bind function in javascript