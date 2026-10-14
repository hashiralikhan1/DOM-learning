  const score = JSON.parse(localStorage.getItem ('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };
          updateScoreElement();

    


        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = '';

            if (playerMove === 'Scissor') {


                if (computerMove === 'rock') {
                    result = 'you lose';
                }
                else if (computerMove === 'paper') {
                    result = 'you win.';
                }
                else if (computerMove === 'scissor') {
                    result = 'Tie.';
                }
            }

            else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'you win.';
                }
                else if (computerMove === 'paper') {
                    result = 'Tie.';
                }
                else if (computerMove === 'scissor') {
                    result = 'you lose';
                }
            }

            else if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie.';
                }
                else if (computerMove === 'paper') {
                    result = 'you lose';
                }
                else if (computerMove === 'scissor') {
                    result = 'you win.';
                }
            }


            if (result === 'you win.') {

                score.wins += 1;
            }
            else if (result === 'you lose') {
                score.losses += 1;
            }
            else if (result === 'Tie.') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            
            updateScoreElement();
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = 
            `
             You <img src="./images/${playerMove}-emoji.png">
    <img src="./images/${computerMove}-emoji.png" alt="" srcset="">
    Computer`
            ;

   
        }

           
        function pickComputerMove() {

            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissor';
            }
            return computerMove;
        }


           function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `
        Wins: ${score.wins},
        Losses: ${score.losses},
        Ties: ${score.ties}
    `;
}

     function handleCostKeydown() {
           
                    if (event.key === 'Enter') {
                        calculateTotal();
                    }
        }
        function calculateTotal() {
            const inputElement = document.querySelector('.js-cost-input');
            
            let cost = Number(inputElement.value);
            

            if (cost < 40) {
                cost= cost + 10;
            
            }


            document.querySelector('.js-total-cost').innerHTML = `$ ${cost}`;
        }




      function subscribe() {
        const buttonElement = document.querySelector('.js-scribe-button');
            if (buttonElement.innerHTML === 'Subscribe') {
                buttonElement.innerHTML= 'Subscribed'
                
            } else {
                buttonElement.innerHTML = 'Subscribe'
            }
      }