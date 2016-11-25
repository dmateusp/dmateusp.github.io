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
	)
});
