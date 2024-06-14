function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = createUser("chai", 25)
const tea = createUser("hellojello", 100)