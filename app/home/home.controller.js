define(['require', 'exports'], function (require, exports) {
    'use strict'

    angular.module("app.home")
           .controller('home', home);
    home.$inject = ['$scope'];
    function home($scope) {
        var vm = this;
        vm.x = 2;
    }
});