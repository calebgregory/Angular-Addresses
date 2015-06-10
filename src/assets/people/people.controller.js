angular
  .module('angularAddresses')
  .controller('PeopleCtrl', function($rootScope, $location, Person) {
    var main = this;

    Person.getAll(function(people) {
      main.people = people;
    });

    main.onModalLoad = function() {};
  });
