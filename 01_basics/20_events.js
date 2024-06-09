//events
//Events has mostly browser and environment events
//Environment evetns tells about where mouse was clicked 
//type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey,ctrlKey, shiftKey, keyCode


//What is event propagation?
//What is event bubbling and capturing?
//Lets say we have a web page which has multiple elements and has multiple images.
//If we want to know the status of the clicks then we add event listeners on them. If a image is under 
//ul tag then li tag and li tag has the image. if we click on image and the outer image element is called
//Then it is called capturing mode. It happens when 

//  document.getElementById('images').addEventListner('click', function(e){
//    console.log("clicked inside the ul"); 
// },true);

// when we pass this true it will act as capture mode. when we pass false this will act as bubling mode
//21 min to 24 minutes in 36th lecture.
//e.stopPropagation - we use it if we don't want bubbling






