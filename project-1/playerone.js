var wordList = ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "compass", "grunt", "pixel", "document", "object", "ruby", "modernizer", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];

    window.onload = function() {
   console.log("testing");
};

var generatedWord;
var wordsArea = document.getElementById('wordArea');
var body = document.getElementsByTagName('body');
var guessedArea = document.getElementById('guessed-words');
var correctLetters = [];
var wrongGuessLetters = [];

// get a random word from object array and display
function createBoard() {

    var randomWord = wordList[Math.floor(Math.random() * (77 -4) + 6)];
    generatedWord = randomWord.split("");

    for(var i = 0; i < randomWord.length; i++){
        var letterElement = document.createElement("span");
        letterElement.textContent = "_" ///player1SelectedWord[i];
        letterElement.id = "letters";
        //letterElement.style.letterspacing = "2px";
        wordsArea.appendChild(letterElement);
    }
}
// player enters a letter
function promptPlayerForLetter (){
    //confirm("Player 2: Guess the letter and enter in textbox");

    document.querySelector("#guessWordBtn").addEventListener("click", function() {
        player2GuessedWord = document.getElementById('guessWord').value.split("");
        console.log(player2GuessedWord);
        checkGuessedWord(player2GuessedWord);
        var inputBox = document.getElementById('guessWord');
        inputBox.value = "";
});

}
function checkGuessedWord(player2GuessedWord) {

    var letterReveal = document.querySelectorAll('#letters');
    var wrongLetters = document.createElement("span");

    wrongLetters.id = "wrong";
    guessedArea.appendChild(wrongLetters);

    for(var j = 0; j < generatedWord.length; j++){ // check for wrong letters
        if (generatedWord[i] != player2GuessedWord[0]){
                wrongLetters.innerText = player2GuessedWord[0];
                wrongGuessLetters.push(player2GuessedWord[0]);
            }
     }
//if(player2GuessedWord[0] == generatedWord[i])
    if(generatedWord.length != correctLetters.length){
        for(var i = 0; i < generatedWord.length; i ++){
            if(generatedWord[i].includes(player2GuessedWord[0])){
                letterReveal[i].innerText = player2GuessedWord[0];
                correctLetters.push(player2GuessedWord[0]);
            }
        }
    }else{
        alert("Awesome!! You got all the letters");
        var input = prompt("Play again? (y/n)");

        if(input === 'y')
        {
            location.reload(true);
        }
        else
        {
            window.close();
        }
    }
}
createBoard();
promptPlayerForLetter();

// else if(!(player2GuessedWord[0].includes(generatedWord[i]))