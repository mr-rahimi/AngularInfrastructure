define([
  'angular',
  './core/core-module',
  './home/home-module',
  './product/product-module'
], function (angular) {
    angular.module('app', ['app.home','app.product']);
    angular.bootstrap(document, ['app']);
});