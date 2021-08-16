document.styleSheets[1].disabled = true;
document.styleSheets[2].disabled = false;

let darkModeBtn = document.querySelector(".dark-mode-btn input");

darkModeBtn.onclick = function () {
    if (darkModeBtn.checked) {
        document.styleSheets[1].disabled = true;
        document.styleSheets[2].disabled = false;
    } else {
        document.styleSheets[2].disabled = true;
        document.styleSheets[1].disabled = false;
    }
} 
    


