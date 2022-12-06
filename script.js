const billets=document.getElementsByClassName("billet");
console.dir(billets);
let posBillet = 0;
function GagnePerdu(cercleClick){
if(posBillet === cercleClick) {
    alert("Gagné");
} else {
    alert("Perdu");
 }
}
function reset(cercleClick){
    cercles[cercleClick].style.top = "0";
    billets[posBillet].style.backgroundImage = "";
    posBillet = getRandomInt(0,2);
    billets[posBillet].style.backgroundImage = "url(./assets/image/500e.png)";
}
// Je déclare une fonction
function getRandomInt(min, max) {
    // min = Math.ceil(0);
    // console.log(min);
    // max = Math.floor(2);
    // console.log(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// J'appelle une fonction
posBillet = getRandomInt(0, 2);
console.log(posBillet);        
billets[posBillet].style.backgroundImage = "url(./assets/image/500e.png)";

const cercles = document.querySelectorAll(".cercle");
cercles[0].addEventListener("click",function(){
    console.log("click");
    cercles[0].style.top = "-200px";
    GagnePerdu(0);
    reset(0);
})
cercles[1].addEventListener("click",function(){
    console.log("click");
    cercles[1].style.top = "-200px";
    GagnePerdu(1);
    reset(1);
})
cercles[2].addEventListener("click",function(){
    console.log("click");
    cercles[2].style.top = "-200px";
    GagnePerdu(2);
    reset(2);
})

