(function (angular) {
    'use strict';

    function ControllerFn($scope,User,uiGmapGoogleMapApi) {
     $scope.latestpath = false;
     $scope.lastaccidents = false;
     $scope.laststopsign = false;
      $scope.lastspeed = false;   
	$scope.path =[];
	$scope.stops =[];
	$scope.speeds =[];
	
  
    $scope.getUser = function(login) {
            User.get({
                "login": login
            }).$promise.then(function(data) {
                $scope.user = data;
				$scope.user.car.last_path.forEach(function(element) {
  $scope.path.push({"latitude":element.x,"longitude":element.y});
				});
				$scope.lati = ($scope.path[0].latitude + $scope.path[$scope.path.length-1].latitude)/2;
				$scope.longi = ($scope.path[0].longitude + $scope.path[$scope.path.length-1].longitude)/2;
				
								$scope.user.car.mistakes.forEach(function(element) {
									if(element.types == "stop sign"){
										 $scope.stops.push(element);
									}
									else if(element.types == "speed sign"){
										 $scope.speeds.push(element);
									}
 
				});
				
				$scope.map = {center: {latitude: $scope.lati, longitude: $scope.longi }, zoom: 17 };
				$scope.options = {scrollwheel: false};
				
		
            });
        }
		$scope.getUser("12345");
		
         $scope.reset= function(){
             
    $scope.latestpath = false;
    $scope.lastaccidents = false;
    $scope.laststopsign = false;
    $scope.lastspeed = false;  
             $scope.polylines = [];
             $scope.circles = [];
             
             $scope.randomMarkers = [];
             $scope.randomMarkers2 = [];
             $('#latestpath').attr('checked', false);
             $('#lastaccidents').attr('checked', false);
             $('#laststopsign').attr('checked', false);
             $('#lastspeed').attr('checked', false);
         }
		 
    $scope.map = {center: {latitude: 36.89770926821515, longitude: 10.18405795097351 }, zoom: 17 };
		$scope.options = {scrollwheel: false};

	
    
	

	
       
         $scope.searchPath= function(){
             
             if( $scope.latestpath == false)
 {            $scope.latestpath = true;
           
        $scope.polylines = [];
        uiGmapGoogleMapApi.then(function(){
          $scope.polylines = [
            {
                id: 1,
                path: $scope.path,
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: false,
                draggable: false,
                geodesic: true,
                visible: true,
                icons: [{
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            },
            
        ];
        });
        }
             else { $scope.latestpath = false;
                   
                  $scope.polylines = [];}
        
         }
         
         
         
         
         $scope.searchAccidents= function(){
             
             if( $scope.lastaccidents == false)
 {            $scope.lastaccidents = true;
           
        $scope.circles = [];
        uiGmapGoogleMapApi.then(function(){
           $scope.circles = [
            {
                id: 1,
                center: {
                    latitude: 36.898842,
                    longitude: 10.182618
                },
                radius: 30,
                stroke: {
                    color: '#08B21F',
                    weight: 2,
                    opacity: 1
                },
                fill: {
                    color: '#08B21F',
                    opacity: 0.5
                },
                geodesic: true, // optional: defaults to false
                draggable: false, // optional: defaults to false
                clickable: true, // optional: defaults to true
                editable: false, // optional: defaults to false
                visible: true, // optional: defaults to true
                control: {}
            }
               
        ];
        });
        }
             else { $scope.lastaccidents = false;
                   
                  $scope.circles = [];}
        
         }
         
             
         $scope.searchStopSigns= function(){
             
             if( $scope.laststopsign == false)
 {         
     $scope.laststopsign = true;
     $scope.map = {
      center: {
        latitude: 36.899339,
        longitude: 10.184179
      },
  
    };
    $scope.options = {
      scrollwheel: false
    };
    var createRandomMarker = function(i, bounds, idKey) {
      

      if (idKey == null) {
        idKey = "id";
      }

      var latitude = 36.899339;
      var longitude = 10.184179;
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i,
		icon:'images/stop.png'
      };
      ret[idKey] = i;
      return ret;
    };
    var markers = [];
    for (var i = 0; i < 2; i++) {
      markers.push(createRandomMarker(i, $scope.map.bounds))
      
    }
    $scope.randomMarkers = markers;
     
  
        }
             else { $scope.laststopsign = false;
                   
                  $scope.randomMarkers = [];}
        
         }
         
           $scope.searchSpeed= function(){
             
             if( $scope.lastspeed == false)
 {         
     $scope.lastspeed = true;
     $scope.map = {
      center: {
        latitude: 36.89844,
        longitude: 10.180874
      },
  
    };
    $scope.options = {
      scrollwheel: false
    };
    var createRandomMarker2 = function(i, bounds, idKey) {
      

      if (idKey == null) {
        idKey = "id";
      }

      var latitude = 36.89844;
      var longitude = 10.180874;
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i,
		icon:'http://img.stockfresh.com/files/u/ustofre9/x/80/2668726_77611761.jpg'
      };
      ret[idKey] = i;
      return ret;
    };
    var markers2 = [];
    for (var i = 3; i < 4; i++) {
      markers2.push(createRandomMarker2(i, $scope.map.bounds))
      
    }
    $scope.randomMarkers2 = markers2;
     
  
        }
             else { $scope.lastspeed = false;
                   
                  $scope.randomMarkers2 = [];}
        
         }
         
         
          
        
    }
    ControllerFn.$inject = ['$scope','User','uiGmapGoogleMapApi'];
    angular.module("meanstack").controller("eventsController", ControllerFn);
})(angular);