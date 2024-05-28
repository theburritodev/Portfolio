const canvas = document.querySelector("canvas");
canvas.width = 50;
canvas.height = 50;
canvas.style.backgroundColor = "#000";
canvas.style.width = "30%";
canvas.style.height = "30%";
canvas.style.position = "fixed";
canvas.style.left = "50%";
canvas.style.top = "50%";
canvas.style.transform = "translate(-50%, -50%)";
const ctx = canvas.getContext("2d");

canvas.style.imageRendering = "pixelated";

const snake = [];

const colors = ["#f00","#ff0","#f0f","#0ff"];
var color_index = 0;

const apple = {
  x : Math.floor(Math.random()*canvas.width),
  y : Math.floor(Math.random()*canvas.height)
}

const SnakeHead = {
  x : 0,
  y : 0,
  speedX : 1,
  speedY : 0
}

addEventListener("keypress",(e)=>{
  if(e.key == "d") 
  {
    SnakeHead.speedX = 1;
    SnakeHead.speedY = 0;
  }
  
  if(e.key == "a") 
  {
    SnakeHead.speedX = -1;
    SnakeHead.speedY = 0;
  }
  
  if(e.key == "w") 
  {
    SnakeHead.speedX = 0;
    SnakeHead.speedY = -1;
  }
  
  if(e.key == "s") 
  {
    SnakeHead.speedX = 0;
    SnakeHead.speedY = 1;
  }
})

const animate = ()=>{
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,50,50);
  
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, 1, 1);
  
  ctx.fillStyle = colors[color_index];
  ctx.fillRect(SnakeHead.x, SnakeHead.y, 1, 1);
  
  for(let body in snake)
  {
    ctx.fillStyle = colors[color_index];
    ctx.fillRect(snake[body].x, snake[body].y, 1, 1);
  }
  
  if(SnakeHead.x == apple.x && SnakeHead.y == apple.y)
  {
    apple.x = Math.floor(Math.random()*canvas.width);
    apple.y = Math.floor(Math.random()*canvas.height);
    
    snake.push({
      x : SnakeHead.x-SnakeHead.speedX,
      y : SnakeHead.y-SnakeHead.speedY
    });
    color_index++;
    if(color_index >= colors.length) color_index = 0;
  }
}
requestAnimationFrame(animate);

setInterval(function(){
  if(snake.length > 0)
  {
    snake.splice(0, 1);
    snake.push({
      x : SnakeHead.x,
      y : SnakeHead.y
    });
  }
  SnakeHead.x += SnakeHead.speedX;
  SnakeHead.y += SnakeHead.speedY;
},50);
