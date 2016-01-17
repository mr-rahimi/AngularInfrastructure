define(
    [
     'angular',
     './home-config',
     './home-controller'
    ], function (angular,config,controller) {
        angular.module('app.home', ['base'])
               .config(config)
               .controller('home',controller);
    });