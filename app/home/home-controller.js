define(
    [
        'angular'
    ],
    function (angular) {
        home.$inject = ['$scope'];
        function home($scope) {
            var vm = this;
            vm.x = 2;
        }
        return home;
    });