
var scoreForPlayer1 = 0;
var totalScoreForPlayer2 = 0;
var player1SelectedWord;
var player2GuessedWord;
var storeCorrectLetters = [];
var guessChance = 3;


    window.onload = function() {
   console.log("testing");
};
//Prompt player 1 and return to global variable for selectedWord

function promptAndSplit(event){

    document.querySelector("#enterWordBtn").addEventListener("click", function() {
        player1SelectedWord = document.getElementById('getWord').value.split("");
        //alert("The player entered: " + player1SelectedWord.length + "words");
        console.log(player1SelectedWord);
        createLetters(player1SelectedWord);
        promptPlayer2ForWord (player1SelectedWord);
    });
};

var wordsArea = document.getElementById('wordArea');
var body = document.getElementsByTagName('body');

function createLetters(player1SelectedWord, event) {

    for(var i = 0; i < player1SelectedWord.length; i++){
        var letterElement = document.createElement("span");
        letterElement.textContent = "X" ///player1SelectedWord[i];
        letterElement.id = "letters";
        wordsArea.appendChild(letterElement); // put th into wordArea
    }
    //body.appendChild(wordsArea);
}
function promptPlayer2ForWord (player1SelectedWord){
    confirm("Player 2: Guess the word and enter in textbox");

    document.querySelector("#guessWordBtn").addEventListener("click", function() {
        player2GuessedWord = document.getElementById('guessWord').value.split("");
        console.log(player2GuessedWord);
        checkGuessedWord(player1SelectedWord, player2GuessedWord);
        guessWord.value = "";
});
    if (player2GuessedWord > player1SelectedWord)
    {
        confirm("please keep to " + player1SelectedWord.length);
    }
    console.log(player2GuessedWord);
}

function checkGuessedWord(player1SelectedWord, player2GuessedWord){

    var letterReveal = document.querySelectorAll('#letters');

      if (player1SelectedWord.length == player2GuessedWord.length) {
        for (var i = 0; i < player2GuessedWord.length; i++) {
            if (player1SelectedWord[i] == player2GuessedWord[i]) {
                storeCorrectLetters.push(player1SelectedWord[i]);
                letterReveal[i].textContent = player2GuessedWord[i];
            }
            else if(storeCorrectLetters.length < player1SelectedWord)
            {
                confirm("You have " + storeCorrectLetters.length + " correct");
            }
        } if(player1SelectedWord === storeCorrectLetters){
            confirm("You guessed the correct word");
        }
    }else
    {
        confirm("The entered text doesn't match player 1. Guess again");
    }
}
//summarizeRoundScore(player1SelectedWord);
function summarizeRoundScore(player1SelectedWord){

    confirm("The correct letters are: " + "\n" + "The selected word is : " + player1SelectedWord);

    var playAgain = prompt("Play again ?");

    if(playAgain === 'y'){
        storeCorrectLetters.length = 0;

        location.reload(true);

    }else if(playAgain ==='n'){
        window.close();
    }
}

promptAndSplit();