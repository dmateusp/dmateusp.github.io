$( document ).ready(function() {
	$('#mail').hover(
	       function(){
	       	$(this).removeClass('fa-envelope-o'),
	        $(this).addClass('fa-envelope')
	       },
	       function(){
	       	$(this).removeClass('fa-envelope')
	        $(this).addClass('fa-envelope-o')
	       }
	);
	$('.heartbeat').hover(
	       function(){
	        $('i#heart').addClass('beating')
	       },
	       function(){
	       	$('i#heart').removeClass('beating')
	       }
	);
	$('.cntl').cntl({
		revealbefore: 300,
		anim_class: 'cntl-animate',
		onreveal: null
	});
});