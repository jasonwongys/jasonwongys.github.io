A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.



Approach and Process
What in my process and approach to this project would I do differently next time?

** Approach is to break down the tasks required for coding down to granular level. Usage of both high level and low level pseudo codes and prioritize tasks for MVP.

What in my process and approach to this project went well that I would repeat next time?

** Usage of pseudo codes and rough sketches on how the information is passed through the game.

Code and Code Design
What in my code and program design in the project would I do differently next time?

** Usage of string comparisons. Write out the functions required for each task. Break down the tasks if required.

What in my code and program design in the project went well? Is there anything I would do the same next time?

** Appending elements to the DOM went well. Having proper naming conventions helped with understanding which elements belongs to which function.



For each, please include code examples.

Code snippet up to 20 lines.

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

    if(generatedWord.length != correctLetters.length){
        for(var i = 0; i < generatedWord.length; i ++){
            if(generatedWord[i].includes(player2GuessedWord[0])){
                letterReveal[i].innerText = player2GuessedWord[0];
                correctLetters.push(player2GuessedWord[0]);
            }


Code design documents or architecture drawings / diagrams.
WDI Unit 1 Post Mortem
What habits did I use during this unit that helped me?

** Pseudo coding.

What habits did I have during this unit that I can improve on?

** Time management.

How is the overall level of the course during this unit? (instruction, course materials, etc.)


