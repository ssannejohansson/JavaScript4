// Assignment 4

// Exercise 1


function guessNumberGame () {
const target = Math.floor(Math.random() * 10 + 1);
let guess = null;

while (guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = parseFloat(prompt("Guess the number!")); 

    if (guess < target) {
            alert("Higher...");
        } else if (guess > target) {
            alert("Lower..."); 
        } else {
            console.log(`Target: ${target} Guess: ${guess}`);
            alert("You guessed the right number!"); 
        }
    }
}

guessNumberGame ();