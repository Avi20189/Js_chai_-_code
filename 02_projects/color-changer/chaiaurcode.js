const buttons = document.querySelectorAll('.button');

const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    //add an eventListner
    button.addEventListener('click', function(e){
         console.log(e);
         console.log(e.target)
    })
});