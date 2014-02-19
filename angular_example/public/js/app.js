'use strict';

var todoapp = angular.module('todoapp', ['ngRoute']).config(
  function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoController',
      templateUrl: 'todoapp.html'
    }).when('/:status', {
      controller: 'TodoController',
      templateUrl: 'todoapp.html'
    }).otherwise({
      redirectTo: '/'
    });
  });