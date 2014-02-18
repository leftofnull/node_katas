'use strict';

todoapp.factory('todoStorage', function () {
  var storageKey = 'todos-angularjs';

  return {
    get: function () {
      return JSON.parse(localStorage.getItem(storageKey) || '[]');
    },
    put: function (todos) {
      localStorage.setItem(storageKey, JSON.stringify(todos));
    }
  };
});