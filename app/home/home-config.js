define(
    [
        'angular',
        '../base/base-module'
    ],
    function (angular) {
        config.$inject = ['$stateProvider', '$urlRouterProvider'];
        function config($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
            $stateProvider
              .state('home', {
                  url: "/home",
                  templateUrl: "app/home/home.html",
                  controller: 'home',
                  controllerAs: 'vm'
              });
        }
        return config;
    });