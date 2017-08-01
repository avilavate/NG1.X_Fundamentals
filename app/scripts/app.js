'use strict';

/**
 * @ngdoc overview
 * @name yongularApp
 * @description
 * # yongularApp
 *
 * Main module of the application.
 */
angular
  .module('yongularApp', [
    'myDirective',
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
