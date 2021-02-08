var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var bg2 = new Image();
var fg = new Image();
var fg2 = new Image();
var pipeUp = new Image();
var pipeUp2 = new Image();
var pipeBottom = new Image();
var pipeBottom2 = new Image();
var startGame = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
bg2.src = "img/bg2.jpg";
fg.src = "img/fg.png";
fg2.src = "img/fg2.png";
pipeUp.src = "img/pipeUp.png";
pipeUp2.src = "img/pipeUp2.png";
pipeBottom.src = "img/pipeBottom.png";
pipeBottom2.src = "img/pipeBottom2.png";
startGame.src = "img/startgame.png";

// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";
var gap = 100;

function check(e) {
    var code = e.keyCode;
switch (code) {
    case 38:
        yPos -= 15;
      break;
    case 37:
        xPos -= 15;
      break;
    case 39:
        xPos += 15;
      break;
    case 40:
        yPos += 15;
      break;
    default:
        code = false;
  }
}
document.addEventListener("keydown",check);
canvas.addEventListener("click",draw);

// Создание блоков
var pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}

var score = 0;
// Позиция птички
var xPos = 10;
var yPos = 180;
var grav = 1.5;
function draw() {
  if(score <= 3){
    ctx.drawImage(bg, 0, 0);
    for(var i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
   
    pipe[i].x--;
   
    if(pipe[i].x == 125) {
    pipe.push({
    x : cvs.width,
    y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
    });
    }
   
    // Отслеживание прикосновений
    if(xPos + bird.width >= pipe[i].x
    && xPos <= pipe[i].x + pipeUp.width
    && (yPos <= pipe[i].y + pipeUp.height
    || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
    location.reload(); // Перезагрузка страницы
    }
    if(pipe[i].x == 5) {
        score++;
        score_audio.play();
        }
        }
       
        ctx.drawImage(fg, 0, cvs.height - fg.height);
        ctx.drawImage(bird, xPos, yPos);
       
       
        ctx.fillStyle = "#000";
        ctx.font = "24px Verdana";
        ctx.fillText("Счет: " + score, 20, cvs.height - 60);
        ctx.fillText("Уровень: 1 ", 20, cvs.height - 10);
       
        requestAnimationFrame(draw);
       }else{
        ctx.drawImage(bg2, 0, 0);
        for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp2, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom2, pipe[i].x, pipe[i].y + pipeUp2.height + gap);
       
        pipe[i].x--;
       
        if(pipe[i].x == 125) {
        pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random() * pipeUp2.height) - pipeUp2.height
        });
        }
       
        // Отслеживание прикосновений
        if(xPos + bird.width >= pipe[i].x
        && xPos <= pipe[i].x + pipeUp2.width
        && (yPos <= pipe[i].y + pipeUp2.height
        || yPos + bird.height >= pipe[i].y + pipeUp2.height + gap) || yPos + bird.height >= cvs.height - fg2.height) {
        location.reload(); // Перезагрузка страницы
        }
        if(pipe[i].x == 5) {
            score++;
            score_audio.play();
            }
            }
           
            ctx.drawImage(fg2, 0, cvs.height - fg2.height);
            ctx.drawImage(bird, xPos, yPos);
           
           
            ctx.fillStyle = "#000";
            ctx.font = "24px Times New Roman";
            ctx.fillText("Счет: " + score, 20, cvs.height - 60);
            ctx.fillText("Уровень: 2 ", 20, cvs.height - 10);
           
            requestAnimationFrame(draw);
       }
      }
      // pipeBottom2.onload = draw;
      function Loader(){
      ctx.drawImage(startGame, 0, 0);
      ctx.fillStyle = "white";
      ctx.font = "24px Verdana";
      ctx.fillText("Click to game ", 65, cvs.height - 220);
      requestAnimationFrame(Loader);
      }
      //draw();
      Loader();

     