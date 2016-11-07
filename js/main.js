console.log("main.js linked")
$( document ).ready(function() {
    console.log( "ready!" );

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
    attackedBySharkP1: function() {
      player1.numTracks = 0;
      player1.distanceToGoal =0;
      $player1.css("left", player1.distanceToGoal + "%");
    },
    attackedBySharkP2: function() {
      player2.numTracks = 0;
      player2.distanceToGoal =0;
      $player2.css("left", player2.distanceToGoal + "%");
    },
    resetRace: function() {
      console.log("resetRace called!")
      if (((player1.distanceToGoal >= 85) && (player1.numTracks === 1)) || ((player2.distanceToGoal >= 85) && (player2.numTracks === 1))) {
        player1.distanceToGoal = 0;
        player2.distanceToGoal = 0;
        player1.numTracks = 0;
        player2.numTracks = 0;
        $player1.css("left", player1.distanceToGoal + "%");
        $player2.css("left", player2.distanceToGoal + "%");
      }
    },
    checkWin: function() {
      if((this.numTracks === 2) && (this.distanceToGoal >= 90)) {
        this.score += 1;
        console.log(this.score);
        this.countTracks();
        this.resetRace();
        this.displayScore();
        player1.isReady = false;
        player2.isReady = false;
        // alert(this.name + " Wins!");
        swal({
          title: this.name + " Win!",
          text: "",
          timer: 2500,
          showConfirmButton: false
        });
      }
    },
    displayScore: function() {
      if (player1.score === 1) {
        $player1Score.html("<img class='playerLogosHead' src='img/ship.png' alt='player1'>" + " " + player1.score + " Win");
      }
      if (player1.score > 1) {
        $player1Score.html("<img class='playerLogosHead' src='img/ship.png' alt='player1'>" + " " + player1.score + " Wins");
      }
      if (player2.score === 1) {
        $player2Score.html("<img class='playerLogosHead' src='img/ship2.png' alt='player2'>" + " " + player2.score + " Win");
      }
      if (player2.score > 1) {
        $player2Score.html("<img class='playerLogosHead' src='img/ship2.png' alt='player2'>" + " " + player2.score + " Wins");
      }
    },
    countTracks: function() {
      this.numTracks += 1;
    },
    lapsDown: function() {
      this.lapsLeft -= 1;
    },
    // ****$(this) doesn't work?
    // displayLaps: function() {
    //   console.log(this.lapsLeft)
    //   $(this).text(this.lapsLeft + "laps left!")
    // },
    displayLapsP1: function() {
      if (player1.lapsLeft === 1) {
        $('.p1LapsLeft').text("Final lap!");
      }
      if (player1.lapsLeft === 0) {
        $('.p1LapsLeft').text("Last spurt!!!");
      }
      $('.p1LapsLeft').text(player1.lapsLeft + " laps left");
    },
    displayLapsP2: function() {
      if (player2.lapsLeft === 1) {
        $('.p2LapsLeft').text("Final lap!");
      }
      if (player2.lapsLeft === 0) {
        $('.p2LapsLeft').text("Last spurt!!!");
      }
      $('.p2LapsLeft').text(player2.lapsLeft + " laps left");
    }
  }


  var Game = {
    addNumGame: function() {
      this.numGame += 1;
    },
    countMessages: function() {
      // $(".counter").text("Ready!");
      // $(".counter").css("font-size", "1em");
      setTimeout(function() {
        $(".counter").text("Three");
        $(".counter").css("font-size", "1em");
      }, 100);
      setTimeout(function() {
        $(".counter").text("Two");
        $(".counter").css("font-size", "1.5em");
      }, 1000);
      setTimeout(function() {
        $(".counter").text("One");
        $(".counter").css("font-size", "2em");
      }, 2000);
      setTimeout(function() {
        $(".counter").text("Go!!!");
        $(".counter").css("font-size", "2.5em");
        player1.isReady = true;
        player2.isReady = true;
      }, 3000);
    },
    showGoalLine: function() {
      setTimeout(function() {
        $(".goalLine").css("opacity", "1");
      }, 500);
    }

    // startCount: function() {
    //   for(var i = 3; i >= 0; i--) {
    //     console.log(i)
    //     game.countMessages();
    // }
  }



// $(".startBtn").on('click', function() {
//   console.log("start clicked");
//   for(var i = 3; i >= 0; i--) {
//     console.log(i)
//     game.countMessages();
//   }
// });
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
    game.positionShip = ["288px", "576px", "864px", "1152px", "1440", "1728px", "2016", "2304", "2592", "2880", "3168", "3456", "3744", "4032", "4320", "4608"];
    return game;
  }

  function PlayerFactory(name) {
    var player = Object.create(Player);
    player.name = name;
    player.score = 0;
    player.time = 0;
    player.distanceToGoal = 0;
    player.numTracks = 0;
    player.isReady = false;
    player.lapsLeft = 2;
    return player;
  }





  // "g" Initialize start count down.  Resets a race not total win counter
  $(document).on("keydown",function(e) {
    if (e.which === 71 ) {
      console.log("g pressed");
      console.log(player1.distanceToGoal);
      player1.numTracks = 0;
      player2.numTracks = 0;
      player1.distanceToGoal = 0;
      player2.distanceToGoal = 0;
      $player1.css("left", player1.distanceToGoal + "%");
      $player2.css("left", player2.distanceToGoal + "%");
      player1.lapsLeft = 2;
      $('.p1LapsLeft').text(player1.lapsLeft + " laps left");
      player2.lapsLeft = 2;
      $('.p2LapsLeft').text(player2.lapsLeft + " laps left");
      $(".goalLine").css("opacity", "0");
      game.countMessages();
      console.log($('sharks').position());
      console.log(player2.numTracks);
    }
  });

  // "r" Resets races and total win counter
  $(document).on("keydown", function(e) {
    if (e.which === 82) {
      console.log("r pressed");
      player1.numTracks = 0;
      player2.numTracks = 0;
      player1.distanceToGoal = 0;
      player2.distanceToGoal = 0;
      $player1.css("left", player1.distanceToGoal + "%");
      $player2.css("left", player2.distanceToGoal + "%");
      player1.lapsLeft = 2;
      $('.p1LapsLeft').text(player1.lapsLeft + " laps left");
      player2.lapsLeft = 2;
      $('.p2LapsLeft').text(player2.lapsLeft + " laps left");
      player1.score = 0;
      player2.score = 0;
      $player1Score.html("<img class='playerLogosHead' src='img/ship.png' alt='player1'>");
      $player2Score.html("<img class='playerLogosHead' src='img/ship2.png' alt='player2'>");
      $(".goalLine").css("opacity", "0");
    }
  });


  $(document).on("keydown", function(e) {

    if ((e.which === 76) && (player1.isReady === true)) {
      console.log("l is pressed");
      console.log("player1 :", $player1.css("left"))
      player1.displayLapsP1();
      if (player1.distanceToGoal < 90) {
        player1.moveForward();
        $player1.css("left", player1.distanceToGoal + "%");
        player1.checkWin();
        if ((player1.distanceToGoal >= 90) && (player1.numTracks === 0)) {
          player1.distanceToGoal = 0;
          player1.lapsDown();
          player1.displayLapsP1();
          player1.countTracks();
        }
        if ((player1.distanceToGoal >= 90) && (player1.numTracks === 1)) {
          player1.distanceToGoal = 0;
          player1.lapsDown();
          player1.displayLapsP1();
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
    if ((e.which === 68) && (player2.isReady === true)){
      console.log("d is pressed");
      console.log("player2 :", $player2.css("left"))
      player2.displayLapsP2();
      if (player2.distanceToGoal < 90) {
        player2.moveForward();
        $player2.css("left", player2.distanceToGoal + "%");
        console.log(player2.distanceToGoal);
        player2.checkWin();
        if ((player2.distanceToGoal >= 90) && (player2.numTracks === 0)) {
          player2.distanceToGoal = 0;
          player2.countTracks();
          player2.lapsDown();
          player2.displayLapsP2();
          game.showGoalLine();
        }
        if ((player2.distanceToGoal >= 90) && (player2.numTracks === 1)) {
          player2.distanceToGoal = 0;
          player2.lapsDown();
          player2.displayLapsP2();
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

var $shark = $('.sharks');
  var Shark = {

    // moveSharkF: function() {
    //   this.distanceToEnd += 2;
    // },
    // moveSharkB: function() {
    //   this.distanceToEnd -= 2;
    // },
    // checkDirectionAndGo: function() {
    //   if(this.distanceToEnd > 40) {
    //     this.moveSharkB();
    //     this.css("bottom", this.distanceToEnd + "%");
    //     window.setTimeout(this.checkDirectionAndGo, 100);
    //   } else if(this.distanceToEnd < -35) {
    //     this.moveSharkF();
    //     this.css("bottom", this.distanceToEnd + "%");
    //     window.setTimeout(this.checkDirectionAndGo, 100);
    //   }
    // }
    sharkJump: function() {
      $shark.animate({"bottom": "30%"}, 1000);
    },
    sharkBite: function() {
      if($player1.css("left") === "2880px") {
        player1.attackedBySharkP1();
      }
      if ($player2.css("left") === 4608) {
        player2.attackedBySharkP2();
      }
    }
  }

  function SharkFactory() {
    var shark = Object.create(Shark);
    shark.distanceToEnd = 0;
    return shark;
  }


  $(document).on("keydown", function(e) {
    if (e.which === 80) {
      console.log('p pressed for shark');
      console.log($player1.css("left"))
      console.log(typeof $player1.css("left"))
      shark.sharkJump();
      shark.sharkBite()
    }
  });






// $player1.animate({"left": player1.distanceToGoal + "%"}, "fast");
  var shark = SharkFactory();
  var player1 = PlayerFactory("player1");
  var player2 = PlayerFactory("player2");
  var game = GameFactory();

}); //end ready
