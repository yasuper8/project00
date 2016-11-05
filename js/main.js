console.log("main.js linked")
$( document ).ready(function() {
    console.log( "ready!" );


  var Player = {
    moveForward: function() {
      this.distanceToGoal += 5;
    },
    moveBackward: function() {
      this.distanceToGoal -= 5;
    },
    resetGame: function() {
      if ((player1.distanceToGoal > 84) || (player2.distanceToGoal > 84)) {
        player1.distanceToGoal = -4;
        player2.distanceToGoal = -4;
      }
    },
    checkWin: function() {
      if(this.distanceToGoal === 85) {
        // player1.distanceToGoal = 0;
        // player2.distanceToGoal = 0;
        // game.resetGame();
        this.score += 1;
        console.log(this.score);
        this.resetGame();
        alert(this.name + " Wins!");
        this.resetGame();
        // $(window).off("keydown");

      }
    }
  }


  function resteGame() {

      player1.distanceToGoal = 0;
      player2.distanceToGoal = 0;

  }

  // var Game = {
  //   resetGame: function() {
  //     player1.distanceToGoal = 0;
  //     player2.distanceToGoal = 0;
  //   }
  // }


  function GameFactory(){
    var game = Object.create(Game);
    game.numGame = 0;
    return game;
  }

  function PlayerFactory(name) {
    var player = Object.create(Player);
    player.name = name;
    player.score = 0;
    player.time = 0;
    player.distanceToGoal = 0;
    return player;
  }
  //
  // var Shark = {
  //   moveSharkF: function() {
  //     this.distanceToEnd += 2;
  //   },
  //   moveSharkB: function() {
  //     this.distanceToEnd -= 2;
  //   },
  //   checkDirectionAndGo: function() {
  //     if(this.distanceToEnd > 40) {
  //       this.moveSharkB();
  //       this.css("bottom", this.distanceToEnd + "%");
  //       window.setTimeout(this.checkDirectionAndGo, 100);
  //     } else if(this.distanceToEnd < -35) {
  //       this.moveSharkF();
  //       this.css("bottom", this.distanceToEnd + "%");
  //       window.setTimeout(this.checkDirectionAndGo, 100);
  //     }
  //   }
  // }
  //
  // function SharkFactory() {
  //   var shark = Object.create(Shark);
  //   shark.distanceToEnd = 0;
  //   return shark;
  // }
  //



  $(document).on("keydown", function(e) {
    if (e.which === 71 ) {
      console.log("g pressed");
      console.log(player1.distanceToGoal);
        player1.distanceToGoal = -4;
        player2.distanceToGoal = -4;
    }
  });


  $(document).on("keyup", function(e) {
    if (e.which === 76) {
      console.log("keyup");
      console.log(player1.distanceToGoal)
      if(this.distanceToGoal === 85) {
        player1.distanceToGoal = 0;
        player2.distanceToGoal = 0;
      }
    }
  });


  $(document).on("keydown", function(e) {
    var $player1 = $(".player1");
    var $player2 = $(".player2");
    if (e.which === 76) {
      console.log("l is pressed");
      if (player1.distanceToGoal < 90) {
        player1.moveForward();
        $player1.css("left", player1.distanceToGoal + "%");
        console.log(player1.distanceToGoal);
        player1.checkWin();
        if (player1.distanceToGoal > 84) {
        // player1.resetGame();
        }
      }
    }
    if (e.which === 74) {
      console.log("j is pressed");
      if(player1.distanceToGoal > 0) {
      player1.moveBackward();
      $player1.css("left", player1.distanceToGoal + "%");
      }
    }
    if (e.which === 68) {
      console.log("d is pressed");
      if (player2.distanceToGoal < 90) {
        player2.moveForward();
        $player2.css("left", player2.distanceToGoal + "%");
        console.log(player2.distanceToGoal);
        player2.checkWin();
      }
    }
    if (e.which === 65) {
      console.log("j is pressed");
      if(player2.distanceToGoal > 0) {
      player2.moveBackward();
      $player2.css("left", player2.distanceToGoal + "%");
      }
    }
  });

  // var shark = SharkFactory();
  var player1 = PlayerFactory("player1");
  var player2 = PlayerFactory("player2");
  // var game = GameFactory();

}); //end ready
