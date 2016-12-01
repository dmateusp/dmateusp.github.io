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

    $('#countdown').countdown({
        date: '06/17/2017 00:00:00',
        offset: 0,
        day: 'Day',
        days: 'Days'
    }, function () {
        alert('Graduated!');
    });

});