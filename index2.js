let bulb=document.querySelector(".bulb");
let btn=document.querySelector(".first");
let btn2=document.getElementsByTagName("button");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
function onBulb(){
    console.log("bulb is on");
    bulb.classList.add("active");
    btn.classList.add("btnactive");
    btn2.classList.add("btn2");
    audio.play();

}
function offBulb(){
    bulb.classList.remove("active");
    btn.classList.remove("btnactive");

}
function btnSwitch(){
    btn.classList.add("btnactive");
}