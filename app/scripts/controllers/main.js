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

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clickMe=function(){
     console.log("Hi");
    };
  }]);
