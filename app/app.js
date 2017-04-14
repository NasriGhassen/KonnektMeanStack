(function(angular) {
    'use strict';
    //$routeProvider to configure routes in our application
    function configFN($routeProvider ,uiGmapGoogleMapApiProvider) {
      //.when to specifie the URL of the page and the template to display at that
      //Specific URL, i dont specifie the controller beceause i specifie the controller
      //inside the view (see /product/product.view.html Line 1)
        $routeProvider
            .when('/events', {
                templateUrl: "./events/events.view.html"
            })
          .when('/login', {
                templateUrl: "./events/login.html"
            })
        .when('/profile', {
                templateUrl: "./events/profil.html"
            })
            .when('/updateprofil', {
               templateUrl: "./events/updateprofil.view.html"
            })
			.when('/updatecar', {
               templateUrl: "./events/updatecar.view.html"
            })
        .when('/admin', {
               templateUrl: "./admin/admin.view.html"
            })
        .when('/suggestion', {
               templateUrl: "./admin/suggestion.view.html"
            })
			.when('/stat', {
               templateUrl: "./admin/stat.view.html"
            })
            .otherwise({
                redirectTo: "/login"
            });
            //otherwise if the user types any url that isnt specified he will get redirected to the products URL

     uiGmapGoogleMapApiProvider.configure({
          libraries: 'geometry,visualization'
      });
        
    }
    configFN.$inject = ['$routeProvider','uiGmapGoogleMapApiProvider'];

    angular.module("meanstack", ["ngRoute", "ngResource","uiGmapgoogle-maps"]).config(configFN);
})(angular);
