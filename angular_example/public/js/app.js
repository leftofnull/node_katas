'use strict';

var todoapp = angular.module('todoapp', ['ngRoute']).config(
  function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TodoController'
    }).when('/:status', {
      controller: 'TodoController'
    }).otherwise({
      redirectTo: '/'
    });
  });