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

    $('#formContact').submit(function(e) {
        e.preventDefault();
        
        $('#myModal').modal('hide'); //or  $('#IDModal').modal('hide');
        $('#formSuccess').show();
        return false;
    });
});

var app = angular.module("app", []);
app.controller("eventsCtrl", function($scope, $http) {
    $http.get('./data/events.json', {
        "Content-Type": "application/json"
    })
       .then(function(res){
          $scope.events = res.data;                
    });
});
app.controller("skillsCtrl", function($scope, $http) {
    $http.get('./data/skills.json', {
        "Content-Type": "application/json"
    })
       .then(function(res){
          $scope.skills = res.data;                
    });
});