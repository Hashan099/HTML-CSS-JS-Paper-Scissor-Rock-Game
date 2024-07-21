//verifying all the dom elements are loded before executing
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".rpsButton");
  const displayscore = document.getElementById("player-score");
  const displayresult = document.getElementById("result");
  const endgamebutton = document.getElementById("endGameButton");
  let score = { player: 0, computer: 0 };

  //entry point
  startgame();

  //function to get the player choice from the user
  function startgame() {
    let playerchoice;
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        playerchoice = event.target.innerHTML;
        playgame(playerchoice);
      });
    });
  }

  // funtion to decide the computer choice
  function computerChoice() {
    const array = ["🤚", "✌", "✊"];
    let choice = Math.floor(Math.random() * array.length);
    let computer = array[choice];
    return computer;
  }

  //function to evaluate player and computer choices
  function playgame(playerchoice) {
    const computer = computerChoice();
    const player = playerchoice;
    let result = "";

    //Conditional for the game
    if (player === computer) {
      result = "Tie";
      displayresult.innerHTML = `<p class ='result-paragraph'> player ${player} <br> Computer  ${computer} <br> Result : Game ${result} </p>`;
    } else if (player === "🤚") {
      switch (computer) {
        case "✌":
          result = "lost";
          break;

        case "✊":
          result = "win";
          break;
      }
    } else if (player === "✌") {
      switch (computer) {
        case "🤚":
          result = "win";
          break;

        case "✊":
          result = "lost";
          break;
      }
    } else if (player === "✊") {
      switch (computer) {
        case "✌":
          result = "win";
          break;

        case "🤚":
          result = "lost";
          break;
      }
    }

    if (result === "win") {
      score.player += 10;
    } else if (result === "lost") {
      score.computer += 10;
    }
    updatedom(player, computer, result);
  
  }
  // updating the dom
  function updatedom(player, computer, result){
    displayresult.innerHTML = `<p class ='result-paragraph'> player ${player} <br> Computer ${computer} <br> Result : player  ${result} </p>`;
    displayscore.innerHTML = ` <p> Player : ${score.player} | ${score.computer} : Computer </P>`;
    gameresult();
  };

  //finalizing the game score
  function gameresult(){

    if(score.player === 200 || score.computer === 200 ){

        if(score.player > score.computer){

          alert(`your score is ${score.player} so You Win the Game Congratulations...`);
          displayresult.innerHTML = `<p class ='result-paragraph'> player 0 <br> Computer 0 </p>`;
          displayscore.innerHTML = ` <p> Player : 0 | 0 : Computer </P>`;
          score["player"] = 0;
          score["computer"] = 0;
        }
        else if(score.player < score.computer){
        
          alert(`Computer score is ${score.computer} so Computer Win the Game`);
          displayresult.innerHTML = `<p class ='result-paragraph'> player 0 <br> Computer 0 </p>`;
          displayscore.innerHTML = ` <p> Player : 0 | 0 : Computer </P>`;
          score["player"] = 0;
          score["computer"] = 0;
        }

    }


  };

  // clear game results
  function clearresults() {
    endgamebutton.addEventListener("click", () => {
      displayresult.innerHTML = `<p class ='result-paragraph'> player 0 <br> Computer 0 </p>`;
      displayscore.innerHTML = ` <p> Player : 0 | 0 : Computer </P>`;
      score["player"] = 0;
      score["computer"] = 0;
    });
  }
  clearresults();
});
