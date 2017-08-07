'use strict';

/**
 * @ngdoc function
 * @name yongularApp.controller:WatcherCtrl
 * @description
 * # WatcherCtrl
 * Controller of the yongularApp
 */
angular.module('yongularApp')
  .controller('WatcherCtrl', function ($scope, $timeout) {
    $scope.filters = "Avil";
    $scope.$watch('filters', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        $timeout(() => {
          console.log("Changes!");
        }, 2000);
      }
    });
    $scope.changeIt = function () {
      $scope.filters = "New Value";
    }
  });
