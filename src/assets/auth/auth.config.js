angular
  .module('angularAddresses')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'assets/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function($rootScope, $location) {
            if($rootScope.auth) {
              $location.path('/people')
            }
          }
        }
      })

      .when('/logout', {
        template: '<p>Logging out . . .</p>',
        controller: 'LogoutCtrl'
      });
  });
