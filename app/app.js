(function () {
    'use strict';
    require.config({
        paths: {
            'angular': '../content/script/angular.min',
            'angular-ui-router': '../content/script/angular-ui-router.min',
        },
        shim: {
            'angular-ui-router': {
                deps: ['angular'],
                exports: 'angular-ui-router'
            },
        }
    });

    require(['angular',
        'core/core.module',
        'home/home.module',
        'product/product.module'],
        function () {
            angular.module('app',
            [
            'core',
            'app.home',
            'app.product'
            ]);
        });
})();
