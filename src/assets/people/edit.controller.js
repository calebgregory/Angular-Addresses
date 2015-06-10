angular
  .module('angularAddresses')
  .controller('EditPersonCtrl', function($http, $routeParams, $scope, $location, Person) {
    var main = this;
    main.id = $routeParams.id;

    main.onModalLoad = function() {
      $('#modal').modal('show');

      $('#modal').on('hidden.bs.modal', function (e) {
        $location.path(`/people/${main.id}`);
        $scope.$apply();
      });
    };

    Person.update(main.id, main.person, function() {
      $('#modal').modal('hide');
    })

    Person.getOne(main.id, function (person) {
      main.person = person;
    });
  });
