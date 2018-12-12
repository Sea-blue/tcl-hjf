//cookie 的封装

//cookie  需要存储的数据
//name value path expires
	
//cookie封装一定修改的属性 为	name value
//path expires	的属性可以不进行修改

//cookie存储第一种

function setCookie(name, value, path, expires) {

	var str = name + "=" + value;
	//判断是否输入path数据
	if(path) {
		str += ";path=" + path;
	}
	//判断是否输入expires数据
	if(expires) {
	    //现在时间
		var d = new Date();
		//现在时间加上需要保存的时间
		d.setDate(d.getDate() + expires)
	
		str += ";expires=" + d;
	}
	
		//控制台输出str
		//console.log(str);
		//存储cookie
		document.cookie = str;
}

//cookie存储第二种

function setCookie2( name , value , options){
	// 根据参数判定是否拼接 path 和 expires;
	document.cookie = (
		function(name , value , options){
			var str = name + "=" + value;
			//判定是否拼接 path 
			if(options.path){
				str +=";path=" + options.path;
			}
			//判定是否拼接expires;
			if(options.expires){
				var  date = new Date;
				date.setDate( date.getDate() + options.expires)
				str +=";expires=" + date;
			}
			return str;
		}
	)(name , value , options)
}
//调用方式
//setCookie2("name" , "value" , { expires : 10 });


//*此类cookie存储注意第三个数据的添加一般为		/		格式错误会导致cookie存储失败

////cookie存储第三种
//
//function setCookie2(name,value,expires ){
//	//encodeURIComponent 将中文换为编码值
// 	var str = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';path=/';
// 	//encodeURIComponent 将中文换为编码值
// 	//判断添加数据expires是否为数字格式	
// 	if(typeof expires === 'number' ){ 		
// 		var date = new Date;
// 		date.setDate(date.getDate() + expires);
// 		str +=  ";expires=" + date; 	 		
// 	}
// 	document.cookie = str;
//
//
//}
////*此类cookie存储只有3个数据	也就是	name value expires
//判断expires是否使数据类型后无法获取时间？



//cookie存储第四种
function setCookie3( name , value ,day ){
	var str = name +"=" + value;
	if( day ){
		var now = new Date();
		now.setDate( now.getDate() + day );
		document.cookie = str + ";expires="+now;
	}else{
		document.cookie = str;
	}
}
//*最简单的cookie存储方式





//cookie 删除

function removeCookie(name,path){
       setCookie(name , "" , {
             expires : -1,
             path : path 
      })
}


//将name的值设置为""
function removeCookie2( key ){
	setCookie( key , "" );
}






//根据name 查找 value 

//1. 每条cookie 以 ;空格进行分割; 
//2. key 和 value 以= 进行分割;

            
function getCookie(key){
    var str = document.cookie;
    // 字符串转成数组;
    // string.split(); 切割字符串;
                  
    var arr = str.split("; ")

    for(var i = 0 ; i < arr.length ; i ++){
        if(key === arr[i].split("=")[0]){
        	return arr[i].split("=")[1];
        }
    }

    // console.log(res);                
    //return "";
}
