  
    //create an array of the alphabet
    var randomLetter = ('abcdefghijklmnopqrstuvwxyz')
      console.log(randomLetter)
    
    // Creating variable to hold wins, losses, GuessLeft and Yourguesssofar
    
      var wins = 0;
      var losses = 0;
      var GuessLeft = 9;
      var Yourguesssofar = "";
      
      //create variables that hold references
      var directionsText = document.getElementById("direction-text");
      var userChoiceText = document.getElementById("userchoice-text");
      var computerChoiceText = document.getElementById("computerchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var GuessLeftText = document.getElementById("Guessleft-text");
      var YourguesssofarText = document.getElementById("Yourguesssofar-text");
      
      
      //reset
      var reset = function(){
      GuessLeft = 9;
      Yourguesssofar = "";
      }
    
      // This function is run whenever the user presses a key.
      
      document.onkeyup = function(event) {
          
              var userGuess = event.key;
              
               //Randomly generate letter
               var getRandomLetter = randomLetter[Math.floor(Math.random() * randomLetter.length)];
           
           //This logic determines the outcome of the game
              if(GuessLeft > 0){
              
              if ((userChoiceText != getRandomLetter) && (GuessLeft !=0)){
                  GuessLeft--;
                              
                  //Displays user input
                  Yourguesssofar += userGuess + ',';
                  }						
                  if (GuessLeft === 0) {
                  losses++;
                  reset();
              }
              else if(userGuess === getRandomLetter){
                      wins++;
                      reset();
              }
                                  
          //Hides directions
           directionsText.textContent = "";
      
          //displays user guesses, wins, losses
           userChoiceText.textContent = "Your choice: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + getRandomLetter;
      winsText.textContent = "wins: " + wins;
       lossesText.textContent = "losses: " + losses;
           GuessLeftText.textContent = "guess left: " + GuessLeft;
           YourguesssofarText.textContent = "guesses so far:" + Yourguesssofar;
      }
  };
      
