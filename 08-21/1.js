/**
 * Created by Administrator on 2017/8/21.
 */
var tu=document.getElementById("tu");
var x=6;
function jia(){
    x=x+1;
    if(x>6){x=1}
    tu.src="img/"+x+".jpg";
console.log(tu)
}
//定时器
//setInterval(jia,2000);

function jian() {

    x = x -1;
    if (x <1) {x=6}
    tu.src = "img/" + x + ".jpg";
    console.log(tu)
}
//setInterval(jian, 1000);
var qu = document.getElementById("jiajia");
qu.onclick=function(){
    jia();
}
var e= document.getElementById("jiaji");
e.onclick=function(){
    jian();
}