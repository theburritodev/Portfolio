const canvas = document.querySelector("canvas");
canvas.width = 40;
canvas.height = 45;

const ctx = canvas.getContext("2d");

const snake = [];
const stones = [];

const snakeHead = {
  x : 20,
  y : 20,
  speedX : 0,
  speedY : 0
}

const animate = ()=> {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,100,150);
  
  for(let index in stones)
  {
    for(let obj in stones[index])
    {
      if(stones[index][obj].x == snakeHead.x && stones[index][obj].y == snakeHead.y)
      {
        stones[index][obj].onTouch();
        if(stones[index][obj].infinite != 2)
        {
          if(stones[index][obj].infinite == 0)
          {
            stones[index].splice(obj, 1);
            snake.push({
              x : snakeHead.x - snakeHead.speedX,
              y : snakeHead.y - snakeHead.speedY
            });
          }else{
            snakeHead.x += snakeHead.speedX *-1;
            snakeHead.y += snakeHead.speedY *-1;
            snakeHead.speedX = 0;
            snakeHead.speedY = 0;
          }
        }
      }
      if(stones[index][obj])
      {
        ctx.fillStyle = stones[index][obj].color;
        ctx.fillRect(stones[index][obj].x, stones[index][obj].y, 1, 1);
      }
    }
  }
  
  for(let index in snake)
  {
    ctx.fillStyle = "#777";
    ctx.fillRect(snake[index].x, snake[index].y, 1, 1);
  }
  
  ctx.fillStyle = "#fff";
  ctx.fillRect(snakeHead.x, snakeHead.y, 1, 1);
  
  
  if(snakeHead.x < 0 || snakeHead.x > canvas.width)
  {
    snakeHead.speedX *= -1;
    snakeHead.x += snakeHead.speedX;
  }
  
  if(snakeHead.y < 0 || snakeHead.y > canvas.height)
  {
    snakeHead.speedY *= -1;
    snakeHead.y += snakeHead.speedY;
  }
}
requestAnimationFrame(animate);

setInterval(function() {
  if(snake.length > 0)
  {
    snake.splice(0, 1);
    snake.push({
      x : snakeHead.x,
      y : snakeHead.y
    });
  }
  snakeHead.x += snakeHead.speedX;
  snakeHead.y += snakeHead.speedY;
}, 150);

const generate = ()=>{
  if(stones.length > 0) for(let y in stones)
  {
    for(let x in stones[y])
    {
      stones[y][x].y--;
      if(stones[y][x].y < 0) stones[y].splice(x, 1);
    }
  }
  
  snakeHead.y--;
  for(let y in snake)
  {
    snake[y].y--;
  }
  
  let line = [];
  for(let x = 0; x < 40; x++)
  {
    if(Math.floor(Math.random() * 7) + Math.floor(Math.random() * 7) == 5) line.push(newBlock(x));
  }
  stones.push(line);
}

const newBlock = (x)=>{
  let id = Math.floor(Math.random() * blocks.length);
  return {
    x : x,
    y : canvas.height-1,
    color : blocks[id].color,
    infinite : blocks[id].infinite,
    onTouch : blocks[id].onTouch
  }
}

setInterval(function() {
  generate();
}, 700);

for(let size = 0; size < 3; size++)
{
  generate();
}

document.getElementById("up").addEventListener("click", (e)=>{
  snakeHead.speedX = 0;
  snakeHead.speedY = -1;
});

document.getElementById("down").addEventListener("click", (e)=>{
  snakeHead.speedX = 0;
  snakeHead.speedY = 1;
});

document.getElementById("dir").addEventListener("click", (e)=>{
  snakeHead.speedX = 1;
  snakeHead.speedY = 0;
});

document.getElementById("esq").addEventListener("click", (e)=>{
  snakeHead.speedX = -1;
  snakeHead.speedY = 0;
});