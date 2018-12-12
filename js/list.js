//require( "./modules/a" );
//console.log("this is list")
//$(document).ready(function(){
//	$.ajax({
//		url:"list.json",
//		type:"get",
//		async:false,
//		success:function(msg){
//			var txt = "";
//			for( var i = 0 ; i < 2 ; i++ ){
//				var pro = msg[i];
//				txt += `	       				
//		       			<li>
//							<a href="http://www.tcl.com/tv/33d3718b95c84f018b90127ec53d7a64">
//								<img height="180" width="180" class="hot-img" src="../img/log/list-details_right11.png" alt="70A950U 70英寸哈曼卡顿音响巨幕4K电视" style="display: inline;">
//	                            <p class="name">${pro.name}</p>
//	                            <p class="presentation">${pro.content}</p>
//	                            <p class="price">${pro.price}</p>
//	                        </a>
//						</li>
//	       				`
//			}
//			$( "#list-details_right" ).html( txt );
//		}
//	});
//})

		$(function() {
							console.log(000000);
			
			$.ajax({
						url : "list.json",
						type : "GET",
						dataType : "json",
						success : function(msg) {
							console.log(111111);
							var txt = "";
						console.log(222222);
							
			for( var i = 0 ; i < 2 ; i++ ){
						console.log(33333);
				
				var pro = msg[i];
						console.log(44444);
				
				txt += `	       				
		       			<li>
							<a href="http://www.tcl.com/tv/33d3718b95c84f018b90127ec53d7a64">
								<img height="180" width="180" class="hot-img" src="../img/log/list-details_right11.png" alt="70A950U 70英寸哈曼卡顿音响巨幕4K电视" style="display: inline;">
	                            <p class="name">${pro.name}</p>
	                            <p class="presentation">${pro.content}</p>
	                            <p class="price">${pro.price}</p>
	                        </a>
						</li>
	       				`
			}
						console.log(555555);
							
							$("#list-details_right").html(txt);
							//通过jquery方式获取table，并把tr,td的html输出到table中
						},
						error : function() {
							alert("数据加载错误!");
						}
					});
						console.log(666666);
			
		});
