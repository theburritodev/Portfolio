const canvas = document.querySelector("canvas");
canvas.width = 40;
canvas.height = 45;

const ctx = canvas.getContext("2d");

const snake = [];
const stones = [];

const getRandomNumber = (min, max)=>
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const snakeHead = {
  x : 20,
  y : 20,
  speedX : 0,
  speedY : 0
}

var biome = getRandomNumber(0, Biomes.length-1);

const generator = {
  y : Math.round(45/1.5)
}

const animate = ()=> {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,100,150);
  
  for(let index in stones)
  {
    for(let obj in stones[index])
    {
      if(stones[index][obj]) if(stones[index][obj].x == snakeHead.x && stones[index][obj].y == snakeHead.y)
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
}, 100);

const generate = ()=>{
  if(stones.length > 0) for(let y in stones)
  {
    for(let x in stones[y])
    {
      if(stones[y][x].x) stones[y][x].x--;
      if(stones[y][x].x == undefined) console.log(stones[y][x])
      if(stones[y][x].x < 0) stones[y].splice(x, 1);
    }
  }
  
  snakeHead.x--;
  for(let y in snake)
  {
    snake[y].x--;
  }
  
  let line = [];
  generator.y += getRandomNumber(-1, 1);
  if(Biomes[biome].tree == true) if(getRandomNumber(0, 4) == 1)
  {
    let y = 0;
    for(y = 0; y < getRandomNumber(3, Biomes[biome]["max_tree_size"]); y++)
    {
      line.push(newTreeBlock(y));
    }
    for(let a = 0; a < 2; a++)
    {
      for(let x = 0; x < 3; x++)
      {
        line.push(newTreeBlock(y, "tree_leaves", canvas.width-x));
      }
      y++;
    }
  }
  for(let x = 0; x < (45-generator.y); x++)
  {
    line.push(newBlock(generator.y, x));
  }
  stones.push(line);
}

setInterval(function(){
  biome = getRandomNumber(0, Biomes.length-1);
}, 5000);

const newBlock = (y, block)=>{
  let id = "layer1";
  if(block > Biomes[biome]["top_size"]) id = "layer2";
  return {
    x : canvas.width-1,
    y : y+block,
    color : Biomes[biome][id].color,
    onTouch : Biomes[biome][id].onTouch,
    infinite : Biomes[biome][id].infinite
  }
}

const newTreeBlock = (y, type="tree_log", x=canvas.width-1)=>{
  let id = type;
  return {
    x : x,
    y : generator.y-y,
    color : Biomes[biome][id].color,
    onTouch : Biomes[biome][id].onTouch,
    infinite : Biomes[biome][id].infinite
  }
}

setInterval(function() {
  generate();
}, 500);

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