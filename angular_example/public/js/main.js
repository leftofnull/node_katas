'use strict';

require.config({
  paths: {
    angular: '../bower_components/angular/angular'
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  }
});

require(['angular', 'app', 'controllers/todos', 'directives/todoFocus'], function (angular) {
  angular.bootstrap(document, ['todo']);
});