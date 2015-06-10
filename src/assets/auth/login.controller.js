angular
  .module('angularAddresses')
  .controller('LoginCtrl', function($scope, $location, Auth) {
    var main = this;
    //this needs to happen on click
    main.login = function() {
      Auth.login(main.email, main.password, function() {
        $location.path('/people');
        $scope.$apply();
      });
    }

    main.register = function() {
      Auth.register(main.email, main.password, function() {
        Auth.login(main.email, main.password, function() {
          $location.path('/people');
          $scope.$apply();
        });
      })
    };
  });
