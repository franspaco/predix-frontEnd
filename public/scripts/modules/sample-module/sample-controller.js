define(['angular', './sample-module'], function(angular, sampleModule) {
    'use strict';
    return sampleModule.controller('SampleCtrl', ['$scope', '$http', function($scope, $http) {
function consumeEngines($scope, $http){
         $http({
         method: 'GET',
         url: 'https://semi42.run.aws-usw02-pr.ice.predix.io/engines/all',
         headers:{

         }

         }).
         success(function(data){
             $scope.engineSe=data.engines;
         });
         };
         consumeEngines($scope, $http);

        document.getElementById('engineDrop').addEventListener('dropdown_content_value_changed', function(e) {
            var selectedEngine = e.detail;
            $scope.currentESN = selectedEngine.textValue;
            //console.log($scope.currentESN);
            consumeOneEngin($scope, $http, $scope.currentESN);
            consumeEngineState($scope, $http, $scope.currentESN);

        });

        function consumeOneEngin($scope, $http, currentESN){
            $http({
                method: 'GET',
                url: 'https://semi42.run.aws-usw02-pr.ice.predix.io/engines/'+currentESN+'/20/1/2000',
                headers: {
                }
            }).
            success(function(data) {
                //console.log('https://semi42.run.aws-usw02-pr.ice.predix.io/engines/'+currentESN+'/20/1/2000');
                //console.log(data.cycles);
                $scope.cyclesInGraph= data.cycles;
                //$scope.cyclesInGraph= [{"index":"0.5","cycle":"7"}];
                //console.log($scope.cyclesInGraph);
            });
        }


        function consumeEngineState($scope, $http, currentESN){
            $http({
                method: 'GET',
                url: 'https://semi42.run.aws-usw02-pr.ice.predix.io/engines/'+currentESN,
                headers: {
                }
            }).
            success(function(data) {
                $scope.engineSer= data.engineSerial;
                $scope.engineRout= data.route;
                $scope.engineCycle= data.cycles;
                $scope.engineTime= data.time;
                console.log($scope.engineState);

            });
        }




        function consumeEnginesForChart($scope, $http){
            $http({
                method: 'GET',
                url: 'https://semi42.run.aws-usw02-pr.ice.predix.io/engines/all',
                headers:{

                }

            }).
            success(function(data){
                $scope.engineSe=data.engines;
            });
        };
        consumeEnginesForChart($scope, $http);



        function consumeDataForTable($scope, $http) {
            $http({
                method: 'GET',
                url: 'https://jsonparse.run.aws-usw02-pr.ice.predix.io/',
                headers: {
                }
            }).
            success(function(data) {
                $scope.table = data.engines;
            });
        };
        consumeDataForTable($scope, $http);

        $scope.engineTable="Engines Table";
    }]);
});
