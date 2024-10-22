// finding elements

const fontSize = document.querySelector("#font-size");
const bgColor = document.querySelector("#bg-color");
const container = document.querySelector(".container");
const text = container.querySelector("p");
const resetBtn = document.querySelector("#resetBtn");

const resetItem = () => {
    localStorage.removeItem("size");
    localStorage.removeItem("color");
    fixValue("16px", "rgb(226, 236, 245)");
};


// select key of local storage permanently 

const fixValue = (fontSizeValue , bgColorValue) => {
    fontSize.value = fontSizeValue;
    bgColor.value = bgColorValue;
    container.style.fontSize = fontSizeValue ;
    container.style.backgroundColor = bgColorValue ;
}

const fixValueInLocalStorage = () => {
    const fontSizeValue = localStorage.getItem("size");
    const bgColorValue = localStorage.getItem("color");

    if(fontSizeValue && bgColorValue) {
        fixValue(fontSizeValue , bgColorValue)
    };

    if(!fontSizeValue && bgColorValue) { 
        fixValue("16px", bgColorValue)
    };

    if(fontSizeValue && !bgColorValue) {
        fixValue(fontSizeValue , "rgb(226, 236, 245)")
    };

    if(!fontSizeValue && !bgColorValue) {
        fixValue("16px" , "rgb(226, 236, 245)")
    };

};

const selectFontSize = (event) => {
    const sizeValue = event.target.value ;
    container.style.fontSize = sizeValue ;
    localStorage.setItem("size", sizeValue);

}

const selectBgColor = (event) => {
    const colorValue = event.target.value ;
    container.style.backgroundColor = colorValue ;
    localStorage.setItem("color", colorValue)
}

fontSize.addEventListener("change", selectFontSize);
bgColor.addEventListener("change", selectBgColor);
resetBtn.addEventListener("click", resetItem);

fixValueInLocalStorage();