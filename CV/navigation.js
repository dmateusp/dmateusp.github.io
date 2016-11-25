var h = $(window).height();
var w = $(window).width();
var pos = 1;


$('#three').css( "top", h );
$('#four').hide();
$('#two').hide();
$(document.documentElement).keyup(function (event) {
	console.log(pos);
	console.log(event.keyCode);

	// DESKTOP
	if (event.keyCode == 37 && pos == 2) {
		//$('#one').animate({ width: 'show' }, 800);
		$('#one').css("top", 0);
		//$('#two').animate({ width: 'hide' }, 800);
		$('#two').animate({ width: 'hide' }, 800, function(){$('#one').show();});
		pos = 1;
	}
	else if (event.keyCode == 39 && pos ==1) {
		$('#one').animate({ width: 'hide' }, 800);
		$('#two').animate({ width: 'show' }, 800);
		$('#three').hide();
		pos = 2;
	} else if (event.keyCode == 38 && pos == 3) {
		$('#one').show();
		$('#one').animate({top: 0}, 800);
		$('#three').animate({top: '+='+h}, 800);
		pos = 1;
	} else if (event.keyCode == 40 && pos == 1) {
		$('#three').show();
		$('#one').animate({top:'-='+h}, 800);
		$('#three').animate({top:0}, 800);

		pos = 3;
	}	
	else if (event.keyCode == 39 && pos == 3) {
		
		$('#three').animate({ width: 'hide' }, 800, function(){$('#four').show();});

		pos = 4;
	}
	else if (event.keyCode == 37 && pos == 4) {
		$('#three').css("top",0);
		$('#three').animate({ width: 'show' }, 800);
		$('#four').hide();
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