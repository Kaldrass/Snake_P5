var defeat = false;
var food;
var snakes =[];
var dir = 1;
function setup() 
{
	createCanvas(windowWidth, windowHeight);
	snake = new Snake();
	for(var k = 0; k<snake.number; k++)
	{
		snakes[k] = new Snake(floor(windowWidth/2 + k*20), floor(windowHeight/2));
	}
	
	food = createVector(floor(random(width)-20),floor(random(height)-20));
}

function draw() 
{
	background(51); 
	for (var i = 0; i < snakes.length; i++)
	{
		snakes[i].show();
		snakes[i].move();
		snakes[i].update(i);
	}
	fill(255,0,10);
	rect(food.x, food.y, 20, 20);
}
function keyPressed()
{
		if (keyCode === RIGHT_ARROW && dir!=-1)
		{
			for(var i =0 ; i<snakes.length ; i++)
			{
				snakes[i].setDirx(1);
				snakes[i].setDiry(0);
				dir = 1;
			}
		}
		else if (keyCode === LEFT_ARROW && dir!=1)
		{
			for(var i =0 ; i<snakes.length ; i++)
			{
				snakes[i].setDirx(-1);
				snakes[i].setDiry(0);
				dir = -1;
			}
		}
		else if (keyCode === UP_ARROW && dir!=2)
		{	
			for(var i =0 ; i< snakes.length; i++)
			{
				snakes[i].setDirx(0);
				snakes[i].setDiry(-1);
				dir = -2;
			}
		}
		else if (keyCode === DOWN_ARROW && dir!=-2)
		{
			for(var i =0 ; i<snakes.length ; i++)
			{
				snakes[i].setDirx(0);
				snakes[i].setDiry(1);
				dir =2;
			}
		}
}