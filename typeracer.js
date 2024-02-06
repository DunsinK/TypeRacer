var horse1 = document.getElementById("horse1");
var horse2 = document.getElementById("horse2");
var horse3 = document.getElementById("horse3");
var horse4 = document.getElementById("horse4");
var playerIsComplete = false;

var h1right = 0;
var h2right = 0;
var h3right = 0;
var h4right = 0;
//set horses position
horse1.style.position = "absolute";
horse2.style.position = "absolute";
horse3.style.position = "absolute";
horse4.style.position = "absolute";



horse1.style.right = "500px";
horse2.style.right = "200px";
setInterval(moveHorses(0), 1000)
function typing(){

}
function complete(){

}
function moveHorses(int = myPercentageOfText){
    horse1+=10
    horse2+= 8
    horse3+= 6
    horse4 += 3

    horse1.style.right = ""+h1right+"px";
    horse2.style.right = h2right+"px";
    horse3.style.right = h3right+"px";
    horse4.style.right = h4right+"px";


    if(playerIsComplete)
        clearInterval();
}
function reset( ){
    horse1.style.right = "0px";
    horse2.style.right = "0px";
    horse3.style.right = "0px";
    horse4.style.right = "0px";

}
