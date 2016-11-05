

var Player = {
  moveForward: function() {
    this.distanceToGoal += 5;
  },
  moveBackward: function() {
    this.distanceToGoal -= 5;
  },
  checkWin: function() {
    if(this.distanceToGoal === 90) {
      alert(this.name + "Wins!");
      $(window).off("keydown");
    }
  }
}

function PlayerFactory(name) {
  var player = Object.create(Player);
  player.name = name;
  player.score = 0;
  player.time = 0;
  player.distanceToGoal = 0;
  return player;
}

var Shark = {
  moveSharkF: function() {
    this.distanceToEnd += 2;
  },
  moveSharkB: function() {
    this.distanceToEnd -= 2;
  },
  checkDirectionAndGo: function() {
    if(this.distanceToEnd > 40) {
      this.moveSharkB();
      this.css("bottom", this.distanceToEnd + "%");
      window.setTimeout(this.checkDirectionAndGo, 300);
    } else if(this.distanceToEnd < -35) {
      this.moveSharkF();
      this.css("bottom", this.distanceToEnd + "%");
      window.setTimeout(this.checkDirectionAndGo, 300);
    }
  }
}

function SharkFactory() {
  var shark = Object.create(Shark);
  shark.distanceToEnd = 0;
  return shark;
}

var shark = SharkFactory();
var player1 = PlayerFactory(player1);
var player2 = PlayerFactory(player2);

shark.checkDirectionAndGo();

$(document).on("keydown", function(e) {
  if (e.which === 71) {
    console.log("g pressed");
    shark.checkDirectionAndGo();
  }
})



$(document).on("keydown", function(e) {
  var $player1 = $(".player1");
  var $player2 = $(".player2");
  if (e.which === 76) {
    console.log("l is pressed");
    player1.moveForward();
    $player1.css("left", player1.distanceToGoal + "%");
    console.log(player1.distanceToGoal);
    player1.checkWin();
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
    player2.moveForward();
    $player2.css("left", player2.distanceToGoal + "%");
    console.log(player2.distanceToGoal);
    player2.checkWin();
  }
  if (e.which === 65) {
    console.log("j is pressed");
    if(player2.distanceToGoal > 0) {
    player2.moveBackward();
    $player2.css("left", player2.distanceToGoal + "%");
    }
  }
});
