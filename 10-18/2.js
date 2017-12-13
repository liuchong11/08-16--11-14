











function ajax(obj){
	
	if(obj.method==undefined){
		obj.method="GET";
	}
	if(obj.async==undefined){
		obj.async = true;
	}
	if(obj.data==undefined){
		obj.data="";
	}
	
	
	var xhr = new XMLHttpRequest();
	var url = obj.url;
	if(obj.method=="GET"){
		url+="?"
		url+=obj.data;
	}
	xhr.open(obj.method,url,obj.async);
	
	if(obj.method=="POST"){
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(obj.data)
	}else{
		xhr.send()
	}
	
	if(obj.async==true){
		xhr.onreadystatechange = function(){
			
			if(xhr.readyState==4){
				if (xhr.status==200) {
					var str = xhr.responseText;
					console.log(str);
					obj.success&&obj.success(str);
				}else{
					obj.fail&&obj.fail();
				}
				
			}
			
		}
		
	}else{
		if(xhr.status==200){
			var str = xhr.responseText;
			obj.success&&obj.success(str);
		}else{
			obj.fail&&obj.fail();
		}
	}
}
