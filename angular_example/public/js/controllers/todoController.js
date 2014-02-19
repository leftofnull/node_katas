'use strict';

todoapp.controller('TodoController',
  function TodoController ($scope, $routeParams, todoStorage, filterFilter) {
    var todos = $scope.todos = todoStorage.get();
    
    $scope.newTodo = '';
    $scope.editedTodo = null;

    $scope.$watch('todos', function (newTodos, oldTodos) {
      $scope.remainingCount = filterFilter(todos, { completed: false }).length;
      $scope.doneCount = todos.length - $scope.remainingCount;
      $scope.allChecked = !$scope.remainingCount;
      if (newTodos !== oldTodos)
        todoStorage.put(todos);
    }, true);

    $scope.$on('$routeChangeSuccess', function () {
      var status = $scope.status = $routeParams.status || '';

      $scope.statusFilter = (status === 'active') ?
        { completed: false } :
        (status === 'completed') ?
        { completed: true } :
        null;
    });
    
    $scope.addTodo = function () {
      var newTodo = $scope.newTodo.trim();
      if (!newTodo.length) return;

      todos.push({
        title: newTodo,
        completed: false
      });

      $scope.newTodo = '';
    };

    $scope.editTodo = function (todo) {
      $scope.editedTodo = todo;
    };

    $scope.doneEditing = function (todo) {
      $scope.editedTodo = null;
      todo.title = todo.title.trim();

      if (!todo.title) $scope.removeTodo(todo);
    };

    $scope.cancelEditing = function () {
      $scope.editedTodo = null;
    };

    $scope.removeTodo = function (todo) {
      todos.splice(todos.indexOf(todo), 1);
    };

    $scope.clearDoneTodos = function () {
      $scope.todos = todos = todos.filter(function (val) {
        return !val.completed;
      });
    };

    $scope.markAll = function (done) {
      todos.forEach(function (todo) {
        todo.completed = !done;
      });
    };
});