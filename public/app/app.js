'use strict';

angular.module('MailClient', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/views/partials/home',
        controller: 'HomeController'
      })
      .when('/settings', {
        templateUrl: '/views/partials/settings',
        controller: 'SettingsController'
      })
      .otherwise({ redirectTo: '/home' });
  }]);
