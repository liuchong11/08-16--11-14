
var gGameBox = {
	
	rows: 20,  // 行数
	
	cols: 20,  // 列数

	allTds:[], // 存储所有的td元素对象

	food:null,
	she:null,



		clear:function(){
	
			for(var i = 0 ; i < gGameBox.allTds.length;i++){
		for(var j = 0; j<gGameBox.allTds[i].length;j++){
		
		gGameBox.allTds[i][j].className="";
		
		}
	
	
	}

	},
	
	keyControl:function(){
		window.onkeydown=function(e){
			var c = e.keyCode;
		
			if (c == 37)
				{
					if (gGameBox.she.yidong == "right")

					{
						return
					}
					gGameBox.she.yidong = "left"

				}
				if (c == 38)
				{
					if (gGameBox.she.yidong == "down")

					{
						return
					}
					gGameBox.she.yidong = "up"
				}
				if (c == 39)
				{
					if (gGameBox.she.yidong == "left")

					{
						return
					}
					gGameBox.she.yidong = "right"
				}
				if (c == 40)
				{
					if (gGameBox.she.yidong == "up")

					{
						return
					}
					gGameBox.she.yidong = "down"
				}
				gGameBox.she.move();
			}
	
		


	
	},
	// 方法： 游戏开始
	start:function() {

			gGameBox.init(); // 游戏初始化

			gGameBox.food = new Food();//创建食物
			gGameBox.she =new She1();
			
		
		gGameBox.timer=setInterval(function(){
	
			gGameBox.clear();
		gGameBox.she.move();
		gGameBox.food.show();
		gGameBox.keyControl();
		
	},1000);
	},
	




	// 初始化
	init: function() {
		// 场景布置好, 用表格来做
		var oTable = document.createElement("table");
	
		for (var i = 0; i < gGameBox.rows; i++)
		{
			// 创建tr
			var oTr = document.createElement("tr"); 

			// 每一行，定义1个空数组
			var arr = [];

			for (var j = 0; j < gGameBox.cols; j++) {
				// 创建td
				var oTd = document.createElement("td"); 

				oTr.appendChild(oTd);

				// 将td放到空数组中
				arr.push(oTd);
			}
			// 将当前行所有的td，压入到 allTds 属性中
			gGameBox.allTds.push(arr);

			oTable.appendChild(oTr);
		}

		// 添加到body
		document.body.appendChild(oTable);
	}
};