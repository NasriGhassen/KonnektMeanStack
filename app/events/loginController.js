(function (angular) {
    'use strict';

    function ControllerFn($scope,User,uiGmapGoogleMapApi,$location) {
		  $scope.user =null;
          $scope.getUser = function(login) {
            User.get({
                "login": login
            }).$promise.then(function(data) {
                $scope.user = data;
				sessionStorage.user = JSON.stringify($scope.user); 
            });
        }
         
  
      $scope.connect = function(){
	    $scope.getUser($scope.login);
		if($scope.user != null)
		$location.path( "/events" );
   }
	 
        
    }
    ControllerFn.$inject = ['$scope','User','uiGmapGoogleMapApi','$location'];
    angular.module("meanstack").controller("loginController", ControllerFn);
})(angular);