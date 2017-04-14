(function(angular) {
    'use strict';

    function UserFN($resource) {
        var url = "http://localhost:3000/users/:login";
        var params = {
            login: "@login"
        };
        var customMethods = {
            'update': {
                method: "PUT",
				url : "http://localhost:3000/users"
            }
        };
        var Product = $resource(url, params, customMethods);
        return Product;
    }
    UserFN.$inject = ["$resource"];
    angular.module("meanstack").factory("User", UserFN);
})(angular);
