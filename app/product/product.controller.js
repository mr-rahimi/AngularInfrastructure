define(['require', 'exports'], function (require, exports) {
    'use strict'

    angular.module("app.product")
           .controller('product', product);

    product.$inject = ['$scope'];
    function product($scope) {
        var vm = this;
        vm.x = 3;
    }
});