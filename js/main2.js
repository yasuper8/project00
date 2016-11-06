console.log("main2.js linked!")
$( document ).ready(function() {
    console.log( "ready!" );

  var $player1 = $(".player1");
  var $player2 = $(".player2");
  var distanceToGoalP1 = 0;
  var distanceToGoalP2 = 0;

  function moveForward(player) {
    if (player === $player1) {
      distanceToGoalP1 += 5;
    }
    if (player === $player2) {
      distanceToGoalP2 += 5;
    }
  }

  function moveBackward(player) {
    if (player === $player1) {
      distanceToGoalP1 -= 5;
    }
    if (player === $player2){
      distanceToGoalP2 -= 5;
    }
  }

  function checkWin() {
    if (distanceToGoalP1 === 85) {
      resetGame();
      alert("Player1 Win!");

    }
    if (distanceToGoalP2 === 85) {
      resetGame();
      alert("Player2 Win!");
    }
  }

  function resetGame() {
    distanceToGoalP1 = -4;
    distanceToGoalP2 = -4;
    $player1.css("left", distanceToGoalP1 + "%");
    $player2.css("left", distanceToGoalP2 + "%");
  }

  $(document).on("keydown", function(e) {

    if (e.which === 76) {
      console.log("l is pressed");
      if (distanceToGoalP1 < 90) {
        moveForward($player1);
        $player1.css("left", distanceToGoalP1 + "%");
        console.log(distanceToGoalP1);
        checkWin()
        if (distanceToGoalP1 > 84) {
        // player1.resetGame();
        }
      }
    }
    if (e.which === 74) {
      console.log("j is pressed");
      if(distanceToGoalP1 > 0) {
      moveBackward($player1);
      $player1.css("left", distanceToGoalP1 + "%");
      }
    }
    if (e.which === 68) {
      console.log("d is pressed");
      if (distanceToGoalP2 < 90) {
        moveForward($player2);
        $player2.css("left", distanceToGoalP2 + "%");
        console.log(distanceToGoalP2);
        checkWin();
      }
    }
    if (e.which === 65) {
      console.log("j is pressed");
      if(distanceToGoalP2 > 0) {
      moveBackward($player2);
      $player2.css("left", distanceToGoalP2 + "%");
      }
    }
    if (e.which === 71 ) {
      console.log("g pressed");
      resetGame();
    }
  });



}); // end ready
