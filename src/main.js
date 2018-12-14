( function() {

//Game Variables

//a random number... to be generated.
//currently, we are using a static number but it will be changed soon
   
  var  mysteryNum=0;
startGame();//initializes the game with a random number
 
   
//player's guess
    var playerGuessedNum=0;
//maximum number of guesses allowed
    var maxGuesses=4;
//how many guesses the user has made?
    var guessCount=0;
//update the display after each guess
    var currentStatus=""; 
   var isGuessCorrect=false;
 
   
var input =document.querySelector("#guessbox");
var output=document.querySelector("#output");

var button=document.querySelector("#submit");
button.addEventListener("click",onGuessSubmit,false);

    var scale = document.querySelector("#arrow");
    
window.addEventListener("keydown",onEnterPressed,false);
    
    function render(){
    
    arrow.style.left =playerGuessedNum * 3 + "px";
    }
 

function startGame()
{
   //generates a random number between 1 and 100 (inclusive)
    mysteryNum= Math.floor(Math.random()*100);
  
    //console.log("rand num is: "+randNum);      
}
    
function onEnterPressed()
{
    if(event.keyCode==13)
        checkNumber();
}
    
function onGuessSubmit()
{
 checkNumber();
}
 
   
function checkNumber()
    {
       
     playerGuessedNum=parseInt(input.value);  
    if(isNaN(playerGuessedNum))
        output.innerHTML="Enter a proper number";
        
else if(playerGuessedNum<1 || playerGuessedNum >100);
    else  playGame();
            
    }
    
 
function playGame()
    {
  
    updateGameStatus();
       
        render();
       
        
        if(playerGuessedNum>mysteryNum)
            output.innerHTML="Too high. <br>"+currentStatus;
        else if(playerGuessedNum<mysteryNum)
            output.innerHTML="Too Low.<br>"+currentStatus;
        else 
        {   
            output.innerHTML="You got it! Game Over!<br>"+currentStatus;  
            isGuessCorrect=true;          
               
        }
        
if(guessCount>=maxGuesses||isGuessCorrect)     endGame();
        
    }
    
    
    function endGame()
    {
            
        if(!isGuessCorrect)
        {
          output.innerHTML="You have reached the maximum number of tries.. Game Over! The mystery number was: "+mysteryNum;  

         }
        else 
            output.innerHTML="You won the game in "+guessCount+" tries!";
       
button.removeEventListener("click",onGuessSubmit,false);
        
window.removeEventListener("keydown",onEnterPressed,false);
 
        button.disabled=true;
        input.disabled=true;
    }
    
    function updateGameStatus()
    {
     //increase the count of number of guesses made
        guessCount++;
var remainingGuesses= maxGuesses - guessCount;
        
    currentStatus="Guesses: "+guessCount+", Remaining: "+remainingGuesses;
            
            
        
    }
    
    
    
}());