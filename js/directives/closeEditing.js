angular.module('app').directive('closeEditing',function($timeout){
	var KEYS = {
		ESCAPE: 27
	};

	return{
		scope:{
			isEditing: '='
		},
		link: function(scope,element,attrs){

			if(scope.isEditing){
				element[0].focus();
			}

			element.on('keyup',function(e){
				if(_.isEqual(e.keyCode, KEYS.ESCAPE)){
					scope.isEditing = false;
					scope.$apply();
				}
			});
		}
	};
});