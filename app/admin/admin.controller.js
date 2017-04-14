(function (angular) {
    'use strict';

    function ControllerFn($scope,User) {
 $scope.users = [];
   function selectAll() {
            User.query().$promise.then(function(data) {
                $scope.users = data;
            });
       
        }
	selectAll();

    }
    ControllerFn.$inject = ['$scope','User'];
    angular.module("meanstack").controller("adminController", ControllerFn);
})(angular);