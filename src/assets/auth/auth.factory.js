angular
  .module('angularAddresses')
  .factory('Auth', function($rootScope, $location, API_URL) {
    var fb = new Firebase(API_URL);

    return {
      requireLogin: function() {
        $rootScope.auth = fb.getAuth();
        if (!$rootScope.auth) {
          $location.path('/login');
        }
      },
      login: function(email, password, cb) {
        fb.authWithPassword({
          email: email,
          password: password
        }, function(err, authData) {
          if (err) {
            console.log(err);
          } else {
            $rootScope.auth = authData;
            cb();
          }
        });
      },
      register: function(email, password, cb) {
        fb.createUser({
          email: email,
          password: password
        }, function(err, authData){
          if (err) {
            console.log(err)
          } else {
            $rootScope.auth = authData;
            cb();
          }
        });
      },
      logout: function(cb) {
        fb.unauth(function() {
          $rootScope.auth = null;
          cb();
        });
      }
    }
  });
