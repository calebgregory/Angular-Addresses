angular
  .module('angularAddresses')
  .controller('NewPersonCtrl', function($location, $scope, Person) {
    var main = this;

    main.onModalLoad = function() {
      $('#modal').modal('show');

      $('#modal').on('hidden.bs.modal', function (e) {
        $location.path('/people');
        $scope.$apply();
      });
    };

    main.saveAddress = function () {
      Person.create(main.person, function() {
        $('#modal').modal('hide');
      });
    };

    Person.getAll(function(people) {
      main.people = people;
    });
  });
