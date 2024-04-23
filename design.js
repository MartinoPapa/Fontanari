window.onload = function(){
    computeNavbar();
};
window.onresize = function(){
    computeNavbar();
};

function computeNavbar(){
    /*var homeDiv = document.getElementById("home");*/
    var navbar = document.getElementById("navbar");
    /*var top = (navbar.offsetHeight - homeDiv.offsetHeight) + "px";
    homeDiv.style.top = top;*/ //barra
    var off = 0;
    var a = document.getElementById("achi");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('chi').offsetTop- ${off} );`);
    a = document.getElementById("acat");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('catering').offsetTop- ${off} );`);
    a = document.getElementById("aeve");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('eventi').offsetTop- ${off} );`);
    a = document.getElementById("acont");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('contatta').offsetTop- ${off} );`);
    a = document.getElementById("bcont");
    a.setAttribute('onclick', `window.scrollTo(0, document.getElementById('contatta').offsetTop- ${off} );`);
}

var imgFolder = "img/";
var vettoreA = ["chi0.jpg", "chi1.jpg", "festa.jpeg"];
var indexA = 0;

function prevImgA(){
    imgA = document.getElementById("imgA");
    --indexA;
    imgA.src = imgFolder + vettoreA[indexA%vettoreA.length];
}

function nextImgA(){
    imgA = document.getElementById("imgA");
    ++indexA;
    imgA.src = imgFolder + vettoreA[indexA%vettoreA.length];
}

var vettoreB = ["chi0.jpg", "chi1.jpg", "festa.jpeg"];
var indexB = 0;

function prevImgB(){
    imgB = document.getElementById("imgB");
    --indexB;
    imgB.src = imgFolder + vettoreB[Math.abs(indexB%vettoreB.length)];
}

function nextImgB(){
    imgB = document.getElementById("imgB");
    ++indexB;
    imgB.src = imgFolder + vettoreB[Math.abs(indexB%vettoreB.length)];
}