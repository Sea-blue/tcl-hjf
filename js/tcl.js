
<!--头部点击隐藏-->

$("#top-box_span").click(function(){
  $("#top-box").hide();
});
	
<!--导航选项卡-->

<!--移入显示-->

$(" .mes").mouseenter( function(){
			<!--移入大div显示。div内容显示-->
			$("#hide-box").show();
			<!--小div遍历显示隐藏-->
			$(".hide_").show();
						var index = $(this).index();
						$(".hide_").eq(index-1)
			                   .show()
			                   .siblings()
			                   .hide();
		$(".hide_").mouseleave(function(){
			<!--移入大div隐藏。div内容隐藏-->
			$("#hide-box").hide();
			<!--小div隐藏-->
			$(".hide_").hide();
		})
})

<!--轮播控制-->
<!--选项卡控制-->


$(" .list_left_li").mouseenter( function(){
			<!--移入大div显示。div内容显示-->
			$(".list_right-box").show();
			<!--小div遍历显示隐藏-->
			$(".list_right_").show();
						var index = $(this).index();
						$(".list_right_").eq(index)
			                   .show()
			                   .siblings()
			                   .hide();
		$(".list_right_").mouseleave(function(){
			<!--移入大div隐藏。div内容隐藏-->
			$(".list_right-box").hide();
			<!--小div隐藏-->
			$(".list_right_").hide();
		})
})

<!--轮播图控制-->

<!--当前-->
var index = 0 ;
<!--上一张-->
var prvex  = 0 ;
<!--图片-->
var $img = $(".carousel_");
<!--图片最大值-->
var maximg = $img.length - 1 ;
<!--按钮-->
var $span  = $(".carousel_contorol1-sp");

<!--点击切换图片-->
<!--左边点击-->
$(".carousel_contorol2-a1").on("click" , next)
<!--右边点击-->
$(".carousel_contorol2-a2").on("click" , prve)

<!--左边点击-->
function next(){
	prvex = index;
	<!--判断点击边界最小为0-->
	if( index === 0 ){
		index = maximg;
		changeClass();
		
		return false;
	}
	
    index --;
	changeClass()
}

<!--右边点击-->

function prve(){
	prvex = index;
	<!--判断点击边界最大为div个数-->
	if( index === maximg ){
		index = 0 ;
		changeClass();
		
		return false;
	}

    index ++;
	changeClass();
}

function changeClass(){
	$img.eq(prvex).addClass("carousel_hide")
	.siblings(".carousel_")
	.removeClass("carousel_hide")
	
	
	$img.eq(index).addClass("carousel_show")
	.siblings(".carousel_")
	.removeClass("carousel_show")
	<!--动画效果-->
	<!--给下一张添加-->
	.end()
	.hide()
	<!--防止多次执行-->
	.stop()
	.fadeIn();
}

<!--按钮效果-->


//
//          $span.on("mouseover",toIndex)
//          function toIndex(event){
//                <!-- 获取当前元素的下标;-->
//                <!-- 获取事件源; （获取当前发生事件的元素）-->
//                var e = event || window.event;
//                var target = e.target || e.srcElement;
//                <!-- jquery提供了一个 index() 方法;-->
//                <!-- 在一组元素之中,查找到某个元素的下标;--> 
//                prvex = index;
//                index = $span.index(target);
//                <!-- console.log(i);-->
//                changeClass();
//          }    


<!--自动播放 就是让js帮我点击按钮  right-->
 
setInterval('$(".carousel_contorol2-a2").trigger("click")', 3000)


<!--列表移入移除效果-->
$( ".list-details_right li" ).mouseenter(function(){
	$(this).addClass("hoverimg")
		    .siblings()
		    .removeClass( "hoverimg" )
	}).mouseleave(function(){
		$(this).removeClass( "hoverimg" )
	})
	
<!--回到顶部-->

$("#gotop02").click(function(){
		$("body,html").animate({"scrollTop":0},1000);
})



	
var $list = $(".louti li");	
<!--楼层号-->
var $floor =   $(".list-details_");
<!--楼梯-->
var flag = true;
<!--假设值为真是  滚动条可以操作了-->
$(document).ready(function(){
	$(".louti").hide()
})
<!--//点击楼层号-->
$list.click(function(){
	flag = false;
	$(this).find("span")
		   .addClass("active")
		   .end()
		   .siblings()
		   .find("span")
		   .removeClass();
	var index = $(this).index();
	console.log(index)
	var t = $floor.eq(index).offset().top;
	console.log(t)
	$("body,html").animate({"scrollTop":t},1000,function(){
		flag = true;
	});
})
	
	
$(window).scroll(function(){
	if( flag ){
		var sTop = $(document).scrollTop();
		<!--//查找哪一个楼层的  (top值-页面滚走的距离)  小于楼层高度的一半-->
		<!--//filter-->
			
		$f = $floor.filter( function(index){
			return Math.abs($(this).offset().top-sTop) < $(this).height()/2;
					
		})
			
		<!--//获取满足条件的楼梯下标-->
		var index = $f.index();
		if( index != -1 ){
		<!--根据楼梯的下标获取对应的楼层号  并让index对应的楼层号显示-->
		$list.eq(index).find("span")
				        .addClass("active")
				        .end()
				        .siblings()
				        .find("span")
				        .removeClass("active");
		
		}
		
		if( sTop < 600 || sTop > 4300){
			$list.find("span").removeClass("active");
			$( "#louti-box .louti" ).hide()
		}else{
			$( "#louti-box .louti" ).show()
		}
	}
})	
	