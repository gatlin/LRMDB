'use strict';

/**
 * @ngdoc function
 * @name maintApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the maintApp
 */
angular.module('maintApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
