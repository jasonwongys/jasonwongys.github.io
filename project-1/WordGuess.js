
/*
Win condition:
Loop until all the correct words are guessed
    - restart game
    - Display score*/

//Store word length and score as global variables

var scoreForPlayer1 = 0;
var totalScoreForPlayer2 = 0;
var player1SelectedWord;
var player2GuessedWord;
var storeCorrectLetters = [];
var guessChance = 3;

/*Player1 enters a word.
    - prompt user for word and *word length
            if selected word is less than

    - split the selected word in array
      store the player1SelectedWord  ( to match win condition)
        -
        return player1SelectedWord */
promptAndSplit();


function promptAndSplit() //Prompt player 1 and return to global variable for selectedWord
{
    var selectedWord = prompt("Enter a word"); //change to innerHTML or textContent
    var wordLength = selectedWord.length;
    console.log(selectedWord);

    confirm("The word length is : " + wordLength);
    confirm("The player entered: " + selectedWord.length+ " letters");
    player1SelectedWord = selectedWord.split("");
    console.log(player1SelectedWord);
    alert("The player entered the word: " + player1SelectedWord);
    promptPlayerForWord (player1SelectedWord);
                // if (wordLength !== selectedWord.length || selectedWord.length > wordLength)
                // {
                //     prompt("Please match the word length of: " + wordLength);
                //     var selectedWord = prompt("Enter a word");
                // }
}
/*Player2 guesses the word
    - prompt the user to enter his guessed word
    - store the guessed word in array
        -push the entered.word in storeCorrectLetters array */

        /*Compare the guessed word with selected word
    - use for loop to match the words.
    - if any letters match,add to score +1*/

function promptPlayerForWord (player1SelectedWord)
{
    var player2Word = prompt("Player 2: Guess the word");
    player2GuessedWord = player2Word.split("");
    console.log(player2GuessedWord);

    checkGuessedWord(player1SelectedWord, player2GuessedWord);
}

function checkGuessedWord(player1SelectedWord, player2GuessedWord)
{
    for(var i = 0; i < player1SelectedWord.length;i++)
    {
        for(var j = 0; j < player2GuessedWord.length; j++)
        {
            console.log("The stored correct letter are: " + storeCorrectLetters);
            if(player1SelectedWord[i] === player2GuessedWord[j])
            {
                storeCorrectLetters.push(player2GuessedWord[j]);
                totalScoreForPlayer2 += 1;
            }
        }
    }
        summarizeRoundScore(storeCorrectLetters,player1SelectedWord);
}


function summarizeRoundScore(storeCorrectLetters,player1SelectedWord )
{
    alert("You scored " + totalScoreForPlayer2 + " points !");

    confirm("The correct letters are: " + storeCorrectLetters + "\n" + "The selected word is : " + player1SelectedWord);

    var playAgain = prompt("Play again ?");

    if(playAgain === 'y')
    {
        storeCorrectLetters.length = 0; // set the stored array to empty
        console.log(storeCorrectLetters);
        promptAndSplit();

    }else if(playAgain ==='n')
    {
        window.close();
    }
}