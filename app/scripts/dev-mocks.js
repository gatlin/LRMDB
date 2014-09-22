'use strict';

angular.module('dev-mocks',['ngMockE2E'])
  .run(function($httpBackend, maintVals) {

      var data = {
            "count": 1, 
            "next": null, 
            "previous": null, 
            "results": [
                {
                    "id": 1, 
                    "type": 0, 
                    "description": "some test shit", 
                    "unit_number": "201", 
                    "date_performed": "2014-09-20T20:33:09.761Z", 
                    "brand": "(none)", 
                    "model_number": "(none)", 
                    "price_paid": "200.0", 
                    "who_completed": "me", 
                    "who_contractor": "you", 
                    "rate_charged": "40.00", 
                    "comments": "huh"
                }
            ]
        };

      $httpBackend.whenGET('/api/v1/issues/').respond(data);
      $httpBackend.whenPOST('/api/v1/issues/bulk/').respond(function(method,url,data) {
          console.log(data);
          return [200, {"status": "updated"}, {}];
      });
      $httpBackend.whenPOST('/api/v1/issues/1/').respond(function(method,url,data) {
          console.log(data);
          return [200, {"status": "updated"}, {}];
      });
      $httpBackend.whenGET(/^views\//).passThrough();

  });

angular.module('maintApp').requires.push('dev-mocks');

