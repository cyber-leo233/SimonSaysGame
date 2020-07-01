//global
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red","blue","green","yellow"];


let level = 0;
let started = false;


// =================event listeners/handlers=============================
$(document).dblclick(function (){
   
         if(started === false){
            $("#level-title").text(`Level ${level}`)
            nextSequence()
            started = true;
      }
})

//when user clicks one of the buttons
$('.btn').click(function(){
      
      let userChosenColor = $(this).attr("id");
      userClickedPattern.push(userChosenColor);
      
      playSound(userChosenColor);
      animatePress(userChosenColor);
      checkAnswer(userClickedPattern.length-1);
});


//=================functions======================================
// main function

function nextSequence () {
      userClickedPattern = [];
      level++;
      $("#level-title").text(`Level ${level}`);

      let color = buttonColors[Math.round(Math.random()*3)];
      gamePattern.push(color);
      

      $("#"+color).animate({opacity:0.5},100,function(){
      $("#"+color).animate({opacity:1});
      });
      playSound(color);
      
 

}





function playSound (name) {
      let audio = new Audio(`sounds/${name}.mp3`);
      audio.play();
    
}

function animatePress(currentColor){
      $('#'+currentColor).addClass("pressed");
      setTimeout(function(){
            $('#'+currentColor).removeClass("pressed");
      },100)
          
}

function checkAnswer (currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
            console.log(gamePattern[currentLevel])
      console.log(userClickedPattern[currentLevel]);
            console.log("success");
            if (userClickedPattern.length === gamePattern.length){
                  setTimeout(function(){
                        nextSequence();
                        
                  },1000);
      
            }
      }
   
      
      else {
            let wrongAudio = new Audio('sounds/wrong.mp3');
            wrongAudio.play();
            $('body').addClass('game-over');
            setTimeout(function (){
                  $('body').removeClass('game-over');
            },200)
            $('#level-title').text( "Game Over, press any key to restart");
            startOver();
        
            
      }
    

     

   
                             
}
function startOver () {
      started = false;
      level = 0;
      gamePattern = [];
      $(document).keypress(function (){
   
            if(started === false){
               $("#level-title").text(`Level ${level}`)
               nextSequence()
               started = true;
         }
   })
}

let  i = 0;
do {
  console.log(`Hi Joe the number is now ${i}`)
  i++;
}
while (i < 11);

