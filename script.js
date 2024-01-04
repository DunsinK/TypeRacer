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
function format(obj)
{
    var str = JSON.stringify(obj, 0, 4),
        arr = str.match(/".*?":/g);

    for(var i = 0; i < arr.length; i++)
        str = str.replace(arr[i], arr[i].replace(/"/g,''));

    return str;
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
            })
            .catch(err => {
                console.log(`error ${err}`)
            }); 


    /*    var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers:  { 'X-Api-Key': 'H6Q6U3Drcib7eGfS8qSl6A==iCuxXhnNMFYnlMRk'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});*/
    //H6Q6U3Drcib7eGfS8qSl6A==iCuxXhnNMFYnlMRk
    //const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=age.json");
    //const movies = await response.json();
    //console.log(movies);
}




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
        time = 0;
        wordCount = 0;
        
    }
}
function startTimeLoop(){
    setInterval(TimeLoop,1000);
    console.log('called to start time loop')
}

//on start stuff
startTimeLoop();
setText(exampleText)
/*
var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,age
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});*/