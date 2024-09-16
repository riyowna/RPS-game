let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();
  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'angello') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
  
    if (result === 'You win.') {
      score.wins += 1;
      alert(`You picked ${playerMove}, the computer picked ${computerMove}. Wow nanalo ka, angas mo na niyan?
      Wins: ${score.wins} Losses: ${score.losses} Ties:${score.ties}`)
    } else if (result === 'You lose.') {
      score.losses += 1;
      alert( `You picked ${playerMove}, the computer picked ${computerMove}, bobo mo naman boi. Wins: ${score.wins} Losses: ${score.losses} Ties:${score.ties}`)
    } else if (result === 'Tie.') {
      score.ties += 1;
      alert(`You picked ${playerMove}, the computer picked ${computerMove}, gaya gaya ampota?? 
      Wins: ${score.wins} Losses: ${score.losses} Ties:${score.ties}`)
    }
  
    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();

  
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'romeo';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'riven';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'angello';
    }
  
    return computerMove;
  }
}
