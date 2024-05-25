const canvas = document.querySelector("canvas");
canvas.width = 100;
canvas.height = 100;
canvas.style.backgroundColor = "#000";
canvas.style.width = "100%";
canvas.style.height = "100%";
const ctx = canvas.getContext("2d");

const snake = [];

const apple = {
  x : Math.floor(Math.random()*100),
  y : Math.floor(Math.random()*100)
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
  ctx.clearRect(0,0,100,100);
  for(let body in snake)
  {
    ctx.fillStyle = "green";
    ctx.fillRect(snake[body].x, snake[body].y, 1, 1);
  }
  
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, 1, 1);
  
  ctx.fillStyle = "green";
  ctx.fillRect(SnakeHead.x, SnakeHead.y, 1, 1);
  
  if(SnakeHead.x == apple.x && SnakeHead.y == apple.y)
  {
    apple.x = Math.floor(Math.random()*100);
    apple.y = Math.floor(Math.random()*100);
    
    snake.push({
      x : SnakeHead.x-SnakeHead.speedX,
      y : SnakeHead.y-SnakeHead.speedY
    });
  }
}
requestAnimationFrame(animate);

setInterval(function(){
  SnakeHead.x += SnakeHead.speedX;
  SnakeHead.y += SnakeHead.speedY;
  if(snake.length > 1)
  {
    snake[snake.length]
  }
},50);
