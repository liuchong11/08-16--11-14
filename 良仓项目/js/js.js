
var a = document.getElementsByClassName("fu");
var b = document.getElementsByClassName("diYig");
var c = document.getElementsByClassName("xiangKuang");
var d = document.getElementsByClassName("hangTu");
var e = document.getElementsByClassName("chaKan");
var f = document.getElementsByClassName("shouye2");
var g = document.getElementsByClassName("shoop");
var h = document.getElementsByClassName("shouye3");
var i = document.getElementsByClassName("shoop-one");
var j = document.getElementsByClassName("shouye4");
var k = document.getElementsByClassName("shoop-two");
var l = document.getElementsByClassName("zuoBox");


f[0].onmousemove = function(){
	g[0].style.display="block";
	i[0].style.display="none";
	k[0].style.display="none";
}
f[0].onmouseout = function(){
	g[0].style.display="none";
}
h[0].onmousemove = function(){
	i[0].style.display="block";
	g[0].style.display="none";
	k[0].style.display="none";
}
h[0].onmouseout = function(){
	i[0].style.display="none";
}
j[0].onmousemove = function(){
	g[0].style.display="none";
	i[0].style.display="none";
	k[0].style.display="block";
}
j[0].onmouseout = function(){
	k[0].style.display="none";
}








 for (let i=0;i<7;i++){
 	
        a[i].onmousemove=function(){
            for(var j=0;j<7;j++){
            	
                b[j].style.display="none";
            }

            b[i].style.display="block";
            c[0].style.display="block";
            
        }
		a[i].onmouseout=function(){
			c[0].style.display = "none";
		}
		c[0].onmouseout=function(){
			c[0].style.display = "none";
		}
		c[0].onmousemove=function(){
			b[i].style.display="block";
            c[0].style.display="block";
		}
    }
 	
 for (let i=7;i<14;i++){
 	
        a[i].onmousemove=function(){
            for(var j=7;j<14;j++){
                b[j].style.display="none";
            }

            b[i].style.display="block";
            c[1].style.display="block";
        }
		a[i].onmouseout=function(){
			c[1].style.display = "none";
		}
			c[1].onmouseout=function(){
			c[1].style.display = "none";
		}
		c[1].onmousemove=function(){
			b[i].style.display="block";
            c[1].style.display="block";
		}
    }
 for (let i=14;i<19;i++){
 	
        a[i].onmousemove=function(){
            for(var j=14;j<19;j++){
                b[j].style.display="none";
            }

            b[i].style.display="block";
            c[2].style.display="block";
        }
		a[i].onmouseout=function(){
			c[2].style.display = "none";
		}
			c[2].onmouseout=function(){
			c[2].style.display = "none";
		}
		c[2].onmousemove=function(){
			b[i].style.display="block";
            c[2].style.display="block";
		}
    }
 for(var p=0;p<2;p++){
 d[p].onmousemove=function(){
 	e[0].style.top=400+84+"px";
 }
 d[p].onmouseout=function(){
 	e[0].style.top=400+"px";
 }
}
$(".kuang").click(function(){
        $("input").animate({
            width:"0px",
            
            opacity:"0.5"
        })
    })
