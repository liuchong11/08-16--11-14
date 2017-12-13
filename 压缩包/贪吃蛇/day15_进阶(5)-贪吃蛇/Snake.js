

/*

		属性								方法
蛇	     长度、颜色、位置、头、移动方向	    吃、移动、长大
食物         大小、颜色、位置			    改变位置 
游戏引擎     场景、蛇


(1,1) (1,2) (1,3) (1,4) (1,5)

把蛇中所有节点都存下来

一串元素：  数组  []
				数组中的元素：   每个节点的坐标，是1个整体，考虑使用对象
					{x: 0, y:0}
*/


function Snake() {

	// 存储蛇 所有节点坐标， 同时也存储了蛇的长度  this.arr.length
	this.arr = [
		{x: 1, y: 1},
		{x: 2, y: 1},
		{x: 3, y: 1},
		{x: 4, y: 1},
		{x: 5, y: 1}
	];


	// 当前移动方向：   left, right, down, up
	this.direct = "down";
	this.fresh();
}

// 方法1： 更新到页面上  fresh 刷新  
Snake.prototype.fresh = function() {
	// 给所有蛇节点，都添加样式
	for (var i = 0; i < this.arr.length; i++)
	{
		// this.arr[i] 是蛇节点对象
		var x = this.arr[i].x;
		var y = this.arr[i].y;

		gGameBox.allTds[y][x].className = "snake"
	}
}

/*
	先储存蛇的所有节点坐标，也顺便存储了蛇的长度 this.arr.length
	functuion Snake()
	{
		var arr = [
			{x : 1,y : 1}	
			{x : 2,y : 1}	
			{x : 3,y : 1}	
			{x : 4,y : 1}	
			{x : 5,y : 1}	
		
		]
		当前移动方向：left,right,up,down
		this.direct = "left"
	}
	Snake.prototype.fresh = function (){
		给蛇的所有节点都添加样式
		for(var i = 0 ; i < this.arr.length ; i++)
		{
			this.arr[i] 是蛇节点对象
			var x = this.arr[i].x
			var y = this.arr[i].y

			gGameBox.allTds[y][x].className = "Snake"
		}
	}
*/
Snake.prototype.move = function (){
	var x = this.arr[0].x;
	var y = this.arr[0].y;
	if (this.direct == "right")
	{
			x++;
	}else if(this.direct == "down"){
			y++;
	}
	else if(this.direct == "up"){
			y--;
	}
	else if(this.direct == "left"){
			x--;
	}
	
	if (x>=gGameBox.cols || y >=gGameBox.rows || x<0 || y<0)
	{	
		clearInterval(gGameBox.timer)
		alert("GameOver")
		return
	}
	if (x == gGameBox.food.x && y == gGameBox.food.y)
	{

		this.arr.unshift({x: x, y: y});

		// 食物更改位置
		gGameBox.food.change();
		this.fresh();

		return ;


	}
	this.arr.unshift({x:x,y:y})

	this.arr.pop()

	this.fresh()
}