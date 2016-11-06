console.log("main.js linked")
$( document ).ready(function() {
    console.log( "ready!" );

    swal({
      title: "Error!",
      text: "Here's my error message!",
      type: "error",
      confirmButtonText: "Cool"
    });


  var $player1 = $(".player1");
  var $player2 = $(".player2");
  var $player2Score = $(".player2Score");
  var $player1Score = $(".player1Score");

  var Player = {
    moveForward: function() {
      this.distanceToGoal += 5;
    },
    moveBackward: function() {
      this.distanceToGoal -= 5;
    },
    resetRace: function() {
      console.log("resetRace called!")
      if (((player1.distanceToGoal >= 85) && (player1.numTracks === 1)) || ((player2.distanceToGoal >= 85) && (player2.numTracks === 1))) {
        player1.distanceToGoal = 1;
        player2.distanceToGoal = 1;
        player1.numTracks = 0;
        player2.numTracks = 0;
        $player1.css("left", player1.distanceToGoal + "%");
        $player2.css("left", player2.distanceToGoal + "%");
      }
    },
    checkWin: function() {
      if((this.numTracks === 1) && (this.distanceToGoal >= 90)) {
        this.score += 1;
        console.log(this.score);
        this.countTracks();
        this.resetRace();
        this.displayScore();
        alert(this.name + " Wins!");
      }
    },
    displayScore: function() {
      if (player1.score === 1) {
        $player1Score.text("Player 1: " + player1.score + " Win");
      }
      if (player1.score > 1) {
        $player1Score.text("Player 1: " + player1.score + " Wins");
      }
      if (player2.score === 1) {
        $player2Score.text("Player 2: " + player2.score + " Win");
      }
      if (player2.score > 1) {
        $player2Score.text("Player 2: " + player2.score + " Wins");
      }
    },
    countTracks: function() {
        this.numTracks += 1;
    }
  }


  // function resteGame() {
  //
  //     player1.distanceToGoal = 0;
  //     player2.distanceToGoal = 0;
  //
  // }

  var Game = {
    addNumGame: function() {
      this.numGame += 1;
    },
    countStart: function() {
      $(".counter").text("Ready!");
      $(".counter").css("font-size", "1em");
      setTimeout(function() {
        $(".counter").text("Three");
        $(".counter").css("font-size", "1em");
      }, 1000);
      setTimeout(function() {
        $(".counter").text("Two");
        $(".counter").css("font-size", "1.5em");
      }, 2000);
      setTimeout(function() {
        $(".counter").text("One");
        $(".counter").css("font-size", "2em");
      }, 3000);
      setTimeout(function() {
        $(".counter").text("Go!!!");
        $(".counter").css("font-size", "2.5em");
      }, 4000);
    },
    showGoalLine: function() {
      setTimeout(function() {
        $(".goalLine").css("opacity", "1");
      }, 400);

    }
  }



$(".startBtn").on('click', function() {
  console.log("start clicked");
  for(var i = 3; i >= 0; i--) {
    console.log(i)
    game.countStart();
  }
});
  //
  // $("form").on('submit', function(event) {
  //       event.preventDefault();
  //       console.log("Button is clicked")
  //       var $username = $("input.userName").val();
  //
  //       var player1 = PlayerFactory($username);
  //
  //     });
  //   });
  //

  function GameFactory(){
    var game = Object.create(Game);
    game.numGame = 0;
    game.startCounter = 3;
    return game;
  }

  function PlayerFactory(name) {
    var player = Object.create(Player);
    player.name = name;
    player.score = 0;
    player.time = 0;
    player.distanceToGoal = 0;
    player.numTracks = 0;
    return player;
  }




  $(document).on("keydown", function(e) {
    if (e.which === 71 ) {
      console.log("g pressed");
      console.log(player1.distanceToGoal);
      player1.numTracks = 0;
      player2.numTracks = 0;
      player1.distanceToGoal = 1;
      player2.distanceToGoal = 1;
      $player1.css("left", player1.distanceToGoal + "%");
      $player2.css("left", player2.distanceToGoal + "%");
      $(".goalLine").css("opacity", "0")
      console.log($('sharks').position());
      console.log(player2.numTracks);
    }
  });


  $(document).on("keyup", function(e) {
    if (e.which === 76) {
      console.log("keyup");
      console.log(player1.distanceToGoal)
      if(this.distanceToGoal === 85) {
        player1.distanceToGoal = 1;
        player2.distanceToGoal = 1;
      }
    }
  });


  $(document).on("keydown", function(e) {

    if (e.which === 76) {
      console.log("l is pressed");
      if (player1.distanceToGoal < 90) {
        player1.moveForward();
        $player1.css("left", player1.distanceToGoal + "%");
        player1.checkWin();
        if ((player1.distanceToGoal === 90) && (player1.numTracks === 0)) {
          player1.distanceToGoal = 0;
          player1.countTracks();
          game.showGoalLine();
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
        if ((player2.distanceToGoal === 90) && (player2.numTracks === 0)) {
          player2.distanceToGoal = 0;
          player2.countTracks();
          game.showGoalLine();
        }
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



// $player1.animate({"left": player1.distanceToGoal + "%"}, "fast");
  // var shark = SharkFactory();
  var player1 = PlayerFactory("player1");
  var player2 = PlayerFactory("player2");
  var game = GameFactory();

}); //end ready
