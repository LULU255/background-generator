var css = document.getElementsByTagName("h3")[0];
var colorleft = document.getElementsByName("color1")[0];
var colorright = document.getElementsByName("color2")[0];
var body = document.querySelector("body");

readColor();

function readColor() {
    body.style.background = "linear-gradient(to right, " + colorleft.value + ", " + colorright.value + ")";
}
colorleft.addEventListener("input", function() {
    readColor();
    css.textContent = colorleft.value + "/ " + colorright.value;
})
colorright.addEventListener("input", function() {
    readColor();
    css.textContent = colorleft.value + "/ " + colorright.value;
})

