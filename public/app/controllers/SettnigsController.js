'use strict';

angular.module('MailClient')
  .controller('SettingsController', ['$scope', function($scope) {
    $scope.updateSettings = updateSettings;

    function updateSettings(settings) {
      console.log(settings);
    }
  }]);
