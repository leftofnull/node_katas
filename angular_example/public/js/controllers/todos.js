'use strict';

define(['app', 'services/todoStorage'], function (app) {
  return app.controller('TodoController', ['$scope', '$location', 'todoStorage', 'filterFilter', 
    function TodoController ($scope, $location, todoStorage, filterFilter) {
      var todos = $scope.todos = todoStorage.get();
      
      $scope.newTodo = '';
      $scope.editedTodo = null;

      $scope.$watch('todos', function () {
        
      })
  }])
})