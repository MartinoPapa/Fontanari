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
    var a = document.getElementById("achi");
    console.log(a);
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('chi').offsetTop- ${navbar.offsetHeight} );`);
    a = document.getElementById("acat");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('catering').offsetTop- ${navbar.offsetHeight} );`);
    a = document.getElementById("aeve");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('eventi').offsetTop- ${navbar.offsetHeight-2} );`);
    a = document.getElementById("acont");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('contatta').offsetTop- ${navbar.offsetHeight} );`);
}