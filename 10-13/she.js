 function She1(){
	
	this.arr =[
	{x:1,y:1},
	{x:2,y:1},
	{x:3,y:1},
	{x:4,y:1},
	{x:5,y:1},
	];
 
 this.yidong="down";

 this.gengXin();
 }

She1.prototype.gengXin=function(){


 for(var i = 0;i<this.arr.length;i++){
 
		var x =this.arr[i].x;
		var y = this.arr[i].y;

 gGameBox.allTds[y][x].className = "she";

 }
	}
She1.prototype.move = function(){

var x = this.arr[0].x;
var y = this.arr[0].y;

if(this.yidong=="right"){

x++;
}else if(this.yidong=="down"){

y++;

}else if(this.yidong=="up"){

y--;
}else if(this.yidong=="left"){
x--;
}
if (x>=gGameBox.rows||y>=gGameBox.cols||x<0||y<0)
{
	clearInterval(gGameBox.timer);
	alert("GameOver");
		return
}

if (x==gGameBox.food.x && y==gGameBox.food.y)
{
	this.arr.unshift({x:x,y:y});
		gGameBox.food.change();
			this.gengXin();
			return ;
			
}
this.arr.unshift({x:x,y:y});


this.arr.pop();
this.gengXin();
}