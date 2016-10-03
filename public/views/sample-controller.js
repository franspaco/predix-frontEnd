/*define(['angular', './sample-module'], function(angular, sampleModule){
  'use strict';
  return sampleModule.controller('SampleCtrl', ['$scope', '$http', function($scope, $http){
    function consumerService($scope, $http){
      $http({
        method: 'GET',
        url: 'http://localhost:9092/engines/700162'
        headers:{
        }
      }).
      success(function(data){
        $scope.data;
      });
    }
    consumerService($scope, $http);
  }]);
});
*/
