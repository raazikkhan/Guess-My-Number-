
/*document.querySelector('.message').textContent = '🎉 correct Number !'

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 12;
document.querySelector('.guess').value = 23;*/

//Game logic !
let score = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ NO Number !';
    }
    //when player wins 
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number !';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b342';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
    }
    //when  guess is too high
    else if (guess > secretNumber) {
        if (score > 1){
            document.querySelector('.message').textContent = 'Too High 📈';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You Lost the game! 🐥'
            document.querySelector('.score').textContent = 0;
        }
        
    }
    //when guess is too low
    else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low ! 📉';
            score--;
            document.querySelector('.score').textContent = score;  
        }else {
            document.querySelector('.message').textContent = 'You Lost the game! 🐥'
            document.querySelector('.score').textContent = 0;
        }
        
    }
});
//Coding Challenge #1
/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the'again'class and attach a clickeventhandler 
2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and'secretNumber' variables
3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput fields
4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)*/

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });