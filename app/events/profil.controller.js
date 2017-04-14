(function (angular) {
    'use strict';

    function ControllerFn($scope,User,Suggest,uiGmapGoogleMapApi) {
		
		
		 $scope.suggests = [];
		 $scope.misfiress = [];
	     $scope.componentss = [];
		 $scope.catalystss = [];
		 $scope.evapss = [];
		 $scope.acss = [];
		 $scope.oxygenss = [];
		 $scope.oxygenssh = [];
		 $scope.egrss = [];
   function selectAll() {
            Suggest.query().$promise.then(function(data) {
                $scope.suggests = data;
				
				   for (var i = 0; i < $scope.suggests.length; i++) {
		 
		 if($scope.suggests[i].types=="Misfire")
		 $scope.misfiress.push($scope.suggests[i]);
	 else if($scope.suggests[i].types=="Components")
	  $scope.componentss.push($scope.suggests[i]);
   else if($scope.suggests[i].types=="Catalyst")
	  $scope.catalystss.push($scope.suggests[i]);
   else if($scope.suggests[i].types=="Evap System")
	  $scope.evapss.push($scope.suggests[i]);
   else if($scope.suggests[i].types=="Ac Refrigerant")
	  $scope.acss.push($scope.suggests[i]);
   else if($scope.suggests[i].types=="Oxygen Sensors")
	  $scope.oxygenss.push($scope.suggests[i]);
   else if($scope.suggests[i].types=="Oxygen Sensors Heater")
	  $scope.oxygenssh.push($scope.suggests[i]);
   else if($scope.suggests[i].types=="EGR System")
	  $scope.egrss.push($scope.suggests[i]);

	 }
            });
       
        }
	selectAll();
	
		 $scope.getUser = function(login) {
            User.get({
                "login": "12345"
            }).$promise.then(function(data) {
                $scope.user = data;
				$scope.mistakes = data.car.mistakes;
				$scope.misfire = data.car.last_diagnostics.misfire;
				$scope.egr_system=data.car.last_diagnostics.egr_system;
				$scope.oxygen_sensor_heater=data.car.last_diagnostics.oxygen_sensor_heater;
				$scope.oxygen_sensor=data.car.last_diagnostics.oxygen_sensor;
				$scope.acRefgigerant=data.car.last_diagnostics.acRefgigerant;
				$scope.evap_system=data.car.last_diagnostics.evap_system;
				$scope.catalyst=data.car.last_diagnostics.catalyst;
				$scope.components=data.car.last_diagnostics.components;
				

				
            });
        }
         
   $scope.getUser();
  
         

    }
    ControllerFn.$inject = ['$scope','User','Suggest','uiGmapGoogleMapApi'];
    angular.module("meanstack").controller("profilController", ControllerFn);
})(angular);