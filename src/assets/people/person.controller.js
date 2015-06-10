angular
  .module('angularAddresses')
  .controller('PersonController', function($routeParams, $scope, $location, Person) {
    var main = this;
    main.id = $routeParams.id;

    // get an individual person's data
    Person.getOne(main.id, function(person) {
      main.person = person;
    });

    main.destroy = function () {
      Person.destroy(main.id, function() {
        $location.path('/people');
      });
    };

    main.onModalLoad = function() {};
  });
