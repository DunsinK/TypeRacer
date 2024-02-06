/* to do list
    
    - get text using an api
    - highlight text
    - display score once texts are equal
    - style a bit
    - add mulitple modes
*/


// variables ima need 
var textInput = document.getElementById("textInput");
var givenText = document.getElementById("givenText");
var wpmText = document.getElementById("wpmText")
var timeText = document.getElementById("timeText")
var accuracyText = document.getElementById("accuracyText")
var winText = document.getElementById("winText")


// variables needed to work
var wpm = 0;
var wordsCurrent = 0;
var timeCurrent = 0;
var wordCount =""
var time = 0

var exampleText = "There is no hunting like the hunting of man, and those who have hunted armed men long enough and liked it, never care for anything else thereafter."
var accuracyText = ""

function typing(){
    
    accuracyText += textInput.innerText
    
}
function setText(textToGive){
    givenText.innerText = textToGive
}
function stats(){

}

function disablePaste(){
    alert("you cannot paste sry ;(")
}
async function logMovies() {
    let options = {
        method: 'GET',
        headers: { 'x-api-key': 'H6Q6U3Drcib7eGfS8qSl6A==iCuxXhnNMFYnlMRk' }
      }
      
      let url = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
      
      
      fetch(url,options)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                
                console.log(data[0]['quote'])
                exampleText = data[0]['quote'];
                givenText.innerText = data[0]['quote'];
                time = 0;
            })
            .catch(err => {
                console.log(`error ${err}`)
            }); 

}



var promptTextArray;
function TimeLoop(){
    time++ 
    timeText.innerText = time + " seconds"
    wordCount = textInput.value.split(" ").length - 1
    wpm = wordCount/time*60;
    wpmText.innerText = wpm +"wpm"
 
    if(textInput.value == exampleText){
        console.log(
            "good job you won in "+ time+" seconds"
        )
        textInput.value = "";
        
        console.log(wpmText + "this is your wpm")
        winText.innerText = "good job you won in "+ time+" seconds" + "with a wpm of " +wpm
        alert("good job you won in "+ time+" seconds" + "with a wpm of " +wpm)
        time = 0;
        wordCount = 0;
        
    }
}

function addCookiesHighScore(){
   //document.cookie = "highscore = "+wpm +"wpm;"
   document.cookie = "highscore = wpm"+wpm;
   x = document.cookie
   let decodedCookie = decodeURIComponent(document.cookie);
   console.log(decodedCookie)
}

function startTimeLoop(){
    //promptTextArray = textToGive.split("")
    setInterval(TimeLoop,1000);
    console.log('called to start time loop')
}

//on start stuff
startTimeLoop();
setText(exampleText)
