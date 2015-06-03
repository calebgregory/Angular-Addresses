// Create a module
// by module, we mean that we need to define
// our angular app.
angular
  .module('angularAddresses', [])

  .filter('tel', function () {
    return function (tel) {
      if (!tel) { return ''; }

      var value = tel.toString().trim().replace(/^\+/, '');

      if (value.match(/[^0-9]/)) {
        return tel;
      }

      var country, city, number;

      switch (value.length) {
        case 10: // +1PPP####### -> C (PPP) ###-####
          country = 1;
          city = value.slice(0, 3);
          number = value.slice(3);
          break;

        case 11: // +CPPP####### -> CCC (PP) ###-####
          country = value[0];
          city = value.slice(1, 4);
          number = value.slice(4);
          break;

        case 12: // +CCCPP####### -> CCC (PP) ###-####
          country = value.slice(0, 3);
          city = value.slice(3, 5);
          number = value.slice(5);
          break;

        default:
          return tel;
      }

      if (country == 1) {
        country = "";
      }

      number = number.slice(0, 3) + '-' + number.slice(3);

      return (country + " (" + city + ") " + number).trim();
    };
  })

  .controller('Main', function() {
    var main = this;

    main.people = [
      {name: 'Dasher', twitter: '@dasher', phone: 1234567890},
      {name: 'Dancer', twitter: '@dancer', phone: 1234567890},
      {name: 'Blitzen', twitter: '@blitzen', phone: 1234567890},
      {name: 'Comet', twitter: '@comet', phone: 1234567890},
      {name: 'Cupid', twitter: '@cupid', phone: 1234567890},
      {name: 'Prancer', twitter: '@prancer', phone: 1234567890}
    ];

    main.newPerson = {};

    main.addAddress = function() {
      main.people.push(main.newPerson);
      main.newPerson = {};
    }

    main.removeAddress = function(person) {
      var index = main.people.indexOf(person);
      main.people.splice(index, 1);
    };
  })
