var h = $(window).height();
var w = $(window).width();
var pos = 1;
$('#two').css( "left", w );
$('#three').css( "top", h );
$(document.documentElement).keyup(function (event) {
	console.log(pos);
	console.log(event.keyCode);

	// DESKTOP
	if (event.keyCode == 37 && pos == 2) {
		$('#one').animate({left:'+='+w}, "medium");
		$('#two').animate({left:'+='+w}, "medium");
		pos = 1;
	}
	else if (event.keyCode == 39 && pos ==1) {
		$('#one').animate({left: '-='+w}, "medium");
		$('#two').animate({left: '-='+ w}, "medium");
		pos = 2;
	} else if (event.keyCode == 38 && pos == 3) {
		$('#one').animate({top: '+='+h}, "medium");
		$('#three').animate({top: '+='+h}, "medium");
		pos = 1;
	} else if (event.keyCode == 40 && pos == 1) {
		$('#one').animate({top:'-='+h}, "medium");
		$('#three').animate({top:'-='+h}, "medium");
		pos = 3;
	}	else {

	}
});
// MOBILE
$(document).on("swiperight",function(){
	if(pos == 2){
		$('#one').animate({left:'+='+w}, "medium");
		$('#two').animate({left:'+='+w}, "medium");
		pos = 1;
	}
	else if(pos == 3){
		$('#one').animate({left: '+='+w}, "medium");
		$('#two').animate({left: '+='+ w}, "medium");
		pos = 2;
	}
});
$(document).on("swipeleft",function(){
		if(pos == 1){
	 		$('#one').animate({left: '-='+w}, "medium");
			$('#two').animate({left: '-='+ w}, "medium");
			pos = 2;
		}
		else if(pos == 2){
			$('#one').animate({left: '-='+w}, "medium");
			$('#two').animate({left: '-='+ w}, "medium");
			pos = 3;
		}
});