'use strict';

/**
 * @ngdoc filter
 * @name yongularApp.filter:uppercase
 * @function
 * @description
 * # uppercase
 * Filter in the yongularApp.
 */
angular.module('yongularApp')
  .filter('uppercase', function () {

    return function (input, yesNo) {
      if (!yesNo) return input;
      return input.substring(0, 1).toUpperCase() + input.substring(1, input.length);
    };
  });
