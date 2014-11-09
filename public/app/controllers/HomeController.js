'use strict';

angular.module('MailClient')
  .controller('HomeController', ['$scope', function($scope) {
    $scope.message = 'Hi From Home';
  }]);
