
function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.style.display === "none" || getComputedStyle(element).display === "none") {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
}

function updateH1FromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');
    if (utmTerm && h1Element) {
        h1Element.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    console.log(timeString);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

document.addEventListener('DOMContentLoaded', () => {
    showMessage("Скрипт загружен!");
    logCurrentTime();
    
    resetBackgroundColor(); 
    changeBackgroundColor("lightblue"); 
    
    toggleVisibility('.content'); 
    updateH1FromUrl(); 
});
