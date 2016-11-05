function movePlayer(player){
  $(player).css("left", "+=5")
}


var trackLeftP1 = ( 100 * parseFloat($('.player1').css('left')) / parseFloat($('.container').css('width')) );
var trackLeftP2 = ( 100 * parseFloat($('.player2').css('left')) / parseFloat($('.container').css('width')) );



function checkWin() {
  console.log("checking left val on Player2")
  console.log(typeof $(".player2").css("left"))
  console.log(( 100 * parseFloat($('.player2').css('left')) / parseFloat($('.container').css('width')) ))
  if(( 100 * parseFloat($('.player2').css('left')) / parseFloat($('.container').css('width')) ) > 85){
    alert("Player2 Win!!")

  }
  if(( 100 * parseFloat($('.player1').css('left')) / parseFloat($('.container').css('width')) ) > 85) {
    alert("Player1 Win!!")
  }
}

$(document).on("keydown", function(e) {
  if (e.which == 76) {
    console.log("L is pressed")
    $(".player1").css("left", "+=5%")
    checkWin();
  }
})
// $("76").keypress(movePlayer("player1"));
$(document).on("keydown", function(e) {
  if (e.which == 68) {
    console.log("D is pressed")
    $(".player2").css("left", "+=5%")
    console.log($(".player2").css("left"))
    console.log($(".container").css("width"))
    checkWin();
  }
})
