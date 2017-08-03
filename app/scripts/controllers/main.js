'use strict';

/**
 * @ngdoc function
 * @name yongularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yongularApp
 */
angular.module('yongularApp')
  .controller('MainCtrl', ["$scope",function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS1',
      'HTML5 Boilerplate2',
      'AngularJS3',
      'HTML5 Boilerplate4',
      'AngularJS5',
      'HTML5 Boilerplate6',
      'AngularJS7',
      'Karma8'
    ];

    $scope.clickMe=function(){
     console.log("Hi");
    };

    $scope.loadMore=function(){
      console.log("sdfsd");
    }
  }]);
