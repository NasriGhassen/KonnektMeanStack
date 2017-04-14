(function (angular) {
    'use strict';

    function ControllerFn($scope,User,uiGmapGoogleMapApi) {
		
		
		 $scope.getUser = function(login) {
            User.get({
                "login": "12345"
            }).$promise.then(function(data) {
                $scope.user = data;
				
            });
        }
		
		 $scope.update = function() {
            var persist = new User($scope.user);
            persist.$update().then(function() {
             
            });

        }
         
   $scope.getUser();

         

    }
    ControllerFn.$inject = ['$scope','User','uiGmapGoogleMapApi'];
    angular.module("meanstack").controller("updatecarController", ControllerFn);
})(angular);