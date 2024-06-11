const blocks = [
  {
    color : "#aaa",
    infinite : 0,
    speedX : 0,
    speedY : 0,
    onTouch : ()=>{
      
    },
  },
  {
    color : "#a33",
    infinite : 2,
    speedX : 0,
    speedY : 0,
    onTouch : ()=>{
      if(snake.length > 0) snake.splice(0,1);
      snakeHead.x += snakeHead.speedX;
      snakeHead.y += snakeHead.speedY;
    },
  },
  {
    color : "#333",
    infinite : 1,
    speedX : 0,
    speedY : 0,
    onTouch : ()=>{
      
    },
  },
  {
    color : "#33a",
    infinite : 2,
    speedX : 0,
    speedY : 0,
    onTouch : ()=>{
      
    },
  },
  {
    color : "#3a3",
    infinite : 0,
    speedX : 0,
    speedY : 0,
    onTouch : ()=>{
      snakeHead.speedX *= -1;
      snakeHead.speedY *= -1;
    },
  },
  {
    color : "#a3a",
    infinite : 0,
    speedX : 0,
    speedY : 0,
    x : 0,
    y : 0,
    onTouch : ()=>{
      snakeHead.x = Math.floor(Math.random() * canvas.width-1);
      snakeHead.y = Math.floor(Math.random() * canvas.height-1);
    },
  },
];