window.onload = function(){
    computeNavbar();
};
window.onresize = function(){
    computeNavbar();
};

function computeNavbar(){
    var homeDiv = document.getElementById("home");
    var navbar = document.getElementById("navbar");
    var top = (navbar.offsetHeight - homeDiv.offsetHeight) + "px";
    homeDiv.style.top = top;
}