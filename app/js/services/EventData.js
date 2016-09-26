eventsApp.factory('eventData', function ($http, $log, $resource) {

	var resource = $resource('event/:id', {id:'@id'});

	return {
		getEvent: function(){
			return resource.get({id:1});
		},

		save: function(event){
			event.id = 101;

			return resource.save(event, function(){
				console.log('trying to save');
			});
		}

		/*getEvent : function(callback){
			return $http.get('event/1.json');
		}*/

		/*getEvent : function(callback){
			return $http.get('event/1.json')
				.then(
					function success(response){
						callback(response.data);
					}, 
					function error(){
						console.log('error');
					}
				)
		}*/

		/*event: {
			name : 'Angular Boot Camp',
			date : '23/09/2016',
			time : '21:01',
			location : {
				adress : 'San Alejandro',
				city : 'CDMX',
				province : 'Coyoacán'
			},
			imageUrl : 'img/angularjs-logo.png',
			sessions : [
				{
					name : 'Directives Mastercalass',
					creatorName : 'Pako Herrera',
					duration : 1,
					level : 'Advanced',
					abstract : 'In this session you will learn the ins and outs of directives',
					upVoteCount : 3
				},
				{
					name: 'Scopes for fun and profit',
					creatorName : 'John Doe',
					duration : 2,
					level: 'Introdctory',
					abstract : 'This session will take a closer look at scopes',
					upVoteCount : 2
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'John Doe',
					duration: 4,
					level : 'Intermediate',
					abstract : 'Controllers are the beginning of everythign Angular does.',
					upVoteCount : 10
				}
			]
		}*/
	};
});