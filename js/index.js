// JavaScript Document
$(function(){
	
	//导航头像反转效果
	$(function(){
		$('.box').mouseover(function(){
			$(this).addClass('hover')
		}).mouseout(function(){
			$(this).removeClass('hover')
		})
	})
	
	
	// 点击导航切换页面
	$(function(){
		var start=true;
		function nav(){
			if(start){
				$(".nav li").children("a").click(function(){
				$(this).addClass("active").parent().siblings().children().removeClass("active")	
				start=false;	
			})
			}else{
				start=true;	
			}
			
		}
		nav()
	})
	
	//点击右侧按钮  号航样式随之变化
	$(function(){
		$("#radio li").click(function(){
			index=$(this).index()
			
			$(".nav li a").last().removeClass("active")
			$(".nav li a").removeClass("active")
			$(".nav li a").eq(index).addClass("active").siblings().removeClass("active")				
		})	
	})
	
	
	//照片墙效果
	$(function(){
			var images = "", count = 24;
				
			for(var i = 0; i <= count; i++) {
				//把所有图片插入进盒子中
				$("<img>").appendTo($(".grid")).attr("src", "images/"+i+".jpg")
			}
			
			var d = 0; //延迟函数
			var ry, tz, s; //transform 参数
			
			//动画时间 点击时间
			$("#radio li").eq(1).on("click", function(){
				
				$(".second img").each(function(){
					d = Math.random()*1000; // 1秒后执行延迟函数
					$(this).delay(d).animate({opacity: 0}, {
						step: function(n){
							s = 1-n; 
							$(this).css("transform", "scale("+s+")");
						}, 
						duration: 1000, 
					})
				}).promise().done(function(){
				
					storm();
				})
			})

			$("#nav li").eq(1).on("click", function(){
				
				$(".second img").each(function(){
					d = Math.random()*1000; 
					$(this).delay(d).animate({opacity: 0}, {
						step: function(n){
							s = 1-n; 
							$(this).css("transform", "scale("+s+")");
						}, 
						duration: 1000, 
					})
				}).promise().done(function(){
					
					storm();
				})
			})
			
			//照片墙效果
			function storm(){
				$(".second img").each(function(){
					d = Math.random()*1000;
					$(this).delay(d).animate({opacity: 1}, {
						step: function(n){
						
							ry = (1-n)*360;
						
							tz = (1-n)*1000;
							
							$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
						}, 
						duration: 3000, 
						
						easing: 'easeOutQuint', 
					})
				})
			}
		
		
	})
	


	//点击每个页面出现动画效果
	$(function(){
		$("#nav li").eq(2).click(function(){
			$(".skill-introduce").css({
				"transition":"all 3s "	
			})	
		})
	
	})

	/*自我评价文字翻转效果*/
	// 点击导航
	$("#nav li").eq(4).on("click", function(){
				
				$(".min p").each(function(){
					d = Math.random()*1000; 
					$(this).delay(d).animate({opacity: 0}, {
						step: function(n){
							s = 1-n; 
							$(this).css("transform", "scale("+s+")");
						}, 
						duration: 1000, 
					})
				}).promise().done(function(){
					
					storm();
				})
	})
// 点击侧导航按钮
		$("#radio li").eq(4).on("click", function(){
				
				$(".min p").each(function(){
					d = Math.random()*1000; 
					$(this).delay(d).animate({opacity: 0}, {
						step: function(n){
							s = 1-n; 
							$(this).css("transform", "scale("+s+")");
						}, 
						duration: 1000, 
					})
				}).promise().done(function(){
					
					storm();
				})
	})	
		

		//封装在翻转动画效果1
			function storm(){
				$(".min p").each(function(){
					d = Math.random()*1000; //延迟函数时间
					$(this).delay(d).animate({opacity: 1}, {
						step: function(n){
						
							ry = (1-n)*360; //反转角度
						
							tz = (1-n)*1000; //位置移动
							
							$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
						}, 
						duration: 3000, 
						
						easing: 'easeOutQuint', 
					})
				})
			}

		//封装在翻转动画效果1
			function storm(){
				$(".min p").each(function(){
					d = Math.random()*1000;
					$(this).delay(d).animate({opacity: 1}, {
						step: function(n){
						
							ry = (1-n)*360;
						
							tz = (1-n)*1000;
							
							$(this).css("transform", "rotateZ("+ry+"deg) translateY("+tz+"px)");
						}, 
						duration: 3000, 
						
						easing: 'easeOutQuint', 
					})
				})
			}
			
})