function Food(){

this.x = 0;
this.y = 0;
this.change();

}

//方法1：出现在环境中

Food.prototype.show = function(){

gGameBox.allTds[this.y][this.x].className ="food";

}
//方法2 ：改变位置，随机的

Food.prototype.change= function(){
this.x= parseInt(Math.random()*gGameBox.rows);
this.y = parseInt(Math.random()*gGameBox.cols);



this.show();
}