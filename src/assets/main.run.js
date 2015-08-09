angular
  .module('angularAddresses')
  .run(function($rootScope, Auth) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute){

      if (nextRoute.$$route && nextRoute.$$route.private) {
        Auth.requireLogin();
      }
    });
  });
