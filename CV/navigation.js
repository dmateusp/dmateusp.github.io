var h = $(window).height();
var w = $(window).width();
var pos = 1;
		
$('#three').hide();
$('#four').hide();
$('#two').hide();
$(document.documentElement).keyup(function (event) {
	beatingFunction = [];

	// DESKTOP
	if (event.keyCode == 37 && pos == 2) {
		$( "#two" ).hide( "slide", {direction:"right"} );
		pos = 1;
	}
	else if (event.keyCode == 39 && pos ==1) {
		$( "#two" ).toggle( "slide", {direction:"right"} );
		pos = 2;
	} else if (event.keyCode == 38 && pos == 3) {
		$( "#three" ).hide( "slide", {direction:"down"} );
		pos = 1;
	} else if (event.keyCode == 40 && pos == 1) {
		$( "#three" ).toggle( "slide", {direction:"down"} );
		pos = 3;
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