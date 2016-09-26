eventsApp.controller('EditEventController', function($scope, eventData){
	
	$scope.saveEvent = function(event, newEventForm){
		//console.log(newEventForm);
		if(newEventForm.$valid){
			eventData.save(event)
				.$promise.then(function(response){
						console.log('sucess: ' + response);
					})
					.catch(function(response){
						console.log(response);
					})
			
		}
	};

	$scope.cancelEdit = function(){
		window.location = "EventDetails.html";
	}
});