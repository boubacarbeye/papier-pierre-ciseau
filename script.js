function computerChoice() {
  const choices = ['rocks', 'papers', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
let score;

window.addEventListener('DOMContentLoaded', () => {
    const savedScore = localStorage.getItem('score');

    if (savedScore !== null) {
        score = Number(savedScore);
    } else {
        score = 0;
        localStorage.setItem('score', score);
    }

    document.querySelector('.score-number').innerHTML = score;
});

function determineWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (
    (player === 'rocks' && computer === 'scissors') ||
    (player === 'papers' && computer === 'rocks') ||
    (player === 'scissors' && computer === 'papers')
  ) {
    score++;
    document.querySelector('.score-number').innerHTML = score;
    localStorage.setItem('score', score);
    return 'You win';

  } else {
    score--;
    document.querySelector('.score-number').innerHTML = score;
    localStorage.setItem('score', score);
    return 'You lose';
  }
}
let scissor = document.querySelector('.scissor');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');

scissor.addEventListener('click', () => {
  let playerChoice = 'scissors';
  let computer = computerChoice();
  let result = determineWinner(playerChoice, computer);
  document.querySelector('.body').innerHTML = `
  <div class="game">
      <div class="mychoice">
        <h1>You Picked</h1>
        <div class="scissors"><img src="./images/icon-scissors.svg" alt=""></div>
      </div>
      <div class="result">
        <h1>${result}</h1>
        <button class="play-again">Play Again</button>
      </div>
      <div class="computerchoice">
        <h1>The House Picked</h1>
        <div class="${computer}"><img src="./images/icon-${computer}.svg" alt=""></div>
      </div>
    </div>
  `;
  document.querySelector('.play-again').addEventListener('click', () => {
    location.reload();
});
});
rock.addEventListener('click', () => {
  let playerChoice = 'rocks';
  let computer = computerChoice();
  let result = determineWinner(playerChoice, computer);
  document.querySelector('.body').innerHTML = `
  <div class="game">
      <div class="mychoice">
        <h1>You Picked</h1>
        <div class="rocks"><img src="./images/icon-rocks.svg" alt=""></div>
      </div>
      <div class="result">
        <h1>${result}</h1>
        <button class="play-again">Play Again</button>
      </div>
      <div class="computerchoice">
        <h1>The House Picked</h1>
        <div class="${computer}"><img src="./images/icon-${computer}.svg" alt=""></div>
      </div>
    </div>
  `;
  document.querySelector('.play-again').addEventListener('click', () => {
    location.reload();
    });
});
paper.addEventListener('click', () => {
  let playerChoice = 'papers';
  let computer = computerChoice();
  let result = determineWinner(playerChoice, computer);
  document.querySelector('.body').innerHTML = `
  <div class="game">
      <div class="mychoice">
        <h1>You Picked</h1>
        <div class="papers"><img src="./images/icon-papers.svg" alt=""></div>
      </div>
      <div class="result">
        <h1>${result}</h1>
        <button class="play-again">Play Again</button>
      </div>
      <div class="computerchoice">
        <h1>The House Picked</h1>
        <div class="${computer}"><img src="./images/icon-${computer}.svg" alt=""></div>
      </div>
    </div>
  `;

  document.querySelector('.play-again').addEventListener('click', () => {
     location.reload();
    });
});


document.querySelector('.rules').addEventListener('click', () => {
  document.querySelector('.rule').classList.add('opacite');
});
document.querySelector('.close-icon').addEventListener('click', () => {
  document.querySelector('.rule').classList.remove('opacite');
});