// Assignment 4

// Exercise 1

/* const target = Math.floor(Math.random() * 9 + 1);
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
            console.log("You guessed the right number!"); 
        }
    }
*/

// Exercise 2

function generateRandomArray() {
    for (i = 0; i <1; i++) {
    console.log(Array.from ({
        length: 7
    }, () =>  Math.floor(Math.random() * 100) +1))
    }
   }

generateRandomArray(); 