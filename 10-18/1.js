








function ajax(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.status==200&&xhr.readyState==4){
			var str = xhr.responseText;
			callback && callback(str);
		}
		
		
	}
}
