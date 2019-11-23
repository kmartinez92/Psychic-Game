

var randomNumber = getRandomNumber;
var guess;
var count = 0;
var correctGuess = false;

function.getRandomNumber(upper){

    var number = Math.floor(math.random()* upper) + 1;
    return number;
}

while(true){
    guess = prompt("Guess a number between 1-10!"); 
    count += 1; 
    if(parseInt(guess) === randomNumber){
        correctGuess = true; 
        break;
    }

}

document.write('<h1>You Got It Right!</h1>')
document.write('You tried ' + count + 'to get it right!')




    
    

  


