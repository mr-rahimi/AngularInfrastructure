define(
    [
     'angular',
     './core-config',
     
    ],
    function (angular, config) {
        angular.module('core', ['base'])
               .config(config);
    });