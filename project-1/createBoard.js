var body = document.querySelectorAll('.container');
var wordArea = body.querySelectorAll('#wordArea');

function makeLetters() {

    var createLetters = wordArea.createElement("div"); // create a bunch of divs
    createLetters.setAttribute('id','newLetters'); //set each div with id of
    for(var i=0; i < player1SelectedWord.length; i++)
    {
        var letters = document.createElement('div');
        letters.innerHTML = player1SelectedWord[i];
        createLetters.appendChild(letters);
    }

    wordArea.appendChild(createLetters);
}

// create a div for each letter player 1 has entered
// set the id for each div
