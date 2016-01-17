define(
    [
        'angular',
        '../base/base-module'
    ],
    function (angular) {
        config.$inject = ['$stateProvider', '$urlRouterProvider'];
        function config($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/product");
            $stateProvider
              .state('product', {
                  url: "/product",
                  templateUrl: "app/product/product.html",
                  controller: 'product',
                  controllerAs: 'vm'
              });
        }
        return config;
    });