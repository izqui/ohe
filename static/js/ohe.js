/*globals angular */

(function () {
    angular.module('ohe', ['messages', 'channels']).config(function ($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '!';
        $routeProvider.otherwise({ redirectTo: '/' });
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = document.getElementById('csrftoken').getAttribute('data-token');
    }).run(function ($rootScope) {
        var user = document.getElementById('user');
        $rootScope.user_id = user && user.getAttribute('data-id');
        $rootScope.window = window;
        $rootScope.$on('$routeChangeSuccess', function (event, route) {
            $rootScope.selectedNav = route.$route.selectedNav;
        });
    });
})();
