const slidShowElements = document.querySelectorAll(".slideshow-element");

let count = 1;
setInterval(() => {
    count++;
    const currentElement = document.querySelector(".current");
    
    currentElement.classList.remove("current");
    if(count > slidShowElements.length) {
        slidShowElements[0].classList.add("current");
        count = 1;
    }
    currentElement.nextElementSibling.classList.add("current");

}, 1000);
