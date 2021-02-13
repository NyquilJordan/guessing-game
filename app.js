

























let maximum = parseInt(prompt("Enter maximum number"));
while (!maximum) {
     maximum = parseInt(prompt("Enter valid number"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if(guess === `quit`) break;
    attempts++;
    if (guess > targetNum) {
       guess = (prompt("Too high guess again:"));
    }
    else { guess < targetNum
        guess = (prompt("Too low guess again:"))
     }
}
if(guess === `quit`) {
    console.log ("Game over")
} else {
console.log(`You win! It took ${attempts} guesses!`) 
}