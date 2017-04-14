(function(angular) {
    'use strict';

    function UserFN($resource) {
        var url = "http://localhost:3000/accidents";
        var params = {
            types: "@types"
        };
        var customMethods = {
            'update': {
                method: "PUT",
				url : "http://localhost:3000/accidents"
            }
        };
        var Product = $resource(url, params, customMethods);
        return Product;
    }
    UserFN.$inject = ["$resource"];
    angular.module("meanstack").factory("Accident", UserFN);
})(angular);
