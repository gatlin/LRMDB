'use strict';

/**
 * @ngdoc overview
 * @name maintApp
 * @description
 * # maintApp
 *
 * Main module of the application.
 */
angular
  .module('maintApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable'
  ])
  .run(function($http, $cookies) {
      $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
      $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
