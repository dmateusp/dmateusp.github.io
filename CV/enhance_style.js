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

    $('#countdown').countdown({
        date: '06/17/2017 00:00:00',
        offset: 0,
        day: 'Day',
        days: 'Days'
    }, function () {
        alert('Graduated!');
    });
    columnChart();
    
    function columnChart(){
        var item = $('.chart', '.column-chart').find('.item'),
        itemWidth = 100 / item.length;
        item.css('width', itemWidth + '%');
        
        $('.column-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            itemProgress.css('height', itemProgressHeight);
        });
    };


});