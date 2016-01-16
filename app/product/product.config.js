define(['require', 'exports'], function (require, exports) {
    'use strict'

    var home = angular.module("app.product")
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/product");
        $stateProvider
          .state('product', {
              url: "/product",
              templateUrl: "app/product/product.html",
              controller: 'product',
              controllerAs: 'vm'
          });
    }
});