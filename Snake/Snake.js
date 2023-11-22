function Snake(x, y){
	this.x = floor(x);
	this.y = floor(y);
	this.r = 20
	this.number = 5
	this.xdir = 1
	this.ydir = 0



	this.show = function(){
		fill(50,138,5);
		rect(this.x, this.y, this.r, this.r);
	}
	this.move = function(){
		this.x+= floor(this.xdir*4);
		this.y+= floor(this.ydir*4);
	}
	this.update = function(i){
		this.x = constrain(this.x, 0, width-this.r);
		this.y = constrain(this.y, 0, height-this.r);
	}
	this.setDirx = function(dir){
		this.xdir = dir;
	}
	this.setDiry = function(dir){
		this.ydir = dir;
	}

	
}
