define(
    [
      'angular'
    ],
    function (angular) {
        product.$inject = ['$scope'];
        function product($scope) {
            var vm = this;
            vm.x = 3;
        }
        return product;
    });