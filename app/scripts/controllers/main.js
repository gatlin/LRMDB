'use strict';

/**
 * @ngdoc function
 * @name maintApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maintApp
 */
angular.module('maintApp')
  .controller('MainCtrl', function ($scope) {

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

      $scope.typesOfMaintenance = {
          REPAIR: 0,
          REPLACEMENT: 1,
          PREVENTATIVE: 2,
          OTHER: 3
      };

      $scope.rows = [{
          "type": $scope.typesOfMaintenance.REPAIR,
          "description": "richard ruined his toilet",
          "unit": "201",
          "date_performed": moment("2014-09-11").format("YYYY-MM-DD"),
          "brand": "",
          "model_number": "",
          "price_paid": "200.00",
          "who_completed": "mcallen",
          "who_contractor": "",
          "rate_charged": "",
          "comments": "holy shit that was disgusting"
      },{
          "type": $scope.typesOfMaintenance.REPAIR,
          "description": "gatlin needs his toilet plunged",
          "unit": "201",
          "date_performed": moment("2014-09-28").format("YYYY-MM-DD"),
          "brand": "",
          "model_number": "",
          "price_paid": "0.00",
          "who_completed": "mcallen",
          "who_contractor": "",
          "rate_charged": "",
          "comments": "gatlin is an asshole"
      },{
          "type": $scope.typesOfMaintenance.REPAIR,
          "description": "fritz chewed up the commons couch",
          "unit": "106",
          "date_performed": moment("2014-08-07").format("YYYY-MM-DD"),
          "brand": "",
          "model_number": "",
          "price_paid": "200.00",
          "who_completed": "n/a",
          "who_contractor": "",
          "rate_charged": "",
          "comments": "what an awful creature"
      }];

      $scope.data = {
          data: "rows",
          enableCellEditOnFocus: true,
          enableRowSelection: true,
          showGroupPanel: true,
          enableCellEdit: true,
          enablePinning: true,
          enableColumnResize: true,
          maintainColumnRatios: false,
          showFilter: true,
          plugins: [new ngGridFlexibleHeightPlugin()]
      };

      $scope.addRow = function() {
          $scope.rows.push({
              "type": $scope.typesOfMaintenance.OTHER,
              "description":"",
              "unit":"",
              "date_performed": moment().format("YYYY-MM-DD"),
              "brand": "",
              "model_number": "",
              "price_paid": "",
              "who_completed":"",
              "who_contractor":"",
              "rate_charged":"",
              "comments":""
          });
      };
  })
  .filter('maintenanceType', function() {
      return function(input) {
          var which = null;
          switch (input) {
              case 0:
                  which = "Repair";
                  break;
              case 1:
                  which = "Replacement";
                  break;
              case 2:
                  which = "Preventative";
                  break;
              case 3:
                  which = "Other";
          };
          return which;
      };
  });
