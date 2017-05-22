
function startOnePage(myInput){
	'use strict';

	var settings = myInput;

	
	var frame = $(settings.frame),
		container = $(settings.container),
		sections = $(settings.sections),
		speed = settings.speed || 500,
		radio = $(settings.radio),
		radioOn = $(settings.radioOn),
		easing = settings.easing || "swing";

	var didScroll = true,
		isFocused = true;

	
	var height = $(window).height();

	
	var totalSections = sections.length - 1;

	
	var num = 0; 

	
	var pressedKey = {};
		pressedKey[36] = "top"; 
		pressedKey[38] = "up"; 
		pressedKey[40] = "down"; 
		pressedKey[33] = "up";
		pressedKey[34] = "down"; 
		pressedKey[35] = "bottom"; 



	function init(){
		height = $(window).height();
		frame.css({"overflow":"hidden", "height": height + "px"});
		sections.css({"height": height + "px"});
		didScroll = true;
		isFocused = true;
		end = - height * ( totalSections );

		
		container.stop().animate({marginTop : 0}, 0, easing, function(){
			num = 0;
			didScroll = true;
			turnOnRadio(0, 0);
		});
	}
	
	$(window).bind("load resize", init);
	

	
	var now, end;
	function animateScr(moveTo, duration, distance){
		var top;
		duration = duration || speed;
		switch(moveTo){
			case "down":
				top = "-=" + ( height * distance ) + "px";
				num += distance;
				break;
			case "up":
				top = "+=" + ( height * distance ) + "px";
				num -= distance;
				break;
			case "bottom":
				top = end;
				num = totalSections;
				break;
			case "top":
				top = 0;
				num = 0;
				break;
			default: console.log("(error) wrong argument passed"); return false;
		}

		container.not(":animated").animate({marginTop : top}, duration, easing, function(){
			didScroll = true;
		});

		if(radio){turnOnRadio(num, speed);}
	}

	
	function turnOnRadio(index, duration){
		duration = duration || speed;
		radioOn.stop().animate({"top": index * radioOn.outerHeight( true )+ "px"}, speed, easing);
	}

	radio.children("li:not(" + settings.radioOn + ")").click(function(){
		var to = $(this).index();
		var dif = Math.abs( num - to );

		if(num < to){
			animateScr("down", speed, dif);
		}else if(num > to){
			animateScr("up", speed, dif);
		}
	});

	
	$(document).bind("DOMMouseScroll mousewheel keydown", function(e){
		var eType = e.type;

		now = parseInt( container.css("marginTop") );
		end = - height * ( totalSections );

		
		if( didScroll && isFocused ){
			
			didScroll = false;

			
			if( eType == "DOMMouseScroll" || eType == "mousewheel" ){

				var mvmt = e.originalEvent.wheelDelta;
				if(!mvmt){ mvmt = -e.originalEvent.detail; }

				
				if(mvmt > 0){
					
					if( now == 0){
						didScroll = true;
					}else{
						animateScr("up", 500, 1);
					}
				}else if(mvmt < 0){
					
					if( now == end ){
						didScroll = true;
					}else{
						animateScr("down", 500, 1);
					}
				}else{
					didScroll = true; 
				}
			}
			// 按下时
			else if( eType == "keydown" ){
				
				if( pressedKey[e.which] ){
					e.preventDefault();
					if( pressedKey[e.which] == "up" ){
						
						if( now == 0 ){
							animateScr("bottom");
						}else{
							animateScr("up", speed, 1);
						}
					}else if( pressedKey[e.which]  == "down" ){
						
						if( now == end ){
							animateScr("top");
						}else{
							animateScr("down", speed, 1);
						}
					}else{
					
						animateScr( pressedKey[e.which] );
					}
				}else{
					didScroll = true;
				}
			}
		}

		
		$("input, textarea").focus(function(){isFocused = false;})
							.blur(function(){isFocused = true;});
	});

}