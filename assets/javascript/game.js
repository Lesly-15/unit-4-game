
        // 1. Generate the random number the player will try to reach. Number sb from 19 - 120 only.
        
        var randomToGuess;
        var randomToGuessText; 

        // 2. Assign random values to the Crystal Buttons. I want the values to be only from 1 -12.

        var crystal1Value;
        var crystal2Value;
        var crystal3Value;
        var crystal4Value;

        function randomizeCrystals() {
  
        crystal1Value = Math.floor(Math.random()*13) + 1;
        console.log(crystal1Value);
        crystal2Value = Math.floor(Math.random()*13) + 1;
        console.log(crystal2Value);
        crystal3Value = Math.floor(Math.random()*13) + 1;
        console.log(crystal3Value);
        crystal4Value = Math.floor(Math.random()*13) + 1;
        console.log(crystal4Value);

        };

        // Player score-wins-looses starts in zero.
        var score=0;
        var scoreText = document.getElementById("score");
        scoreText.textContent = score;

        var wins=0;
        var winsText = document.getElementById("wins");
        winsText.textContent = wins;

        var loose=0;
        var looseText = document.getElementById("loose");
        looseText.textContent = loose;
        

        // ***HERE IS WHERE THE GAME STARTS: The player wins if their total score matches the random number from the beginning of the game ***
    
        // 3. Player clicks the crystal and the value of the crystal shows in the score card. 
           
        $( "#crystal1" ).on("click" , function() {
          score = score + crystal1Value;
          console.log(score);
          scoreText.textContent = score;
          if (score > randomToGuess) {
            alert ("You overpassed the random number, you lost :c ");
            loose = loose + 1;
            looseText.textContent = loose;
          };

        if (score === randomToGuess){
            alert ("Cool! You reached the number");
            wins = wins + 1;
            winsText.textContent = wins;
            }


        });            

            
        $( "#crystal2" ).on("click" , function() {
          score = score + crystal2Value;
          console.log(score);
          scoreText.textContent = score;
          if (score > randomToGuess) {
            alert ("You overpassed the random number, you lost :c ");
            loose = loose + 1;
            looseText.textContent = loose;
          };

        if (score === randomToGuess){
            alert ("Cool! You reached the number");
            wins = wins + 1;
            winsText.textContent = wins;
            }

        });
            

        $( "#crystal3" ).on("click" , function() {
          score = score + crystal3Value;
          console.log(score);
          scoreText.textContent = score;
          if (score > randomToGuess) {
            alert ("You overpassed the random number, you lost :c ");
            loose = loose + 1;
            looseText.textContent = loose;
          };

        if (score === randomToGuess){
            alert ("Cool! You reached the number");
            wins = wins + 1;
            winsText.textContent = wins;
            }

        });

        $( "#crystal4" ).on("click" , function() {
          score = score + crystal4Value;
          console.log(score);
          scoreText.textContent = score;
          if (score > randomToGuess) {
            alert ("You overpassed the random number, you lost :c ");
            loose = loose + 1;
            looseText.textContent = loose;
          };

        if (score === randomToGuess){
            alert ("Cool! You reached the number");
            wins = wins + 1;
            winsText.textContent = wins;
            }

        });



        // RESET function
        $( "#resetBtn" ).on("click" , function() {

            reset ();

        });
           
    function reset () {

        // execute the random numbers function

        randomizeCrystals();

        // reset score to 0

        score = 0

        randomToGuess = Math.floor(Math.random()*121) + 19;
        console.log(randomToGuess);
        randomToGuessText = document.getElementById("randomToGuess");
        randomToGuessText.textContent = randomToGuess;

    };

    reset ();
