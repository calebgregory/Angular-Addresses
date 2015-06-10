angular
  .module('angularAddresses')
  .factory('Person', function($http, API_URL) {
    return {
      getOne: function(id, cb) {
        $http
          .get(`${API_URL}/people/${id}.json`)
          .success(cb);
      },
      getAll: function(cb) {
        $http
          .get(`${API_URL}/people.json`)
          .success(cb);
      },
      create: function(data, cb) {
        $http
        .post(`${API_URL}/people.json`, data)
        .success(cb);
      },
      update: function(id, data, cb) {
        $http
          .put(`${API_URL}/people/${id}.json`, data)
          .success(cb);
      },
      destroy: function(id, cb) {
        $http
          .delete(`${API_URL}/people/${id}.json`)
          .success(cb);
      }
    };
  });
