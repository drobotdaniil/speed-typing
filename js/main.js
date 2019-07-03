window.addEventListener("load", init);
//Globals

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");


const words = [
    "apple",
    "hat",
    "mayonesse",
    "lemon",
    "cheesecake",
    "free",
    "cake",
    "melon",
    "pie",
    "art",
    "cinema",
    "spagetti",
    "pizza",
    "love",
    "friend",
    "pen",
    "pencil",
    "javascript",
    "dog",
    "cat",
    "spider",
    "bird"
];

//Initialize Game
function init() {
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdawn every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}

//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        wordInput.value = "";
        score++;
    }
    

    // is score is -1, display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score;
    }
    
}

//match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

//Pick and show random word
function showWord(words) {
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
    //make sure time is not run out
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        //game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game is over!!!";
        score = -1;
    }
}