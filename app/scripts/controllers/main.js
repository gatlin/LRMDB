/**
 * @ngdoc function
 * @name maintApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maintApp
 */
angular.module('maintApp')
  .value('maintVals', [
         { "val": 0, "text": "Repair" }
        ,{ "val": 1, "text": "Replacement" }
        ,{ "val": 2, "text": "Preventative" }
        ,{ "val": 3, "text": "Other" }
        ])

  .controller('MainCtrl', function ($scope, $rootScope, maintVals, $http) {

      /**
       * Schema for our data:
       *
       * - type
       * - description
       * - unit number
       * - date maintenance was performed
       * - brand (if applicable)
       * - model number (if applicable)
       * - price paid (if applicable)
       * - name of person who completed maintenance (if applicable)
       * - name of contracted individual or company (if applicable)
       * - rate charged (if applicable)
       * - comments
       */

      $scope.maintVals = maintVals;

      $scope.pivot = "id";
      $scope.asc   = true;
      $scope.dirty = false;
      $scope.setDirty = function (which) {
          $scope.dirty = true;
      };

      $scope.sortBy = function(which) {
          if (which === $scope.pivot) {
              $scope.asc = !$scope.asc;
          }
          $scope.pivot = which;
      };

      $scope.freshId = (function() {
          var _id = 1;
          return function() {
              return (-1)*++_id;
          };
      })();

      // ids of local rows which have been updated
      $scope.updated = [];

      $scope.schema = [ { "name": "type", "human_name": "Type" }
                      , { "name": "description"
                        , "human_name": "Description" }
                      , { "name": "unit_number"
                        , "human_name": "Unit #" }
                      , { "name": "date_performed"
                        , "human_name": "Date" }
                      , { "name": "brand"
                        , "human_name": "Brand" }
                      , { "name": "model_number"
                        , "human_name": "Model #" }
                      , { "name": "price_paid"
                        , "human_name": "Price Paid" }
                      , { "name": "who_completed"
                        , "human_name": "Who?" }
                      , { "name": "who_contractor"
                        , "human_name": "Contractor?" }
                      , { "name": "rate_charged"
                        , "human_name": "Rate Charged" }
                      , { "name": "comments"
                        , "human_name": "Comments" }
                      ];

      $scope.rows = [];
      $scope.getIssues = function() {
          $http({
              "method": "GET",
              "url":    "/api/v1/issues/"
          })
            .success(function(data) {
                $scope.rows = data.results;
            });
      };

      $scope.getIssues();
      $scope.t = true;

      $scope.addRow = function() {
          $scope.rows.push({
              "id": $scope.freshId(),
              "type": maintVals[3].val,
              "description":"n/a",
              "unit":"n/a",
              "date_performed": "",
              "brand": "n/a",
              "model_number": "n/a",
              "price_paid": "n/a",
              "who_completed":"n/a",
              "who_contractor":"n/a",
              "rate_charged":"n/a",
              "comments":"n/a"
          });
          $scope.asc = true;
          $scope.pivot = "id";
          $scope.dirty = true;
      };

      // O(n) runtime, but I have other fish to fry
      $scope.removeRow = function(which) {
          for (var i = 0; i < $scope.rows.length; i++) {
              if ($scope.rows[i].id === which) {
                  $scope.rows.splice(i,1);
                  break;
              }
          }
          $http({
              "method":"POST",
              "url":"/api/v1/issues/"+which+"/",
              "headers":{
                  "X-HTTP-Method-Override":"DELETE"
              }
          }).
                success(function(data) {
                    console.log("successfully deleted it");
                });
      };

      $scope.saveIssues = function() {
          $http({
              "method": "POST",
              "url": "/api/v1/issues/bulk/",
              "data": $scope.rows,
              "headers":{
                  "X-HTTP-Method-Override":"PUT"
              }
          })
            .success(function(data) {
                console.log(data);
                $scope.dirty = false;
                $scope.getIssues();
            });
      };

      if ($scope.rows.length === 0) {
          $scope.addRow();
      }

  })
  .filter('maintenanceType', function(maintVals) {
      return function(input) {
          return maintVals[input].text;
      };
  });
