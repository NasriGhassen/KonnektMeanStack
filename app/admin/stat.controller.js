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
$scope.test=6;
    }
    ControllerFn.$inject = ['$scope','User'];
    angular.module("meanstack").controller("statController", ControllerFn);
})(angular);