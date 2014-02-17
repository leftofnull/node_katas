'use strict';

define(['app'], function (app) {
  app.directive('todoLine', function () {
    return {
      restrict: 'A',
      templateUrl: 'todo_line.html'
    };
  });
});