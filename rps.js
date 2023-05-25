const prompt = require('prompt');

  //
  // Start the prompt
  //
  
  prompt.start();


  //Just intro and explaining rules
  console.log("This is just a simple game of Rock, Paper, Scissor in a player v computer manner");
  console.log("Rules:");
  console.log("1. Rock beats Scissors");
  console.log("2. Scissors beats Paper");
  console.log("3. Paper beats Rock");
  console.log("-------------------------------------------------------------------");
  console.log("Please enter 'r' for rock, 'p' for paper or 's' for scissors");


  //getting user input
  prompt.get(['playerInput'], function(err, result)
  {

    //playerInput contains whatever user put
    playerInput = result.playerInput;


    //generating a random input from computer to compare 
    //r, p, s are the choices 
    const choices = ['r', 'p', 's'];

    //rounding up math.random in order to get whole numbers
    const randNum = Math.floor(Math.random() * 3);

    //running the generated number through an array of choices
    const compInp = choices[randNum];


    //letting user know what he chose
    console.log('You chose: ' + playerInput);
    
    //letting user know what computer chose
    console.log('computer chose: ' + compInp);

    //a switch statement to decide who the winner is b/w player and computer
    //doing so by just combining both the answers and crating switch statements following the rules of the game
    switch(playerInput + compInp){
        //all the winning conditions for the player
        case "rs":
        case "sp":
        case "pr":
            console.log('You Win!!!!')
            break;

        //all the losing conditions for the player
        case "sr":
        case "rp":
        case "ps":
            console.log('You lose!!!!')
            break;

        //conditions resulting in a draw
        case "pp":
        case "rr":
        case "ss":
            console.log('You draw!!!!')
            break;
    }

//end
    
});


