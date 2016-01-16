(function () {

})();
define(['require', 'exports'], function (require, exports) {
    'use strict'

    angular.module("app.home")
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
          .state('home', {
              url: "/home",
              templateUrl: "app/home/home.html",
              controller: 'home',
              controllerAs: 'vm'
          });
    }
});