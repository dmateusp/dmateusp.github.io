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
function goBottom(){
	$( "#three" ).toggle( "slide", {direction:"down"} );
	pos = 3;
}
function goTop(){
		$( "#three" ).hide( "slide", {direction:"down"} );
		pos = 1;
}
function goRight(){
	$( "#two" ).toggle( "slide", {direction:"right"} );
	pos = 2;
}
function goLeft(){
	$( "#two" ).hide( "slide", {direction:"right"} );
	pos = 1;
}
