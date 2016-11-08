jQuery(function() {

var score = 0;
var $points = $('#points');
var $score =$('#score');
var $dots = ['#leftdot','#middot1', '#middot2','#rightdot'];

var $startbtn = ('.startbtn');
var $startscreen = ('.start');

$($startbtn).click(function() {
  $($startscreen).hide();
  $descent();
});

var $descent = function(){
var $levelplaylist = [
"BAPThatsMyJam.mp3",
"CRAYONPOPDooDoomChit.mp3",
"DALSHABETFriSatSun.mp3",
"EXOCHENFTALESSOYears.mp3",
"GOT7HardCarry.mp3",
"IOIVeryVeryVery.mp3"
];
var $randomsong = $levelplaylist[Math.floor(Math.random() * $levelplaylist.length)];
var audio = new Audio($randomsong);
audio.play();
}

setInterval(function(){
  $('.falling').each(function(){
    $(this).attr('class','')
  })
  var random_dot = $dots[Math.floor(Math.random()*$dots.length)];
  $(random_dot).attr('class','falling')
},1000)

$(document).keydown(function(key) {
  if (key.which == 65){
    $leftdottop = Math.floor($('#leftdot').css('top').replace('px',''))
    console.log('you pressed a.')
    console.log($leftdottop)
    if ($leftdottop > 650){
      console.log('good')
       score+=100;
      $score.text(score);
    }else{
      console.log('miss')
      score-=100;
      $score.text(score);
    }
  }

  if (key.which == 83){
    var $middot1top = Math.floor($('#middot1').css('top').replace('px',''))
    console.log('you pressed s.')
    console.log($middot1top)
    if ($middot1top > 650){
      console.log('good')
      score+=100;
      $score.text(score);
    }else{
      console.log('miss')
      score-=100;
      $score.text(score);
    }
  }

  if (key.which == 68){
    var $middot2top = Math.floor($('#middot2').css('top').replace('px',''))
    console.log('you pressed d.')
    console.log($middot2top)
    if ($middot2top > 650){
      console.log('good')
      score+=100;
      $score.text(score);
    }else{
      console.log('miss')
      score-=100;
      $score.text(score);
    }
  }
    if (key.which == 70){
    var $rightdottop = Math.floor($('#rightdot').css('top').replace('px',''))
    console.log('you pressed f.')
    console.log($rightdottop)
    if ($rightdottop > 650){
      console.log('good')
      score+=100;
      $score.text(score);
    }else{
      console.log('miss')
      score-=100;
      $score.text(score);
    }
  }
  if(score == 2000){
    alert("You Win!");
     location.reload();
  }if(score < 0){
  alert("You Lose!");
}
});
});
