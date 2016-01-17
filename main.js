
require.config({

        paths: {
            'angular': './content/script/angular.min',
            'angular-ui-router': './content/script/angular-ui-router.min',
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-ui-router': {
                deps: ['angular'],
                exports: 'angular-ui-router'
            },
        }
    });

require(['app/app']);

