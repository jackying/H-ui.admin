/*大图预览*/
jQuery(function(){
	var timer;
	$("a.preview").hover(
	  function(e){
	var _this =this;
		clearTimeout(timer);
		timer = setTimeout(function () {
			var pointY = e.pageY - $(document).scrollTop();
		$(_this).addClass("active");
		$("#tooltip-keleyi-com").remove();
		var winW=$(window).width();
		var winH=$(window).height();
		var winW5=winW/2;
		var winH5=winH/2; 
		_this.myTitle = _this.title;
		_this.title = "";
		var midimg = $(_this).attr('data-preview');
		var src = $(_this).find("img").attr('src');
		var thumbW = $(_this).find("img").width();
		var thumbH = $(_this).find("img").height();
		if(midimg ==''){return;}	
		var imgT=$(_this).parents(".imgItem").offset().top;
		var imgL=$(_this).parents(".imgItem").offset().left;	
		var imgW=$(_this).parents(".imgItem").width();
		var imgH=$(_this).parents(".imgItem").height();
		var dataW = $(_this).attr('data-width');
		var dataH = $(_this).attr('data-height');
		if(dataW==""||dataW=="undefined"){
			var midimgW = $(_this).parents("span").width()*3;
			var midimgH = $(_this).parents("span").height()*3;
		}else{
			var midimgW = dataW;
			var midimgH = dataH;
		}
		var ww=(imgL+imgW/2);
		var hh=(imgT+imgH/2);
		if(ww < winW5){var tooltipLeft=(imgW+imgL)+"px";}
		else{var tooltipRight=(winW-imgL)+"px";}
		var midimgW2 = midimgW;
		if(midimgW  > midimgH){
			midimgW2 = midimgW;
		}
		else{
			midimgW2 =(parseFloat(midimgW)+50);
		}
		var imgT2 = imgT;
		if(pointY > winH5){imgT2 = imgT-midimgH+128;}
		else{imgT2 = imgT;}
		var tooltip_keleyi_com = "<div id='tooltip-keleyi-com' style='top:"+ imgT2 +"px;right:"+ tooltipRight +";left:"+ tooltipLeft +"'><span id='tooltip-keleyi-div' style='width:"+midimgW+"px; height:"+midimgH+"px'><img src='"+src+"' width='"+midimgW2+"' class='thumbpic'></span></div>";
	
		$("body").append(tooltip_keleyi_com);
		
		var imgTitle = _this.myTitle ? "<br />" + _this.myTitle + " 产品预览图" : "";
		/*图片预加载*/
		var image = new Image();/*创建一个Image对象*/
		image.onload = function () {
			if($('a.preview.active').attr('data-preview') == midimg){
				var midingW2 = this.width;
				var midingH2 = this.height;
				$("#tooltip-keleyi-div").css({"width":midingW2+"px","height":(midingH2-20)+"px"});
				$(".thumbpic").hide();
				$('#tooltip-keleyi-div').append(this);	
			}
		};
		image.src = midimg;
		},500);
		
	  },
	  function(){
		clearTimeout(timer);
		$(this).removeClass("active");
		this.title = this.myTitle;
		$("#tooltip-keleyi-com").remove();
	  }
	);
	
});