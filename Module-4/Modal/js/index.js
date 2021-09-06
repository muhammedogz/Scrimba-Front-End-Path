const overlay = document.getElementById("overlay");

const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");

console.log(overlay);

openBtn.addEventListener("click", function()  {
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
});