define(
    [
     'angular',
     './product-config',
     './product-controller'
    ]
    , function (angular, config, controller) {
        angular.module('app.product', ['base'])
               .config(config)
               .controller('product', controller);
    });