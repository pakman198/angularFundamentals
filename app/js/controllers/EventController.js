eventsApp.controller('EventController', function($scope, eventData, $log, $anchorScroll){

	/*eventData.getEvent(function(event){
		console.log(event);
		$scope.event = event;
	});*/

	/*eventData.getEvent()
		.then(
			function success(event){
				$scope.event = event.data;	
			},
			function error(data, satus, headers, config){
				$log.warn(data, satus, headers, config);
			}
		);*/

	$scope.event = eventData.getEvent();


	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session){
		
		if(session.upVoteCount == 0){
			session.upVoteCount = 0;
		}else{
			session.upVoteCount--;
		}
	};

	$scope.scrollToSession = function(){
		$anchorScroll();
	};

});