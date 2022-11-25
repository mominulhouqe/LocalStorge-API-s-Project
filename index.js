const selectFontSize = document.getElementById("SelectFont");
const selectBgColor = document.getElementById("selectBg");
const resetbtn = document.getElementById("resetbtn");
const mainElement = document.querySelector("main");


const initalSetup = () =>{
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");

    if(bgColor && fontSize){
        selectFontSize.value = fontSize;
        selectBgColor.value = bgColor;
        mainElement.style.fontSize = fontSize;
         mainElement.style.backgroundColor = bgColor;      
    }
    if(! bgColor && !fontSize){
        selectFontSize.value = "20px";
        selectBgColor.value = "black";
        mainElement.style.fontSize = "20px";
         mainElement.style.backgroundColor = "black"
    }
};

const changeFontSize = (event) =>{
    const selectFontSize = event.target.value;
    mainElement.style.fontSize = (selectFontSize);
    localStorage.setItem("fontSize", selectFontSize);
};
const changeBgColor = (event) =>{
    const selectBgColor = event.target.value;
    mainElement.style.backgroundColor = selectBgColor;
    localStorage.setItem("bgColor", selectBgColor);
};
const ClearlocalStorage = (event) =>{
    
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
        selectFontSize.value = "20px";
        selectBgColor.value = "black";
        mainElement.style.fontSize = "20px";
         mainElement.style.backgroundColor = "black"
};



selectFontSize.addEventListener("change" , changeFontSize);
selectBgColor.addEventListener("change" , changeBgColor);
resetbtn.addEventListener("click" , ClearlocalStorage);
initalSetup();