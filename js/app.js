$(function(){
	$(".show1 li").eq(0).show();
	$(".show1 li a").eq(0).show();
	$(".show2 li").mouseover(function(){
		$(this).addClass("active2").siblings().removeClass("active2");
		var index1 = $(this).index();
		$(".show1 li").eq(index1).fadeIn(300).siblings().fadeOut(300);
		$(".show1 li a").eq(index1).fadeIn(300).siblings().fadeOut(300);
		i = index1;
	})
	var i = 0;
		// var j = $(".show-img-ul2 li").length;
	var s = setInterval(move,1500);

	function move(){
		i++;
		if(i==6){
				i=0;
		}
		$(".show2 li").eq(i).addClass("active2").siblings().removeClass("active2");
		$(".show1 li").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".show1 li a").eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	$(".show1 li a").hover(function(){
		clearInterval(s);
	},function(){
		s = setInterval(move,1500);
	})
	$(".show2 li").hover(function(){
		clearInterval(s);
	},function(){
		s = setInterval(move,2000);
	})
// *************************************************************
	var page = 1;
	var j = 3;
	$(".show5-btn2").click(function(){
		var $parent = $(this).parents("div.show5");
		var $v_show = $parent.find(".show5-list"); 
		var $v_box = $parent.find(".show5.box");
		var v_width = $v_box.width();
		var len = $v_show.find("li").length;
		var page_count = Math.ceil(len / j);

		if(!$v_show.is(":animated")){
			if(page == page_count){
			$v_show.animate({left:'0px'},"slow");

			page = 1;
		}else{
			$v_show.animate({left:'-=780px'},"slow");

			page++;
		}
		}

	})
	$(".show5-btn1").click(function(){
		// var $parent = $(this).parents("div.show5");
		// var $v_show = $parent.find(".show5-list"); 
		// var $v_box = $parent.find(".show5.box");
		// var v_width = $v_box.width();
		// var len = $v_show.find("li").length;
		// var page_count = Math.ceil(len / j);
		if(!$(".show5-list").is(":animated")){
			if(page == 1){
			$(".show5-list").animate({left:'-=780px'},"slow");

			page = 2;
		}else{
			$(".show5-list").animate({left:'+=780px'},"slow");

			page=page-1;
		}
		}
		
	})
	$(".title-box>ul>li").mouseover(function(){
		$(this).addClass("menu");
		$(this).children("ul").children("li").show();
		$(this).find(".xsj").animate({transform:"rotate(180deg)"},300);
	}).mouseout(function(){
		$(this).children("ul").children("li").hide();
		$(this).removeClass("menu");
		})
	
})