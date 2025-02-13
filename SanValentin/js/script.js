let btnNo = document.getElementById("btnNo");
btnNo.addEventListener("click", () => { 
    let currentSize = parseInt(window.getComputedStyle(btnNo).fontSize);
    if (currentSize > 5) {
        btnNo.style.fontSize = (currentSize -6) + "px";
    } else {
        btnNo.style.display = "none";
    }
});